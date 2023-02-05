'use strict';
module.exports = app => {
    return {
        idApplication: {
            name: '所属应用',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application'
        },
        idPage: {
            name: '绑定页面',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_page'
        },
        p_id: {
            name: '上级菜单',
            type: String,
            default: '0'
        },
        name: {
            name: '菜单名称',
            type: String
        },
        type: {
            name: '菜单类型',
            type: String
        },
        icon: {
            name: '图标',
            type: String,
            default: 'folder-close'
        },
        iconColor: {
            name: '图标背景',
            type: String
        },
        routeName: {
            name: '路由名称',
            type: String
        },
        routePath: {
            name: '路由地址',
            type: String
        },
        resolveType: {
            name: '路由组件类型',
            type: String,
            default: 'LocalPkg'
        },
        resolvePath: {
            name: '路由组件',
            type: String
        },
        resolvePkg: {
            name: '路由组件(依赖包)',
            type: String
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};