'use strict';

module.exports = app => {
  const attributes = {
    idMenu: {
      name: '所属菜单',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
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
      name: '显示类型',
      type: String,
    },
    action: {
      name: '操作类型',
      type: String,
    },
    event: {
      name: '按钮事件',
      type: String,
    },
    location: {
      name: '按钮位置',
      type: String,
      default: 'default',
    },
    group: {
      name: '按钮分组',
      type: String,
      default: 'default',
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };

  return app.clapMongooseSchema(attributes, false);

};
