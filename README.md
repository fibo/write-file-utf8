# write-file-utf8

> shortcut to fs.writeFile

## Usage

```
var write = require('write-file-utf8')

var filePath = '/tmp/foo'
var content = 'bar'

write(filePath, content)
```

Actually is the same as

```
var fs = require('fs')

var filePath = '/tmp/foo'
var content = 'bar'

function throwError (err) {
  if (err) {
    throw err
  }
}

fs.writeFile(filePath, content, 'utf8', throwError)
```

