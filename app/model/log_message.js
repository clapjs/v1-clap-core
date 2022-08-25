'use strict';

module.exports = app => {
  const attributes = {
    idUser: {
      name: '被推送者',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    idOrganUser: {
      name: '被推送者',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'org_organ_user',
    },
    title: {
      name: '推送标题',
      type: String,
    },
    content: {
      name: '推送内容',
      type: String,
    },
    type: {
      name: '推送类型',
      type: String,
    },
    event: {
      name: '推送事件编码',
      type: String,
    },
    meta: {
      name: 'meta',
      type: Object,
      default: {},
    },
    isRead: {
      name: 'isRead',
      type: Boolean,
    },
    isShow: {
      name: 'isShow',
      type: Boolean,
    },
  };
  return app.clapMongooseSchema(attributes);
};
