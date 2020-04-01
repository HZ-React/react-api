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
    Root.find()
    .then(data=>res.send({code:0,data,msg:'查询成功'}))
    .catch(err=>res.send({code:-1,err,msg:'查询失败'}))
})
// 添加
router.post('/add',superAdmin,(req,res)=>{//后面
    let{us,ps}=req.body
    let token = sendToken({us,ps})
    Root.insertMany({us,ps,token})
    .then(data=>res.send({code:0,data,msg:'添加成功'}))
    .catch(err=>res.send({code:-1,err,msg:'添加失败'}))
})
// //删除
router.post('/del',superAdmin,(req,res)=>{
    let {_id}=req.body
    Root.deleteOne({_id})
    .then(data=>res.send({code:0,data,msg:'删除成功'}))
    .catch(err=>res.send({code:-1,err,msg:'删除失败'}))
})
//登陆
router.post('/login',(req,res)=>{
    let{us,ps}=req.body
    Root.findOne({us,ps})
    .then(data=>{
        if(data!==null){
            let token = sendToken({us,ps})
            Root.update({us,ps},{token}).then(result=>{
                if(result.nModified == 1){
                    res.send({code:0,data,msg:'查询成功',token})
                }else{
                    res.send({code:-1,msg:'网路繁忙,请重试'})
                }
            })
        }else{
            res.send({code:-1,msg:'登陆失败'})
        }
    })
})

//更新个人信息
router.post('/update',async (req,res)=>{
    let {_id} = req.body
    let result =await Root.findOne({_id})
    let {us=result.us,avatorUrl=result.avatorUrl,email=result.email} = req.body
    Root.updateOne({_id},{us,avatorUrl,email})
    .then(data=>{
        res.send(data)
    })
})

//  查询
router.get('/findone',(req,res)=>{//后面
    let {_id} = req.query
    console.log(_id)
    Root.findOne({_id}).then(result=>console.log(result))
    .then(data=>res.send({code:0,data,msg:'查询成功'}))
    .catch(err=>res.send({code:-1,err,msg:'查询失败'}))
})

module.exports = router