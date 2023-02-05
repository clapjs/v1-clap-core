'use strict';

module.exports = {
  loadClapRouter(app) {
    require('../router')(app);
  },
  MongoEntity(fields,entityType="base",controlType="Global"){
    const Schema = new this.Mongoose.Schema(fields, { timestamps: true });
    Schema.plugin(require('mongoose-deep-populate')(this.Mongoose));
    if(entityType==='tree'){
      Schema.add({
        p_id: {
          name: '上级节点',
          type: String,
          default: '0',
        },
      })
    }
    if(entityType==='flow'){
      Schema.add({
        idSubmitUser: {
          name: '提交人ID',
          type: this.Mongoose.Schema.ObjectId,
          ref: 'sys_user',
        },
        submitUser: {
          name: '提交人',
          type: String,
        },
        submitAt: {
          name: '提交时间',
          type: Date,
        },
        idVerifyUser: {
          name: '审核人ID',
          type: this.Mongoose.Schema.ObjectId,
          ref: 'sys_user',
        },
        verifyUser: {
          name: '审核人',
          type: String,
        },
        verifyAt: {
          name: '审核时间',
          type: Date,
        },
        idCloseUser: {
          name: '关闭人ID',
          type: this.Mongoose.Schema.ObjectId,
          ref: 'sys_user',
        },
        closeUser: {
          name: '关闭人',
          type: String,
        },
        closeAt: {
          name: '关闭时间',
          type: Date,
        },
        idOpenUser: {
          name: '审核人ID',
          type: this.Mongoose.Schema.ObjectId,
          ref: 'sys_user',
        },
        openUser: {
          name: '打开人',
          type: String,
        },
        openAt: {
          name: '打开时间',
          type: Date,
        }
      });
    }
    if(['Group','Organ','GroupAndOrgan'].includes(controlType)){
      Schema.add({
        idOrgan: {
          type: this.Mongoose.Schema.ObjectId,
          ref: 'org_organ',
        },
        organCode: {
          name: '组织编码',
          type: String,
          belong:'idOrgan',
          belongField:'organCode'
        },
        organName: {
          name: '组织名称',
          type: String,
          belong:'idOrgan',
          belongField:'organName'
        },
      });
    }
    Schema.add({
      idCreatedUser: {
        name: '创建人ID',
        type: this.Mongoose.Schema.ObjectId,
        ref: 'sys_user',
      },
      createdUser: {
        name: '创建人',
        type: String,
        belong:'idCreatedUser',
        belongField:'userName'
      },
      idUpdatedUser: {
        name: '修改人ID',
        type: this.Mongoose.Schema.ObjectId,
        ref: 'sys_user',
      },
      updatedUser: {
        name: '修改人',
        type: String,
        belong:'idUpdatedUser',
        belongField:'userName'
      },
      __s: {
        name: '状态标记',
        type: Number,
        default: 1,
      },
      __r: {
        name: '删除标记',
        type: Number,
        default: 0,
      },
    });
    Schema.set('toJSON', { getters: true, virtuals: true });
    Schema.set('toObject', { getters: true, virtuals: true });
    return Schema;
  }
};
