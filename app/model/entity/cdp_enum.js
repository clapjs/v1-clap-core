'use strict';

module.exports = app => {
  return {
    idApplication: {
      name: '所属应用',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    code: {
      name: '枚举编码',
      type: String,
    },
    name: {
      name: '枚举名称',
      type: String,
    },
    type: {
      name: '枚举类型',
      type: String,
      default: 'String',
    },
    range: {
      name: '枚举值域',
      type: Array,
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
};
