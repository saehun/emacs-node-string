import * as YAML from 'yaml';
import { Command } from './interface';

const yamlToJson: Command = input => JSON.stringify(YAML.parse(input), undefined, 2);

export default yamlToJson;
