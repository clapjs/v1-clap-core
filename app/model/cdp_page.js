'use strict';

module.exports = app => {
  const attributes = {
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
    layout: {
      name: '页面布局',
      type: String,
      default: 'TL',
    },
    layoutConfig: {
      name: '页面设置',
      type: Object,
      default: {
        referFilter: [],
      },
    },
    controlType: {
      name: '管控类型',
      type: String,
      default: 'Organ',
    },
    idEntityList: {
      name: 'idEntityList',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_entity',
    },
    idEntityCard: {
      name: 'idEntityCard',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_entity',
    },
    listConfig: {
      name: 'listConfig',
      type: Object,
      default: {
        pipeline: {},
      },
    },
    defaultReferField: {
      name: '布局识别字段',
      type: String,
    },
    defaultReferStorage: {
      name: '默认回填字段',
      type: String,
      default: '_id',
    },
    defaultReferDisplay: {
      name: '默认回显字段',
      type: String,
    },
    defaultReferType: {
      name: '默认管控类型',
      type: String,
      default: 'Organ',
    },
    isWorkflow: {
      name: '是否启用审批流',
      type: Boolean,
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };

  return app.clapMongooseSchema(attributes, false);

};
