import { Buffer } from "node:buffer";
/**
 * Writes content to a file using utf-8 encoding,
 * nested folders will be created if they do not exist yet.
 *
 * @example
 * import write from 'write-file-utf8';
 * const filePath = '/tmp/foo/bar.txt';
 * const content = 'Hello world';
 * await write(filePath, content);
 */
export default function writeFileUtf8(filePath: string, content: string | Buffer): Promise<void>;
