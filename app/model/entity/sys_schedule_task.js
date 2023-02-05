'use strict';
module.exports = app => {
    return {
        takeEffectTime: {
            name: '触发时间',
            type: Date
        },
        type: {
            name: 'type',
            type: String
        },
        meta: {
            name: 'meta',
            type: Object,
            default: {}
        },
    }
};