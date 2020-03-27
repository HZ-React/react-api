const user = require('../db/userDb')
// 管理员数据操作文件

// 增加所有管理员
insertAllAdmin =async ()=>{
  let result = await user.insert({})
  // 不允许得到密码
  console.log(result)
  result.map(item=>item.pass = '***')
  return result
}
// 查询所有管理员
findAllAdmin =async ()=>{
  let result = await user.find({})
  // 不允许得到密码
  console.log(result)
  result.map(item=>item.pass = '***')
  return result
}


module.exports = {
  findAllAdmin,insertAllAdmin
}