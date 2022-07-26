'use strict';

module.exports = app => {
    const attributes = {
        idApplication: {
            name: 'idApplication',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application'
        },
        idDuty: {
            name: 'idDuty',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'sys_duty'
        },
        idMenu: {
            name: 'idMenu',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_menu'
        },
        scope:{
            name: '数据权限',
            type: Number,
            default:0
        },
    };
    return app.clapMongooseSchema(attributes,false);
};
