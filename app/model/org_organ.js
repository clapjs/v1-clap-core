'use strict';

module.exports = app => {
  const attributes = {
    p_id: {
      name: '上级组织',
      type: String,
      default: '0',
    },
    organCode: {
      name: '组织编码',
      type: String,
    },
    organName: {
      name: '组织名称',
      type: String,
    },
    idGroupOrgan: {
      name: '集团组织',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'org_organ',
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
  return app.clapMongooseSchema(attributes, false);
};
