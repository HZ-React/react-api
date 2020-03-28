const {verifyToken} = require('../util/jwt')
const root = require('../db/rootDb')
let superAdmin = (req,res,next)=>{
  let {token} = req.body
  let {us,ps} = verifyToken(token)
  if(!token){return res.send({mes:'token缺失',code:-997})}
  root.findOne({us,ps}).then(data=>{
    if(data._id == '5e7df387a0d79a3538887dad'){
      next()
    }else{
      res.send({mes:'权限不足',code:-998})
      return false
    }
  })
}
module.exports = superAdmin