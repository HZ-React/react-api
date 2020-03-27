const express=require('express')
const router = express.Router()
const Zhangcaijiang = require('../db/goodsDb')

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
//普通查询
router.get('/goodslist',(req,res)=>{
  Zhangcaijiang.find({}).then(data=>{
    //   console.log(data)
    res.send({mes:'111',data})
  })
})
//货品增加
router.post('/goodsadd',(req,res)=>{
    let {name,desc,price,path,stock,putaway,type} =req.body
  Zhangcaijiang.insertMany({name,desc,price,path,stock,putaway,type}).then((data)=>{
    //   console.log(data)
    res.send({err:0,msg:'插入成功'})
  }).catch((err)=>{
    res.send({err:-1,msg:'插入失败'})
  })
})  
//货品删除
router.post('/goodsdel',(req,res)=>{
    // 获取要删除数据的id
    let {_id} = req.body
    Zhangcaijiang.deleteOne(_id)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败请重试'})}) 
  })
//货品更新
router.post('/goodsupdate',(req,res)=>{
    let {_id,name,desc,price,path,stock,putaway,type}=req.body
    // console.log({_id,name,desc,price,path,stock,putaway})
   Zhangcaijiang.updateOne({_id},{name,desc,price,path,stock,putaway,type}).then((data)=>{
    res.send({err:0,msg:'更新成功'})
    }).catch((err)=>{
        // console.log(err)
    res.send({err:-1,msg:'更新失败'})
    })
})
//分页查询
router.post('/goodsbypage',async (req,res)=>{
    let allGoods=await Zhangcaijiang.find()
    // console.log(allGoods)
    let allCount=allGoods.length
    let page = req.body.page||1 //查询的第几页数据
    let pageSize = req.body.pageSize ||2 //每页几条数据
    Zhangcaijiang.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize)).then((data)=>{
    //  console.log(data)
     res.send({err:0,msg:'查询成功',data})
    }).catch(()=>{
        (err)=>{res.send({err:-1,msg:'查询失败请重试'})}
    })  
})
//关键字查询模糊查询
let findGoodGByKw = async (kw,page,pageSize)=>{
    // 通过正则表达式匹配关键字
    let regex = new RegExp(kw)
    // 满足条件的所有数据
    let allFood =await  Zhangcaijiang.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}
        ,{price:{$regex:regex}},{path:{$regex:regex}},{stock:{$regex:regex}},{putaway:{$regex:regex}}
        ,{type:{$regex:regex}}
    ] })
    let allCount= allFood.length
    // 分页后满足关键字的数据
    let result= await Zhangcaijiang.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}
        ,{price:{$regex:regex}},{path:{$regex:regex}},{stock:{$regex:regex}},{putaway:{$regex:regex}}
        ,{type:{$regex:regex}}
    ] })
    .skip(Number((page-1)*pageSize)).limit(Number(pageSize))
    return  {result,allCount}
  }
  router.post('/goodsbykw',(req,res)=>{
    let kw = req.body.kw ||''
    console.log(kw)
    let page = req.body.page||1
    let pageSize = req.body.pageSize||2
    findGoodGByKw(kw,page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'查询成功',list:data.result,allCount:data.allCount})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
  })
  //分类查询
let  findGoodByType = async (type) =>{
    let result = await Zhangcaijiang.find({type})
    return result
  }
router.post('/goodsbytype',(req,res)=>{
    let {type} = req.body 
    console.log(type)
    findGoodByType(type)
    .then((data)=>{
     res.send({err:0,msg:'查询成功',list:data})
   })
   .catch((err)=>{
       console.log(err)
       res.send({err:-1,msg:'查询失败请重试'})})
  
  })
module.exports = router
