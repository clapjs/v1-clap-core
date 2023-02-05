'use strict';
module.exports = app => {
    return {
        idWorkflow: {
            name: 'idWorkflow',
            type: app.Mongoose.Schema.ObjectId
        },
        label: {
            name: 'label',
            type: String
        },
        description: {
            name: 'description',
            type: String
        },
        memberType: {
            name: 'memberType',
            type: String
        },
        nodeType: {
            name: 'nodeType',
            type: String
        },
        anchorPoints: {
            name: 'anchorPoints',
            type: Array
        },
        x: {
            name: 'x',
            type: Number
        },
        y: {
            name: 'y',
            type: Number
        },
        type: {
            name: 'type',
            type: String
        },
        linkPoints: {
            name: 'linkPoints',
            type: Object
        },
        isSendMessage: {
            name: '是否发送系统通知',
            type: Boolean
        },
        isSendShortMessage: {
            name: '是否发送短信通知',
            type: Boolean
        },
        isAllowCounterSig: {
            name: '是否允许加签',
            type: Boolean
        },
        isAllowChangeSig: {
            name: '是否允许改签',
            type: Boolean
        },
        isAllowPointSig: {
            name: '是否允许指派',
            type: Boolean
        },
        preemptType: {
            name: '审核抢占模式',
            type: String
        },
        countersignValue: {
            name: '会签阈值',
            type: Number
        },
        rejectType: {
            name: '驳回处理方式',
            type: String
        },
        mergeType: {
            name: '合并方式',
            type: String
        },
        branchType: {
            name: '分支方式',
            type: String
        },
        overdueDays: {
            name: '逾期天数',
            type: Number
        },
        overdueNoticeDays: {
            name: '逾期提醒天数',
            type: Number
        },
        source: {
            name: 'source',
            type: String
        },
        target: {
            name: 'target',
            type: String
        },
        condType: {
            name: 'condType',
            type: String
        },
        resultType: {
            name: '审批结果',
            type: String
        },
        filter: {
            name: '条件设置',
            type: Array
        },
    }
};