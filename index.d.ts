/**
 * Writes `content` to file using utf-8 encoding,
 * tries to create directory with mkdirp.
 *
 * @example
 * ```js
 * import write from 'write-file-utf8';
 * // Nested folders will be created if they do not exist yet.
 * const filePath = '/tmp/foo/bar.txt';
 * const content = 'Hello world';
 * await write(filePath, content);
 * ```
 */
export default function writeFileUtf8(
  filePath: string,
  content: string
): Promise<void>;
