const {verifyToken} = require('../util/jwt')
let superAdmin = (req,res,next)=>{
  if(req.originalUrl === '/root/find'){
    next()
    return false
  }
  let {token} = req.body
  let result = verifyToken(token)
  console.log(result)
  next()
}
module.exports = superAdmin