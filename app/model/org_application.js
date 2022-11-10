'use strict';

module.exports = app => {
  const attributes = {
    idApplication: {
      name: 'idApplication',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_application',
    },
    license: {
      name: 'license',
      type: Date,
    },
    version: {
      name: 'String',
      type: String,
    },
    order: {
      name: '排序',
      type: Number,
      default: 999,
    },
  };
  return app.MongoEntity(attributes);
};
