import { Command } from './interface';

/**
 * Accept plain javascript object string and convert it into json.
 *
 * @remark
 *
 * It is DANGEROUS command while it use 'eval'. Tough, input will be
 * emacs region. User should have attention of how it works.
 *
 * @throw ParseError
 *
 * @return json string
 */
export const objectToJson: Command = input => {
  const object = eval('(' + input + ')');
  return JSON.stringify(object, undefined, 2);
};

export default objectToJson;
