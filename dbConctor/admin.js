const admin = require('../db/adminDb')
// 管理员数据操作文件

// 获取所有管理员
findAllAdmin =async ()=>{
  let result = await admin.find({})
  // 不允许得到密码
  result.map(item=>item.pass = '***')
  return result
}
module.exports = {
  findAllAdmin
}