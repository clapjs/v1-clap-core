'use strict';

module.exports = app => {
  const attributes = {
    idUser: {
      name: '主表id',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'sys_user',
    },
    socket: {
      name: 'socket的id',
      type: String,
    },
    device: {
      name: '设备类型',
      type: String,
    },
  };
  return app.clapMongooseSchema(attributes, false);
};
