const express=require('express')
const bodyParser = require('body-parser')
const admin = require('./router/admin')
const user = require('./router/user')
const root =require('./router/root')
const  path = require('path')
const verifyTokenMiddle = require('./middleware/verifyTokenMiddle')

const app = express()
//解析x-www-form-urlencoded格式的数据
app.use(bodyParser.urlencoded({ extended: false }))
//解析json格式的数据
app.use(bodyParser.json())

app.use('/public',express.static(path.join(__dirname,'./www')))
app.use(verifyTokenMiddle)

app.use('/admin',admin)
app.use('/user',user)
app.use('/root',root)//前面

app.listen(3000,()=>{
  console.log('服务器启动成功')
})