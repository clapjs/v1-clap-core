'use strict';
module.exports = app => {
  const { router, controller } = app;
  // 数据模型API
  router.get('/clap/model/:model', controller.clap.model.get);
  router.get('/clap/model/:model/:id', controller.clap.model.getById);
  router.post('/clap/model/:model', controller.clap.model.post);
  router.put('/clap/model/:model/:id', controller.clap.model.update);
  router.patch('/clap/model/:model/:id', controller.clap.model.update);
  router.delete('/clap/model/:model/:id', controller.clap.model.destroy);
  router.post('/clap/model_get/:model', controller.clap.model.getByPost);
  router.post('/clap/model_aggregate/:model', controller.clap.model.getByAggregate);

  // 认证系统API

  router.post('/clap/authority/login', controller.clap.authority.login);
  router.post('/clap/authority/register', controller.clap.authority.register);
  router.post('/clap/authority/registerByOrganUser', controller.clap.authority.registerByOrganUser);
  router.post('/clap/authority/changePwd', controller.clap.authority.changePwd);
  router.post('/clap/authority/resetPwd', controller.clap.authority.resetPwd);
  router.post('/clap/authority/registerOrgan', controller.clap.authority.registerOrgan);

  // 权限系统API
  router.get('/clap/authority/application', controller.clap.authority.getUserApplication);
  router.get('/clap/authority/menu', controller.clap.authority.getUserMenu);
  router.get('/clap/authority/button', controller.clap.authority.getUserButton);
  router.get('/clap/authority/organ', controller.clap.authority.getUserOrgan);
  router.get('/clap/authority/security', controller.clap.authority.getUserSecurity);
  router.get('/clap/authority/params', controller.clap.authority.getApplicationParams);

  // 文件系统API
  router.get('/clap/file/preview/:id', controller.clap.file.preview);
  router.get('/clap/file/download/:id', controller.clap.file.download);
  router.post('/clap/file/upload', controller.clap.file.upload);
  router.delete('/clap/file/remove/:id', controller.clap.file.remove);
};

