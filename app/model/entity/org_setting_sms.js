'use strict';
module.exports = app => {
    return {
        idEvent: {
            name: '短信事件',
            type: app.Mongoose.Schema.ObjectId
        },
        value: {
            name: '是否启用',
            type: Boolean
        },
    }
};