'use strict';

module.exports = app => {
  return {
    idEntity: {
      name: '所属实体',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_entity',
    },
    p_id: {
      name: '上级节点',
      type: String,
      default: '0',
    },
    name: {
      name: '字段名称',
      type: String,
    },
    field: {
      name: '字段',
      type: String,
    },
    type: {
      name: '字段类型',
      type: String,
    },
    ref: {
      name: '关联实体',
      type: String,
    },
    belong: {
      name: '绑定字段',
      type: String,
    },
    childType: {
      name: '子实体类型',
      type: String,
    },
    defaultValue: {
      name: '默认值',
      type: String,
    },
    listVisible:{
      name: '列表可见',
      type: Boolean,
      default:true
    },
    editVisible:{
      name: '表单可见',
      type: Boolean,
      default:true
    },
    listWidth:{
      name: '列表宽度',
      type: Number,
      default:120
    },
    editWidth:{
      name: '表单宽度',
      type: Number,
      default:24
    },
    widget:{
      name: '组件',
      type: String,
    },
    widgetConfig:{
      name: '组件设置',
      type: Object,
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
};
