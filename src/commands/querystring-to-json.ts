import { Command } from './interface';
import * as queryString from 'query-string';

const queryStringToJson: Command = input => {
  return JSON.stringify(queryString.parse(input), undefined, 2);
};

export default queryStringToJson;
