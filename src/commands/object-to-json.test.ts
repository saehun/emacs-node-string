import { objectToJson } from './object-to-json';

test('object parsed to json', () => {
  expect(objectToJson(`{a:1}`)).toEqual(JSON.stringify({ a: 1 }, undefined, 2));
});
