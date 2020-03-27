const mongoose = require('mongoose')
require('./connectDb')
//创建表头
let martin = new mongoose.Schema({
    name:{type: String,required:true},
    pass:{type: String,required:true}
},
{
    // 集合名称
    collection: 'martin'
})
//将schema对象与集合关联
var Martin = mongoose.model('martin',martin)

module.exports = Martin