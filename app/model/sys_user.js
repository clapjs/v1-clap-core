'use strict';

module.exports = app => {
  const attributes = {
    userCode: {
      name: '用户编码',
      type: String,
    },
    userName: {
      name: '用户名称',
      type: String,
    },
    userPwd: {
      name: '用户密码',
      type: String,
    },
    userType: {
      name: '用户类型',
      type: String,
    },
    sex: {
      name: '性别',
      type: String,
    },
    birthday: {
      name: '生日',
      type: String,
    },
    avatar: {
      name: '头像',
      type: String,
    },
    avatarColor: {
      name: '头像颜色',
      type: String,
    },
  };


  return app.clapMongooseSchema(attributes, false);

};
