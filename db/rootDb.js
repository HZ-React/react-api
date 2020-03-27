//lmm
const mongoose=require('mongoose')
require('./connectDb')
//创建表头
let rootScheme=mongoose.Schema({
    us:{type:String,required:true},
    ps:{type:String,required:true},
},
{
    //集合名称
    collection:'lmm'
}) 
//将schema对象与集合关联
var  Root=mongoose.model('lmm',rootScheme)

module.exports=Root