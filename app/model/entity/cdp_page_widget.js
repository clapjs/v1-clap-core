'use strict';

module.exports = app => {
  return {
    idPage: {
      name: '所属页面',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_page',
    },
    mode: {
      name: '所属模式',
      type: String,
    },
    p_id: {
      name: '上级节点',
      type: String,
      default: '0',
    },
    name: {
      name: '显示名称',
      type: String,
    },
    field: {
      name: '绑定字段',
      type: String,
    },
    widget: {
      name: '绑定组件',
      type: String,
    },
    listWidth: {
      name: '列表模式宽度',
      type: Number,
    },
    cardWidth: {
      name: '卡片模式宽度',
      type: Number,
    },
    listVisible: {
      name: '列表模式是否显示',
      type: Boolean,
      default: true,
    },
    cardVisible: {
      name: '卡片模式是否显示',
      type: Boolean,
      default: true,
    },
    readonly: {
      name: '是否只读',
      type: Boolean,
      default: false,
    },
    required: {
      name: '是否必填',
      type: Boolean,
      default: false,
    },
    virtual: {
      name: '是否虚拟字段',
      type: Boolean,
      default: false,
    },
    fuzzyQuery: {
      name: '是否模糊匹配',
      type: Boolean,
      default: false,
    },
    idEnum: {
      name: '绑定枚举',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_enum',
    },
    idRefer: {
      name: '绑定参照',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_page',
    },
    referType: {
      name: '参照方式',
      type: String,
    },
    referStorage: {
      name: '回填字段',
      type: String,
    },
    referDisplay: {
      name: '回显字段',
      type: String,
    },
    referFilter: {
      name: '参照条件',
      type: Array,
      default: [],
    },
    referFill: {
      name: '数据填充',
      type: Array,
      default: [],
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };

};
