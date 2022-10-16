'use strict';

module.exports = app => {
  return {
    p_id: {
      name: '上级节点',
      type: String,
      default: '0',
    },
    code: {
      name: '枚举编码',
      type: String,
    },
    name: {
      name: '枚举名称',
      type: String,
    },
    color: {
      name: '字体颜色',
      type: String,
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
};
