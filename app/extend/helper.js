'use strict';

module.exports = {
  get humps() {
    return require('humps');
  },
  stringToMongoObjectId(value){
    return new this.app.Mongoose.Types.ObjectId(value)
  },
  objectToMongoObjectId (json) {
    for (const key in json) {
      // 如果对象类型为object类型且数组长度大于0 或者 是对象 ，继续递归解析
      if (json.hasOwnProperty(key)) {
        if (json[key] && json[key].length > 0 && typeof (json[key]) === 'object' || typeof (json[key]) === 'object') {
          json[key]=this.objectToMongoObjectId(json[key]);
        } else { // 不是对象或数组、直接输出
          if (/^[a-fA-F0-9]{24}$/.test(json[key])) {
            json[key] = this.stringToMongoObjectId(json[key]);
          }
        }
      }
    }
    return json;
  }
};
