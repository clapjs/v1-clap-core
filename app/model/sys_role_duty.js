'use strict';

module.exports = app => {
  const attributes = {
    idRole: {
      name: 'idRole',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'sys_role',
    },
    idDuty: {
      name: 'idDuty',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'sys_duty',
    },
  };
  return app.clapMongooseSchema(attributes, false);
};
