const express=require('express')
const router = express.Router()
const Martin = require('../db/goodsDb')

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
router.get('/getalldata',(req,res)=>{
  Martin.find({}).then(data=>{
    res.send({mes:'111',data})
  })
})


module.exports = router
