'use strict';

module.exports = app => {
  return {
    idPage: {
      name: '所属页面',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_page',
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
