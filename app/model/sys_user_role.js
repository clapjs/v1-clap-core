'use strict';

module.exports = app => {
    const attributes = {
        idUser: {
            name: 'idUser',
            type: app.mongoose.Schema.ObjectId,
            ref: 'sys_user'
        },
        idRole: {
            name: 'idRole',
            type: app.mongoose.Schema.ObjectId,
            ref: 'sys_role'
        }
    };
       return app.clapMongooseSchema(attributes,false);
};
