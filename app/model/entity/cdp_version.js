'use strict';

module.exports = app => {
  return {
    pkg: {
      name: '包名',
      type: String,
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
};
