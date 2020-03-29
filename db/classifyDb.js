const mongoose = require('mongoose')
require('./connectDb')
//创建表头
let classInfo = new mongoose.Schema({
    header:{type: String,required:true},
    key:{type: String,required:true},
    childern:{type: Array,required:true}
},
{
    // 集合名称
    collection: 'classInfo'
})
//将schema对象与集合关联
var ClassInfo = mongoose.model('classInfo',classInfo)

module.exports = ClassInfo