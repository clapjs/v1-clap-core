'use strict';

module.exports = app => {
    const schema = app.MongoEntity(require('./entity/sys_user_socket')(app), 'base', 'Global');

    schema.pre('save', async (next) => {
        /**在此定义变量或引入模块*/
        next();
    })

    schema.post('save', function(doc, next) {
        /**在此定义变量或引入模块*/
        next();
    });

    return schema;
};