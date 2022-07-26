'use strict';

module.exports = app => {
    const attributes = {
        idNewsClass: {
            name: '新闻分类',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'org_news_class'
        },
        title: {
            name: '标题',
            type: String
        },
        subTitle: {
            name: '副标题',
            type: String
        },
        idCarousel: {
            name: '滚动大图',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'sys_file'
        },
        idThumb: {
            name: '缩略图',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'sys_file'
        },
        content: {
            name: '内容',
            type: String
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    };
    return app.clapMongooseSchema(attributes);
};