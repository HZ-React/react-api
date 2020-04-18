var mongoose = require('mongoose')
mongoose.connect('mongodb://ljh:123456@182.92.107.225:27017/react-api', { useNewUrlParser: true,useUnifiedTopology: true })

var db = mongoose.connection
db.on('error', ()=>console.log('数据库连接失败'))
db.once('open', function() {
    console.log('数据库连接成功')
})
