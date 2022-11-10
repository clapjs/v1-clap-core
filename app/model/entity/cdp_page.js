'use strict';

module.exports = app => {
  return {
    idApplication: {
      name: '所属应用',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    code: {
      name: '页面编码',
      type: String,
    },
    name: {
      name: '页面名称',
      type: String,
    },
    type: {
      name: '页面类型',
      type: String,
    },
    idEntity: {
      name: 'idEntity',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_entity',
    },
    pipeline:{
      type: String,
    },
    listConfig: {
      name: '列表配置',
      type: Object,
      default: {
        mode:'Table'
      }
    },
    editConfig: {
      name: '表单配置',
      type: Object,
      default: {
        mode:'Modal',
        compact:false
      }
    },
    reportConfig: {
      name: '报表配置',
      type: Object,
    },
    graphConfig: {
      name: '图标配置',
      type: Object,
    },
    entities: [
      {
        type: app.Mongoose.Schema.ObjectId,
        ref: 'cdp_entity',
      }
    ],
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
};
