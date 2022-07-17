'use strict';

module.exports = app => {
    const attributes = {
        dutyCode: {
            name: '职责编码',
            type: String
        },
        dutyName: {
            name: '职责名称',
            type: String
        },
        memo: {
            name: '备注',
            type: String
        },
    };
    return app.clapMongooseSchema(attributes);
};
