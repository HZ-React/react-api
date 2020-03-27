//lmm
const express=require('express')
const router = express.Router()
const  Root=require ('../db/rootDb')


//  查询
router.get('/find',(req,res)=>{//后面
    Root.find()
    .then(data=>res.send({code:0,data,msg:'查询成功'}))
    .catch(err=>res.send({code:-1,err,msg:'查询失败'}))
})
// 添加
router.post('/add',(req,res)=>{//后面
    let{us,ps}=req.body
    Root.insertMany({us,ps})
    .then(data=>res.send({code:0,data,msg:'添加成功'}))
    .catch(err=>res.send({code:-1,err,msg:'添加失败'}))
})
// //删除
router.post('/del',(req,res)=>{
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
            res.send({code:0,data,msg:'登陆成功'})
        }else{
            res.send({code:-1,msg:'登陆失败'})
        }
    })
})

    


module.exports = router