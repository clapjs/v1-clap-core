'use strict';

module.exports = app => {
  const attributes = {
    idEvent: {
      name: '短信事件',
      type: app.Mongoose.Schema.ObjectId,
      ref: 'cdp_event',
    },
    value: {
      name: '是否启用',
      type: Boolean,
    },
  };
  return app.clapMongooseSchema(attributes);
};
