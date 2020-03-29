const express=require('express')
const router = express.Router()
const Classify = require('../db/classifyDb')

/**
 * @api {git} /admin/getalladmin   获取管理员信息
 * @apiName getalladmin
 * @apiGroup admin
 *
 *
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 管理员信息
 */
router.get('/getinfo',(req,res)=>{//获取信息渲染页面
    Classify.find({}).then(result=>{
    if(result.length > 0){
      res.send({msg:'获取成功',code:0,result})
    }else{
      res.send({msg:'获取失败',code:-1})
    } 
  })
})
//添加
router.post('/classifyadd',(req,res)=>{
    let{header,key,childern}=req.body
    childern=JSON.parse(childern)
    Classify.insertMany({header,key,childern})
    .then(data=>res.send({code:0,data,msg:'添加成功'}))
    .catch(err=>res.send({code:-1,err,msg:'添加失败'}))
})
//删除
router.post('/classifydel',(req,res)=>{
  let {_id}=req.body
  Classify.deleteOne({_id})
  .then(data=>res.send({code:0,data,msg:'删除成功'}))
  .catch(err=>res.send({code:-1,err,msg:'删除失败'}))
})
//修改
router.post('/classifyupdate',(req,res)=>{
  let{header,key,childern,_id}=req.body
  childern=JSON.parse(childern)
  Classify.updateOne({_id},{header,key,childern})
  .then(data=>res.send({code:0,data,msg:'修改成功'}))
  .catch(err=>res.send({code:-1,err,msg:'修改失败'}))
})


module.exports = router