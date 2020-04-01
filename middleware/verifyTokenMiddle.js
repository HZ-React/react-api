const {verifyToken} = require('../util/jwt')
const  Root=require ('../db/rootDb')
// 验证token中间件
let verifyTokenMiddle =async (req,res,next) =>{
    if(req.originalUrl === '/root/login'){
        next()
        return false
    }else if(req.originalUrl.indexOf('api-react/public')!=-1){
        next()
        return false
    }
    else if(req.originalUrl.indexOf('goods/img')!=-1){
        next()
        return false
    }
    let {token} = req.body
    if(!token){ token = req.query.token}
    if(!token){
        res.send({err:-997,mes:'token丢失'})
        return false
    }
    let result = verifyToken(token)
    let data = await Root.find({token})
    if(result && result != 'jwt expired' && result != 'jwt malformed' && data.length>0){
        next()
    }else{
        let mes
        result == 'jwt expired'?mes = 'token失效' :mes = 'token非法'
        res.send({err:-999,mes})
    }
}
module.exports = verifyTokenMiddle