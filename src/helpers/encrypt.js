const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  encode: (password) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    return hash
  },

  decode: (inputPassword, hash) => {
    return bcrypt.compareSync(inputPassword, hash)
  },

  jwtEncode: (data) => {
    return jwt.sign(data, 'rahasia')
  },

  jwtDecode: (token) => {
    let decode = jwt.verify(token, 'rahasia')
    return decode
  },
}