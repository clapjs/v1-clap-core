'use strict';

module.exports = app => {
  return {
    idApplication: {
      name: '所属应用',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    code: {
      name: '实体编码',
      type: String,
    },
    name: {
      name: '实体名称',
      type: String,
    },
    dsType:{
      name: '表类型',
      type: String,
    },
    dsCollection: {
      name: '表名称',
      type: String,
    },
    dsOption:{
      name: '表配置',
      type: Object
    },
    type: {
      name: '实体类型',
      type: String,
      default: 'base'
    },
    controlType: {
      name: '管控类型',
      type: String,
      default: 'Global'
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
};
