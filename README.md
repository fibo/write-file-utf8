# write-file-utf8

> Writes content to a file using utf-8 encoding, nested folders will be created if they do not exist yet

## Installation

With [npm](https://npmjs.org/) do

```sh
npm install write-file-utf8
```

## Usage

`write(filePath: string, content: string | Buffer): Promise<void>`

```javascript
import write from "write-file-utf8";

// Nested folders will be created if they do not exist yet.
const filePath1 = "/tmp/foo/bar.txt";
const filePath2 = "/tmp/quz/bar/foo.txt";

const content = "Hello";

// Write a `string` into a file.
//////////////////////////////////////////////////////////////////
try {
  await write(filePath1, content);
} catch (error) {
  // In case you do not have permissions to create folders,
  // you may want to handle it here.
  console.error(error);
}

// Can also write a `Buffer` into a file.
//////////////////////////////////////////////////////////////////
try {
  const buffer = Buffer.from(content); // this is an utf-8 encoded buffer
  await write(filePath2, buffer);
} catch (error) {
  console.error(error);
}
```

