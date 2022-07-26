'use strict';

module.exports = app => {
    const attributes = {
        idApplication: {
            name: 'idApplication',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application'
        },
        idApplicationParams: {
            name: 'idApplicationParams',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application_params'
        },
        value: {
            name: 'value',
            type: String
        },
    };
    return app.clapMongooseSchema(attributes);
};