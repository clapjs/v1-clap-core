'use strict';

module.exports = app => {
  const attributes = {
    idUser: {
      name: 'idUser',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    openid: {
      name: 'openid',
      type: String,
    },
    nickName: {
      name: '用户昵称',
      type: String,
    },
    avatarUrl: {
      name: '用户头像',
      type: String,
    },
    gender: {
      name: '用户性别',
      type: String,
    },
    country: {
      name: '用户所在国家',
      type: String,
    },
    province: {
      name: '用户所在省份',
      type: String,
    },
    city: {
      name: '用户所在城市',
      type: String,
    },
    language: {
      name: '显示语言',
      type: String,
    },
    phoneNumber: {
      name: '用户绑定的手机号（国外手机号会有区号）',
      type: String,
    },
    purePhoneNumber: {
      name: '没有区号的手机号',
      type: String,
    },
    countryCode: {
      name: '区号',
      type: String,
    },
  };
  return app.MongoEntity(attributes, false);
};
