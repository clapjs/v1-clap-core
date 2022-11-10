'use strict';

module.exports = app => {
  const attributes = {
    roleCode: {
      name: '角色编码',
      type: String,
    },
    roleName: {
      name: '角色名称',
      type: String,
    },
  };
  return app.MongoEntity(attributes);
};
