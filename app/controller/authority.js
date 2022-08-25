'use strict';

const crypto = require('crypto');

const Controller = require('egg').Controller;
const moment = require('moment');
const generatePassword = require('password-generator');

class ClapAuthCtrl extends Controller {
  async checkLogin(userCode, userPwd) {
    const error = { code: '0' };
    const record = await this.ctx.model.SysUser.findOne({ userCode }).catch(e => {
      if (e) error.code = '700';
    });
    if (!record) {
      error.code = '800';
      error.message = '抱歉，该用户不存在，请联系管理员！';
    } else if (record.userPwd !== crypto.createHash('md5').update(userPwd).digest('base64')) {
      error.code = '801';
      error.message = '抱歉！密码错误！';
    } else if (record.__s === 0) {
      error.code = '802';
      error.message = '抱歉，该用户已停用，请联系管理员！';
    }
    return { error, record };
  }

  async login() {
    let error = { code: '0' };
    const { userCode, userPwd } = this.ctx.request.body;
    if (!userCode) {
      error.code = '20201';
      error.message = 'param userCode missing';
    }
    if (!userPwd) {
      error.code = '20202';
      error.message = 'param userPwd missing';
    }
    let record = {};
    if (error.code === '0') {
      await this.checkLogin(userCode, userPwd).then(res => {
        error = res.error.code !== '0' ? res.error : error;
        record = res.error.code === '0' ? res.record : record;
      });
    }
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async changePwd() {
    let error = { code: '0' };
    const { userCode, userPwd, userPwdNew } = this.ctx.request.body;
    if (!userCode) {
      error.code = '20201';
      error.message = 'param userCode missing';
    }
    if (!userPwd) {
      error.code = '20202';
      error.message = 'param userPwd missing';
    }
    if (!userPwdNew) {
      error.code = '20202';
      error.message = 'param userPwdNew missing';
    }
    if (error.code === '0') {
      await this.checkLogin(userCode, userPwd).then(res => {
        error = res.error.code !== '0' ? res.error : error;
      });
      if (error.code === '0') {
        await this.ctx.model.SysUser.updateOne({ userCode }, { userPwd: crypto.createHash('md5').update(userPwdNew).digest('base64') }).catch(e => {
          if (e) error.code = '700';
        });
      }
    }
    this.ctx.body = error.code === '0' ? {
      error,
    } : {
      error,
    };
  }

  async resetPwd() {
    const error = { code: '0' };
    const { userCode } = this.ctx.request.body;
    if (!userCode) {
      error.code = '20201';
      error.message = 'param userCode missing';
    }
    let record;
    if (error.code === '0') {
      record = { userPwd: generatePassword(6, false) };
      await this.ctx.model.SysUser.updateOne({ userCode }, { userPwd: crypto.createHash('md5').update(record.userPwd).digest('base64') }).catch(e => {
        if (e) error.code = '700';
      });
    }
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async register() {
    const error = { code: '0' };
    const { userCode, userName, userPwd, organCode, organName } = this.ctx.request.body;
    if (!userCode) {
      error.code = '20201';
      error.message = 'param userCode missing';
    }
    if (!userPwd) {
      error.code = '20202';
      error.message = 'param userPwd missing';
    }
    let record;
    if (error.code === '0') {
      record = await this.ctx.model.SysUser.findOne({ userCode })
        .catch(e => {
          if (e) {
            error.code = '700';
          }
          console.info(e);
        });
      if (record) {
        error.code = '900';
        error.message = '用户已注册，请更换手机号重新注册！';
      }
      if (error.code === '0') {
        record = await this.ctx.model.SysUser.create({
          userCode,
          userName: userName ? userName : userCode,
          userPwd: crypto.createHash('md5')
            .update(userPwd)
            .digest('base64'),
        });
        if (organCode || organName) {
          record.registerOrgan = await this.ctx.model.OrgOrgan.create({ organCode, organName, license: moment().add(15, 'days') });
          record.registerOrganUser = await this.ctx.model.OrgOrganUser.create({ idOrgan: record.registerOrgan._id, idUser: record._id });
        }
      }
    }
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async registerOrgan() {
    const error = {
      code: '0',
    };
    let record;
    const { ctx } = this,
      { organName, idUser } = this.ctx.request.body;
    if (!organName) {
      error.code = '504';
      error.message = '缺少参数 organName';
    }
    if (!idUser) {
      error.code = '504';
      error.message = '缺少参数 idUser';
    }
    if (error.code === '0') {
      const organ = await ctx.model.OrgOrgan.create({ organName });
      await ctx.model.OrgOrgan.updateMany({ _id: organ._id }, { idGroupOrgan: organ._id });
      if (organ) {
        const apps = await ctx.model.CdpApplication.find({}).lean();
        const user = await ctx.model.SysUser.findOne({ _id: idUser });
        const admin = await ctx.model.OrgOrganUser.create({ idUser, name: user.userName, idOrgan: organ._id, userType: 'Admin', workNo: 'admin', __s: 1 });
        await ctx.model.OrgApplication.create(apps.map(el => {
          return { idApplication: el._id, idOrgan: organ._id, license: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000) };
        }));
        record = await ctx.model.OrgOrganUser.findOne({ _id: admin._id }).populate([ 'idOrgan' ]);
      } else {
        error.code = '500';
        error.message = '组织创建失败';
      }
    }
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async registerByOrganUser() {
    const error = {
      code: '0',
    };
    let record;
    const { idOrganUser, userCode, userPwd = '123456' } = this.ctx.request.body;
    if (!idOrganUser) {
      error.code = '504';
      error.message = '缺少参数 idOrganUser';
    }
    if (error.code === '0') {
      const organUser = await this.ctx.model.OrgOrganUser.findOne({ _id: idOrganUser })
        .catch(e => {
          if (e) {
            error.code = '700';
          }
          console.info(e);
        });
      if (organUser.idUser) {
        error.code = '505';
        error.message = '该人员已绑定登录账号';
      } else {
        record = await this.ctx.model.SysUser.findOne({ userCode, userType: 'Default' }).lean();
        if (!record) {
          record = await this.ctx.model.SysUser.create({
            userCode,
            userName: organUser.name,
            userPwd: crypto.createHash('md5')
              .update(userPwd)
              .digest('base64'),
            userType: 'Default',
          }).catch(e => {
            if (e) {
              error.code = '700';
            }
            console.info(e);
          });
          await this.ctx.model.OrgOrganUser.updateMany({ _id: idOrganUser }, { idUser: record._id });
        } else {
          error.code = '505';
          error.message = '该登录账号已开通，请联系管理员绑定组织关系';
        }
      }
    }
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async getUser(access_token, organ) {
    const user = await this.ctx.model.OrgOrganUser.findOne({ _id: access_token }, { idUser: 1, idOrgan: 1, userType: 1, idBranch: 1 })
      .populate('idOrgan')
      .lean()
      .catch(e => {
        console.info(e);
      });
    user.groupOrgan = await this.ctx.model.OrgOrgan.find({ idGroupOrgan: user.idOrgan.idGroupOrgan })
      .catch(e => {
        console.info(e);
      });
    const roles = await this.ctx.model.SysUserRole.find({ idUser: user.idUser, idOrgan: { $in: user.groupOrgan } })
      .catch(e => {
        console.info(e);
      });
    user.roles = roles.map(item => {
      return item.idRole;
    });
    for (const role of roles) {
      role.duties = await this.ctx.model.SysRoleDuty.find({ idRole: role.idRole, idOrgan: organ ? organ : { $in: user.groupOrgan } });
    }
    user.rolesDuties = roles.reduce((pre, cur) => {
      return { ...pre, [cur.idRole]: cur.duties };
    }, {});
    const duties = await this.ctx.model.SysRoleDuty.find({ idRole: { $in: user.roles }, idOrgan: organ ? organ : { $in: user.groupOrgan } })
      .catch(e => {
        console.info(e);
      });
    user.duties = duties.map(item => {
      return item.idDuty;
    });
    return user;
  }

  async getUserApplication() {
    const error = {
      code: '0',
    };
    const records = [];
    if (!this.ctx.request.query.access_token) {
      error.code = '20201';
      error.message = 'param access_token missing';
    }
    let filter = {};
    if (error.code === '0') {
      const user = await this.getUser(this.ctx.request.query.access_token);
      const applicationGroups = await this.ctx.model.CdpApplicationGroup.find();
      console.log(user.userType);
      const applicationGroup = applicationGroups.filter(item => item.range.map(i => i.code).includes(user.userType))[0];
      console.log(applicationGroup);
      if (!applicationGroup.isPermit || user.userType === 'Admin') {
        filter = { idApplication: { $in: (await this.ctx.model.CdpApplication.find({ idApplicationGroup: applicationGroup._id })).map(item => item._id) }, idOrgan: user.idOrgan.idGroupOrgan };
      } else {
        // 根据角色、组件分组获取用户拥有的功能权限
        const aggregate = await this.ctx.model.SysDutyMenu.aggregate([
          {
            $match: {
              idDuty: {
                $in: user.duties,
              },
            },
          }, {
            $group: {
              _id: '$idApplication',
            },
          },
        ]);
        const $in = [];
        for (const agg of aggregate) {
          $in.push(agg._id);
        }
        filter = { idApplication: { $in }, idOrgan: user.idOrgan.idGroupOrgan };
      }
      const applications = await this.ctx.model.OrgApplication.find(filter).populate('idApplication');
      for (const application of applications) {
        records.push(application);
      }
    }

    this.ctx.body = error.code === '0' ? {
      error,
      records,
    } : {
      error,
    };
  }

  async getUserMenu() {
    const error = {
      code: '0',
    };
    let records = [];
    if (!this.ctx.request.query.access_token) {
      error.code = '20201';
      error.message = 'param access_token missing';
    }
    if (!this.ctx.request.query.application) {
      error.code = '20202';
      error.message = 'param application missing';
    }

    if (error.code === '0') {
      const user = await this.getUser(this.ctx.request.query.access_token);
      const applicationGroups = await this.ctx.model.CdpApplicationGroup.find();
      const applicationGroup = applicationGroups.filter(item => item.range.map(i => i.code).includes(user.userType))[0];
      if (!applicationGroup.isPermit || user.userType === 'Admin') {
        records = await this.ctx.model.CdpMenu.find({ idApplication: this.ctx.request.query.application })
          .sort('order')
          .catch(e => {
            if (e) {
              error.code = '700';
            }
            console.info(e);
          });
      } else {
        // 根据角色、组件分组获取用户拥有的功能权限
        const aggregate = await this.ctx.model.SysDutyMenu.aggregate([
          {
            $match: {
              idDuty: {
                $in: user.duties,
              },
              idApplication: new this.ctx.app.mongoose.Types.ObjectId(this.ctx.request.query.application),
            },
          }, {
            $group: {
              _id: '$idMenu',
            },
          },
        ]);
        const UserMenu = await this.ctx.model.CdpMenu.populate(aggregate, { path: '_id' }).catch(e => {
          if (e) {
            error.code = '700';
          }
          console.info(e);
        });// 获取用户组件列表

        const menu = JSON.parse(JSON.stringify(await this.ctx.model.CdpMenu.find({ idApplication: this.ctx.request.query.application }).catch(e => {
          if (e) {
            error.code = '700';
          }
          console.info(e);
        })));// 获取所有组件列表

        const menuIds = [];// 组件id集合
        const pMenuIds = [];// 父组件id集合

        for (const sc of UserMenu) {
          if (sc._id) {
            menuIds.push(sc._id._id.toString());// 将Objectid转化为String再比较；
            records.push(sc._id);
          }
        }
        // 获得父组件集合
        for (const um of UserMenu) {
          if (um._id) {
            const parents = this.ctx.helper.getTreeParent(menu, um._id.p_id);
            if (parents) {
              for (const p of parents.split(',')) {
                pMenuIds.push(p);
              }
            }
          }
        }

        for (const pm of Array.from(new Set(pMenuIds))) {
          for (const m of menu) {
            if (m.id === pm) {
              if (menuIds.indexOf(pm) < 0) {
                records.push(m);
              }
            }
          }
        }
        for (const m of menu) {
          if (m.type === 'R' && m.idApplication.toString() === this.ctx.request.query.application) {
            records.push(m);
          }
        }

        for (let j = 0; j < records.length - 1; j++) {
          // 两两比较，如果前一个比后一个大，则交换位置。
          for (let i = 0; i < records.length - 1 - j; i++) {
            if (records[i].order > records[i + 1].order) {
              const temp = records[i];
              records[i] = records[i + 1];
              records[i + 1] = temp;
            }
          }
        }
        // 根据order属性进行排序号
      }
    }

    this.ctx.body = error.code === '0' ? {
      error,
      records,
    } : {
      error,
    };
  }

  async getUserButton() {
    const error = {
      code: '0',
    };
    const record = { buttons: {}, organButtons: {}, isOrganAuth: true };
    if (!this.ctx.request.query.access_token) {
      error.code = '20401';
      error.message = 'param access_token missing';
    }
    if (!this.ctx.request.query.menu) {
      error.code = '20403';
      error.message = 'param menu missing';
    }
    if (error.code === '0') {
      const user = await this.getUser(this.ctx.request.query.access_token, this.ctx.request.query.organ);
      const aggregate = await this.ctx.model.CdpMenuButton.aggregate([
        {
          $match: {
            idMenu: new this.ctx.app.mongoose.Types.ObjectId(this.ctx.request.query.menu),
          },
        },
        {
          $sort: { _id: 1 },
        },
        {
          $group: {
            _id: '$location',
            buttons: { $push: '$$ROOT' },
          },
        },
      ]);
      const applicationGroups = await this.ctx.model.CdpApplicationGroup.find();
      const applicationGroup = applicationGroups.filter(item => item.range.map(i => i.code).includes(user.userType))[0];
      record.buttons = aggregate.reduce((sum, location) => { return { ...sum, [location._id]: location.buttons }; }, {});
      if (!applicationGroup.isPermit || user.userType === 'Admin') {
        record.isOrganAuth = false;
      } else {
        const defaultRecord = JSON.parse(JSON.stringify(user.groupOrgan)).reduce((obj, item) => {
          return { ...obj,
            [item._id.toString()]: Object.keys(record.buttons).reduce((sum, location) => { return { ...sum, [location]: [] }; }, {}),
          };
        }, {});
        record.organButtons = await this.ctx.model.SysRoleDuty.aggregate([
          {
            $match: {
              idRole: { $in: user.roles },
            },
          },
          {
            $lookup: {
              from: 'sys_duty_button',
              let: { idDuty: '$idDuty' },
              pipeline: [{
                $match: { $expr: { $and: [
                  { $eq: [ '$$idDuty', '$idDuty' ] },
                  { $eq: [ this.ctx.helper.toObjectID(this.ctx.request.query.menu), '$idMenu' ] },
                ] } },
              }],
              as: 'button',
            },
          },
          { $unwind: { path: '$button' } },
          {
            $lookup: {
              from: 'cdp_menu_button',
              localField: 'button.idMenuButton',
              foreignField: '_id',
              as: 'button',
            },
          },
          { $unwind: { path: '$button' } },
          { $group: {
            _id: {
              location: '$button.location',
              idOrgan: '$idOrgan',
            },
            buttons: { $push: '$button' },
          } },
        ]).then(OrgButtons => {
          return JSON.parse(JSON.stringify(OrgButtons)).reduce((sum, item) => {
            if (!sum[item._id.idOrgan]) {
              sum[item._id.idOrgan] = {};
            }
            if (!sum[item._id.idOrgan][item._id.location]) {
              sum[item._id.idOrgan][item._id.location] = [];
            }
            sum[item._id.idOrgan][item._id.location].push(...item.buttons.filter(el => !sum[item._id.idOrgan][item._id.location].map(el => el._id.toString()).includes(el._id.toString())));
            return sum;
          }, defaultRecord);
        });
      }
      // 根据order属性进行排序号
      for (const r in record.buttons) {
        if (record.buttons[r][0]) {
          for (let j = 0; j < record.buttons[r].length - 1; j++) {
            // 两两比较，如果前一个比后一个大，则交换位置。
            for (let i = 0; i < record.buttons[r].length - 1 - j; i++) {
              if (record.buttons[r][i].order > record.buttons[r][i + 1].order) {
                const temp = record.buttons[r][i];
                record.buttons[r][i] = record.buttons[r][i + 1];
                record.buttons[r][i + 1] = temp;
              }
            }
          }
        }
      }
    }
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async getUserSecurity() {
    const error = {
      code: '0',
    };
    const record = {};
    if (!this.ctx.request.query.access_token) {
      error.code = '20401';
      error.message = 'param access_token missing';
    }
    if (!this.ctx.request.query.menu) {
      error.code = '20403';
      error.message = 'param menu missing';
    }
    if (error.code === '0') {
      const user = await this.getUser(this.ctx.request.query.access_token);
      if (user.userType === 'User') {
        const organs = await this.ctx.model.SysRoleDuty.aggregate([
          {
            $lookup: {
              from: 'sys_duty_menu',
              localField: 'idDuty',
              foreignField: 'idDuty',
              as: 'dutyMenu',
            },
          },
          {
            $unwind: { path: '$dutyMenu', preserveNullAndEmptyArrays: false },
          },
          {
            $match: {
              idRole: {
                $in: user.roles,
              },
              'dutyMenu.idMenu': this.ctx.helper.toObjectID(this.ctx.request.query.menu),
            },
          }, {
            $group: {
              _id: '$idOrgan',
            },
          },
        ]);
        for (const organ of organs) {
          record[organ._id] = { scope: 0 };
          // 获取
          const roleDuties = await this.ctx.model.SysRoleDuty.find({
            idRole: { $in: user.roles },
            idOrgan: organ._id,
          });
          for (const roleDuty of roleDuties) {
            const dutyMenus = await this.ctx.model.SysDutyMenu.find({ idMenu: this.ctx.request.query.menu, idDuty: roleDuty.idDuty });
            for (const dutyMenu of dutyMenus) {
              record[organ._id].scope = record[organ._id].scope < dutyMenu.scope ? dutyMenu.scope : record[organ._id].scope;
            }
          }
          if (record[organ._id].scope === 0) {
            record[organ._id].filter = { createdUser: { $in: [ user.idUser ] } };
          }
          if (record[organ._id].scope === 1) {
            const users1 = await this.ctx.model.OrgOrganUser.find({ idBranch: user.idBranch }, { idUser: 1 }).lean();
            record[organ._id].filter = { createdUser: { $in: users1.map(item => item.idUser) } };
          }
          if (record[organ._id].scope === 2) {
            const branches = await this.ctx.model.OrgBranch.find({ idOrgan: user.idOrgan._id });
            const childBranch = this.ctx.helper.getTreeChildren(branches, user.idBranch);
            const users2 = await this.ctx.model.OrgOrganUser.find({ idBranch: { $in: [ user.idBranch, ...(childBranch.length > 0 ? childBranch.split(',') : []) ] } }, { idUser: 1 }).lean();
            record[organ._id].filter = { createdUser: { $in: users2.map(item => item.idUser) } };
          }
          if (record[organ._id].scope === 3) {
            record[organ._id].filter = {};
          }
        }
      } else if (user.userType === 'Admin') {
        for (const organ of user.groupOrgan) {
          record[organ._id] = { scope: 3, filter: {} };
        }
      }
    }
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }

  async getUserOrgan() {
    const error = {
      code: '0',
    };
    let records = [];
    if (!this.ctx.request.query.access_token) {
      error.code = '20401';
      error.message = 'param access_token missing';
    }
    if (!this.ctx.request.query.menu) {
      error.code = '20403';
      error.message = 'param menu missing';
    }
    if (error.code === '0') {
      const user = await this.getUser(this.ctx.request.query.access_token)
        .catch(e => {
          if (e) {
            error.code = '700';
          }
          console.info(e);
        });
      if (user.userType === 'User') {
        const aggregate = await this.ctx.model.SysRoleDuty.aggregate([
          {
            $lookup: {
              from: 'sys_duty_menu',
              localField: 'idDuty',
              foreignField: 'idDuty',
              as: 'dutyMenu',
            },
          },
          {
            $unwind: { path: '$dutyMenu', preserveNullAndEmptyArrays: false },
          },
          {
            $match: {
              idRole: {
                $in: user.roles,
              },
              'dutyMenu.idMenu': this.ctx.helper.toObjectID(this.ctx.request.query.menu),
            },
          }, {
            $group: {
              _id: '$idOrgan',
            },
          },
        ]);
        const organs = await this.ctx.model.OrgOrgan.populate(aggregate, { path: '_id' })
          .catch(e => {
            if (e) {
              error.code = '700';
            }
            console.info(e);
          });// 获取组织详细信息

        const wholeOrgans = await this.ctx.model.OrgOrgan.find().lean()
          .catch(e => {
            if (e) {
              error.code = '700';
            }
            console.info(e);
          });// 获取组织列表

        records = organs.map(item => { return item._id; });

        const pOrganIds = [];// 上级组织id集合

        // 判断每一个组织的父节点是否在已有权限组织集合当中，如果没有添加到父组织集合吗，并将其设为disabled以便前端不能选择
        for (const organ of organs) {
          const parents = this.ctx.helper.getTreeParent(wholeOrgans.map(e => { return { ...e, id: e._id.toString() }; }), organ._id.p_id).split(',');
          for (const parent of parents) {
            if (pOrganIds.indexOf(parent) < 0 && organs.map(item => { return item._id._id.toString(); }).indexOf(parent) < 0) {
              pOrganIds.push(parent);
            }
          }
        }

        for (const po of Array.from(new Set(pOrganIds))) {
          for (const o of wholeOrgans.map(e => { return { ...e, id: e._id.toString() }; })) {
            if (o.id === po) {
              o.disabled = true;
              o.selectable = false;
              records.push(o);
            }
          }
        }
        // 根据order属性进行排序号

        for (let j = 0; j < records.length - 1; j++) {
          // 两两比较，如果前一个比后一个大，则交换位置。
          for (let i = 0; i < records.length - 1 - j; i++) {
            if (records[i].order > records[i + 1].order) {
              const temp = records[i];
              records[i] = records[i + 1];
              records[i + 1] = temp;
            }
          }
        }
      } else if (user.userType === 'Admin') {
        records = user.groupOrgan;
      }
    }

    // 响应结果数据
    this.ctx.body = error.code === '0' ? {
      error,
      records,
    } : {
      error,
    };
  }

  async getApplicationParams() {
    const error = {
      code: '0',
    };
    const record = {};
    if (!this.ctx.request.query.access_token) {
      error.code = '20401';
      error.message = 'param access_token missing';
    }
    if (error.code === '0') {
      const user = await this.getUser(this.ctx.request.query.access_token)
        .catch(e => {
          if (e) {
            error.code = '700';
          }
          console.info(e);
        });
      const applicationParams = await this.ctx.model.CdpApplicationParams.find({})
        .catch(e => {
          if (e) {
            error.code = '700';
          }
          console.info(e);
        });
      const organApplicationParams = await this.ctx.model.OrgApplicationParams.find({ idOrgan: user.idOrgan.idGroupOrgan }).populate('idApplicationParams').catch(e => {
        if (e) {
          error.code = '700';
        }
        console.info(e);
      });

      for (const applicationParam of applicationParams) {
        record[applicationParam.code] = applicationParam.defaultValue;
      }

      for (const organApplicationParam of organApplicationParams) {
        record[organApplicationParam.idApplicationParams.code] = organApplicationParam.value;
      }
    }

    // 响应结果数据
    this.ctx.body = error.code === '0' ? {
      error,
      record,
    } : {
      error,
    };
  }
}

module.exports = ClapAuthCtrl;
