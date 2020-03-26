const jwt = require('jsonwebtoken')
let secret = 'asdasfio123s123s'
//创建token
let sendToken = obj => {
    let result = jwt.sign(obj, secret,{expiresIn:'240h'})
    return result
}
//验证token
let verifyToken = token => {
    let result = null
    try {
        jwt.verify(token, secret, (err, decode) => {
            if (!err) {
                result = decode
            }else{
                throw err
            }
        })
    } catch (err) {
        return err.message
    }
    return result
}
module.exports = { sendToken, verifyToken }