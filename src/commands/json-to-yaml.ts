import * as YAML from 'yaml';
import { Command } from './interface';
import objectToJson from './object-to-json';

const jsonToYaml: Command = input => {
  let obj: any;
  try {
    obj = JSON.parse(input);
  } catch (e) {
    if (e instanceof SyntaxError) {
      obj = objectToJson(input);
    } else {
      throw e;
    }
  }
  return YAML.stringify(obj, { indent: 2 });
};

export default jsonToYaml;
