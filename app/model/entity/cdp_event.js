'use strict';

module.exports = app => {
  return {
    idApplication: {
      name: '所属应用',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    code: {
      name: '事件编码',
      type: String,
    },
    name: {
      name: '事件名称',
      type: String,
    },
    description: {
      name: '事件描述',
      type: String,
    },
    type: {
      name: '事件类型',
      type: String,
    },
    template: {
      name: '模板',
      type: String,
    },
    idMenu: {
      name: '跳转页面',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
    idEntity: {
      name: '数据来源',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_entity',
    },
    params: [ new app.Mongoose.Schema({
      param: {
        name: '参数',
        type: String,
      },
      source: {
        name: '来源',
        type: String,
      },
      field: {
        name: '字段',
        type: String,
      },
    }) ],
  };

};
