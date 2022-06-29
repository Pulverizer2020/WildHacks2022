
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./square.cjs.production.min.js')
} else {
  module.exports = require('./square.cjs.development.js')
}
