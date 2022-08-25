'use strict';

module.exports = app => {
  const attributes = {
    idApplication: {
      name: '所属应用',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    platform: {
      name: '应用平台',
      type: String,
    },
    version: {
      name: '版本',
      type: String,
    },
    downloadUrl: {
      name: '下载地址',
      type: String,
    },
    isLatest: {
      name: '是否最新',
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
