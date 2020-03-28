const express=require('express')
const  multer = require('multer')
const  fs = require('fs')
const  path = require('path')
const  upload = multer({})
const router = express.Router()
const Zhangcaijiang = require('../db/goodsDb')

//查询一个商品的信息
router.post('/goodsone',(req,res)=>{
  let {_id}=req.body
  console.log(_id)
  Zhangcaijiang.findOne({_id}).then(data=>{
    //   console.log(data)
    res.send({mes:'数据查询成功',data})
  }).catch((err)=>{
   console.log(err)
  })
})
/**
 * @api {git} /goods/goodslist   获取商品信息
 * @apiName goodslist
 * @apiGroup goods
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
//普通查询
router.get('/goodslist',(req,res)=>{
  Zhangcaijiang.find({}).then(data=>{
    //   console.log(data)
    res.send({mes:'数据查询成功',data})
  }).catch((err)=>{
   console.log(err)
  })
})
/**
 * @api {git} /goods/goodsadd   增加货品信息
 * @apiName goodsadd
 * @apiGroup goods
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
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
/**
 * @api {git} /goods/goodsdel   删除货品信息
 * @apiName goodsdel
 * @apiGroup goods
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
//货品删除
router.post('/goodsdel',(req,res)=>{
    // 获取要删除数据的id
    let {_id} = req.body
    Zhangcaijiang.deleteOne({_id})
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:'删除失败请重试'})}) 
  })
  /**
 * @api {git} /goods/goodsupdate   更新货品信息
 * @apiName goodsupdate
 * @apiGroup goods
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
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
/**
 * @api {git} /goods/goodsbypage   分页货品信息
 * @apiName goodsbypage
 * @apiGroup goods
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
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
/**
 * @api {git} /goods/goodsbykw   模糊商品信息
 * @apiName goodsbykw
 * @apiGroup goods
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
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
  /**
 * @api {git} /goods/goodsbytype   分类商品信息
 * @apiName goodsbytype
 * @apiGroup goods
 * @apiSuccess {String} err  状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} data 用户信息信息
 */
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
//文件上传
router.post('/img',upload.single('hehe'),(req,res)=>{
  console.log(req.file)
  let {buffer,mimetype,size} = req.file 
  // 判断尺寸 1.前端判断 2.后端判断
  if(size >= 200000){
    return res.send({err:-1,msg:'图片尺寸过大'})
  }
  // 限制文件类型 1.前端判断 2.后端判断
  let typs=['jpg','gif','png','jpeg']
  let extName = mimetype.split('/')[1]
  if(typs.indexOf(extName)===-1){
    return  res.send({err:-2,msg:'图片类型错误'})
  }
  // 将文件写到静态资源目录下
  let name= (new Date()).getTime()+`_`+parseInt(Math.random()*999999)
  fs.writeFile(path.join(__dirname,`../www/${name}.${extName}`),buffer,(err)=>{
    if(err){
      // http://localhost:3000/public/img/1581646169249_646178.jpeg
      console.log(err)
      res.send({err:-3,msg:'上传失败请重试'})
    }else{
      res.send({err:0,msg:'上传成功',path:`http://182.92.107.225:3000/api-react/www/${name}.${extName}`})
    }
  })
})
module.exports = router
