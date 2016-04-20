var write = require('./index')

write('/tmp/foo', 'Hello bar')

try {
  var buffer = new Buffer('a')
  write('/tmp/foo', buffer)
} catch (err) {
  if (err.message === write.error.contentIsNotString) {
    console.log('Hey, are buffers utf-8 encoded?')
  }
}
