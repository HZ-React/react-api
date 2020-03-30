const express=require('express')
const router = express.Router()

const martin=require('../db/userDb')


/**
 * @api {git} /user/getalldata   获取用户信息
 * @apiName getalldata
 * @apiGroup user
 *
 *
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
//增加
router.post('/add',(req,res)=>{
  let {us,ps}=req.body
  martin.insertMany({us,ps})
  .then(data=>{
    res.send({mes:'增加成功',code:0})
  })
  .catch(err=>{
    res.send({mes:'添加失败',code:-1})
  })
})
//查找
router.get('/find',(req,res)=>{
  let {us,ps}=req.query
  martin.find({us,ps})
  .then(data=>{
    res.send({mes:'成功',code:0,data})
  })
  .catch(err=>{
    res.send({mes:'失败',code:-1})
  })
})
//删除
router.get('/del',(req,res)=>{
  let {_id}=req.query
  martin.deleteOne({_id})
  .then(data=>{
    res.send({mes:'成功',code:0})
  })
  .catch(err=>{
    res.send({mes:'失败',code:-1})
  })
})
//更改
router.post('/change',(req,res)=>{
  let {_id,obj}=req.body
  martin.updateOne({_id},obj)
  .then(data=>{
    res.send({mes:'成功',code:0})
  })
  .catch(err=>{
    res.send({mes:'失败',code:-1})
  })
  
})
//列表渲染
router.get('/list',(req,res)=>{
  let {}=req.body
  martin.find({})
  .then(data=>{
    
    res.send({mes:'成功',code:0,data})
  })
  .catch(err=>{
    res.send({mes:'失败',code:-1})
  })
  
})





module.exports = router
