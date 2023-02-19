import write from "./write-file-utf8.js";

// Nested folders will be created if they do not exist yet.
const filePath1 = "/tmp/foo/bar.txt";
const filePath2 = "/tmp/foo/bar/quz.txt";

const content = "Hello";

// Since write-file-utf8 function will return a Promise,
// the most comfortable way to run it is inside an async function.
async function example() {
  try {
    console.info("write", filePath1);
    await write(filePath1, content);

    const buffer = Buffer.from(content); // this is an utf-8 encoded buffer
    console.info("write", filePath2);
    await write(filePath2, buffer);
  } catch (error) {
    // In case you do not have permissions to create folders,
    // you may want to handle that case here.
    console.error(error);
  }
}

// Run example.
example();
