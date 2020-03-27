//lmm
const express=require('express')
const router = express.Router()
const  Root=require ('../db/rootDb')
const {sendToken} = require('../util/jwt')
const superAdmin = require('../middleware/superAdmin')
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

//  查询
router.get('/find',(req,res)=>{//后面
    Root.find().then(body=>{
        res.send(body)
    })
})
// 添加
router.post('/add',(req,res)=>{//后面
    let{us,ps}=req.body
    Root.insertMany({us,ps})
    .then(data=>{res.send(data)})
    .catch(err=>{res.send(err)})
})

//登陆
router.post('/login',(req,res)=>{
    let{us,ps}=req.body
    Root.findOne({us,ps})
    .then(data=>{
        if(data!==null){
            let token = sendToken({us,ps})
            res.send({code:0,data,msg:'查询成功',token})
        }else{
            res.send({code:-1,msg:'查询失败'})
        }
    })
})
    


module.exports = router