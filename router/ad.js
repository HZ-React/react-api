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
    let {name,jump,address,type} =req.body
    martin_ad.insertMany({name,jump,address,type}).then((data)=>{
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
//分页查询
router.post('/adbypage',async (req,res)=>{
    let allad=await martin_ad.find()
    console.log(allad)
    let allCount=allad.length
    console.log("数量",allCount)
    let page = req.body.page||1 //查询的第几页数据
    let pageSize = req.body.pageSize ||2 //每页几条数据
    martin_ad.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize)).then((data)=>{
    
     res.send({err:0,msg:'查询成功',data,allCount})
    }).catch(()=>{
        (err)=>{res.send({err:-1,msg:'查询失败请重试'})}
    })  
})

//分类查询
let  findAdByType = async (type,page,pageSize) =>{
    let allAd=await martin_ad.find({type})
    let allCount=allAd.length
    let result = await martin_ad.find({type}).skip(Number((page-1)*pageSize)).limit(Number(pageSize))
     
    // let allCount=result.length
    console.log(allCount)
    return {result,allCount}
  }
router.post('/adbytype',(req,res)=>{
    let {type} = req.body 
    let page = req.body.page||1  
    let pageSize = req.body.pageSize||2
    console.log(type)
    findGoodByType(type,page,pageSize)
    .then((data)=>{
     res.send({err:0,msg:'查询成功',list:data})
   })
   .catch((err)=>{
       console.log(err)
       res.send({err:-1,msg:'查询失败请重试'})})
  
  })

  module.exports = router