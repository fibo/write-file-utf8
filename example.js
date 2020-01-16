const write = require('write-file-utf8')

const filePath1 = '/tmp/foo/bar.txt'
const filePath2 = '/tmp/foo/bar/quz.txt'
const content = 'Hello'

async function example () {
  await write(filePath1, content)

  const buffer = new Buffer.from(content)
  await write(filePath2, buffer)
}

example()
