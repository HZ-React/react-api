const express=require('express')
const router = express.Router()
const martin_ad=require('../db/adDb')

//列表渲染
router.get('/list',(req,res)=>{
    let {}=req.body
    martin_ad.find({})
    .then(data=>{
      
      res.send({mes:'成功',code:0,data})
    })
    .catch(err=>{
      res.send({mes:'失败',code:-1})
    })
    
  })

  //图片信息增加
router.post('/adadd',(req,res)=>{
    let {name,jump,address} =req.body
    martin_ad.insertMany({name,jump,address}).then((data)=>{
    //   console.log(data)
    res.send({err:0,msg:'插入成功'})
  }).catch((err)=>{
    res.send({err:-1,msg:'插入失败'})
  })
})

//广告删除
router.post('/addel',(req,res)=>{
    // 获取要删除数据的id
    let {_id} = req.body
    martin_ad.deleteOne({_id})
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:'删除失败请重试'})}) 
  })

  //图片信息更新
router.post('/adupdate',(req,res)=>{
    let {_id,obj}=req.body
    obj = JSON.parse(obj)
    // console.log(obj)
    martin_ad.updateOne({_id},obj).then((data)=>{
    res.send({err:0,msg:'更新成功'})
    }).catch((err)=>{
        // console.log(err)
    res.send({err:-1,msg:'更新失败'})
    })
})

  module.exports = router