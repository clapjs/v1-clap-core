'use strict';

module.exports = app => {
    const schema = app.MongoEntity(require('./entity/org_setting_exchange')(app), 'base', 'Organ');

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