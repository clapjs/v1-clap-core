'use strict';

module.exports = app => {
  return {
    idMenu: {
      name: '所属菜单',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
    idPage: {
      name: '所属页面',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_page',
    },
    name: {
      name: '按钮名称',
      type: String,
    },
    icon: {
      name: '按钮图标',
      type: String,
    },
    type: {
      name: '按钮样式',
      type: String,
    },
    event: {
      name: '按钮事件',
      type: String,
    },
    position: {
      name: '按钮位置',
      type: String,
    },
    group: {
      name: '按钮分组',
      type: String,
      default:'general'
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
};
