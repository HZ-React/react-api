const {verifyToken} = require('../util/jwt')
// 验证token中间件
let verifyTokenMiddle = (req,res,next) =>{
    let {token} = req.body
    if(!token){
        res.send({err:-997,mes:'token丢失'})
        return false
    }
    let result = verifyToken(token)
    if(result && result != 'jwt expired'){
        next()
    }else{
        let mes
        result == 'jwt expired'?mes = 'token失效' :mes = 'token非法'
        res.send({err:-999,mes})
    }
}
module.exports = verifyTokenMiddle