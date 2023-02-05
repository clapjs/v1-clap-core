'use strict';
module.exports = app => {
    return {
        name: {
            name: '姓名',
            type: String
        },
        workNo: {
            name: '工号',
            type: String
        },
        idBranch: {
            name: '所属部门',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'org_branch'
        },
        sex: {
            name: '性别',
            type: String
        },
        maritalStatus: {
            name: '婚姻状况',
            type: String
        },
        nationality: {
            name: '民族',
            type: String
        },
        major: {
            name: '专业',
            type: String
        },
        degree: {
            name: '学历',
            type: String
        },
        nativePlace: {
            name: '籍贯',
            type: Array
        },
        polity: {
            name: '政治面貌',
            type: String
        },
        idType: {
            name: '证件类型',
            type: String
        },
        idNo: {
            name: '证件号码',
            type: String
        },
        birthday: {
            name: '出生年月',
            type: Date
        },
        telephone: {
            name: '手机',
            type: String
        },
        email: {
            name: '邮箱',
            type: String
        },
        address: {
            name: '现居地址',
            type: String
        },
        permanentAddress: {
            name: '户籍地址',
            type: String
        },
        bankName: {
            name: '银行',
            type: String
        },
        bankAccount: {
            name: '银行卡号',
            type: String
        },
        leaveDate: {
            name: '离职时间',
            type: Date
        },
        entryDate: {
            name: '入职时间',
            type: Date
        },
        userType: {
            name: '用户类型',
            type: String,
            default: 'User'
        },
        idUser: {
            name: '登录用户',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'sys_user'
        },
        familyInfo: [new app.Mongoose.Schema({
            call: {
                name: '称呼',
                type: String
            },
            age: {
                name: '年龄',
                type: String
            },
            name: {
                name: '姓名',
                type: String
            },
            company: {
                name: '任职单位',
                type: String
            },
        })],
        workInfo: [new app.Mongoose.Schema({
            range: {
                name: '起止时间',
                type: Array
            },
            company: {
                name: '公司',
                type: String
            },
            post: {
                name: '职位',
                type: String
            },
            job: {
                name: '职务',
                type: String
            },
        })],
    }
};