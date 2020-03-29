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
router.get('/getinfo',(req,res)=>{
    Classify.find({}).then(result=>{
    if(result.length > 0){
      res.send({msg:'获取成功',code:0,result})
    }else{
      res.send({msg:'获取失败',code:-1})
    } 
  })
})

module.exports = router
