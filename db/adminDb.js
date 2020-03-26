const mongoose = require('mongoose')
require('./connectDb')
//创建表头
let admin = new mongoose.Schema({
    name:{type: String,required:true},
    pass:{type: String,required:true}
},
{
    // 集合名称
    collection: 'admin'
})
//将schema对象与集合关联
var Admin = mongoose.model('admin',admin)

module.exports = Admin