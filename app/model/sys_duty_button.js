'use strict';

module.exports = app => {
  const attributes = {
    idDuty: {
      name: '职责id',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'sys_duty',
    },
    idApplication: {
      name: '应用id',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'sys_application',
    },
    idMenu: {
      name: '组件id',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_menu',
    },
    idMenuButton: {
      name: '组件按钮id',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_menu_button',
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
  return app.clapMongooseSchema(attributes, false);
};
