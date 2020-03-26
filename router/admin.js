const express=require('express')
const router = express.Router()
const {findAllAdmin} = require('../dbConctor/admin')

router.get('/getalladmin',(req,res)=>{
  findAllAdmin().then(result=>{
    res.send(result)
  })
})

module.exports = router
