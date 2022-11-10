'use strict';

module.exports = app => {
  const attributes = {
    idPage: {
      name: 'idPage',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_page',
    },
    name: {
      name: 'name',
      type: String,
    },
    type: {
      name: 'type',
      type: String,
    },
    filter: {
      name: 'filter',
      type: Array,
    },
  };
  return app.MongoEntity(attributes);
};
