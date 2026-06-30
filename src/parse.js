#!/usr/bin/env node
import _ from 'lodash';

function parse(parserFile1 , parserFile2) {
  const keys = _.union(Object.keys(parserFile1 ), Object.keys(parserFile2));
  const sort = _.sortBy(keys);

  const result = [];

  for (const key of sort) {
    const value1 = parserFile1[key];
    const value2 = parserFile2[key];

    if (value1 === undefined) {
      result.push(`+ ${key}:${value2}`);
    } else if (value2 === undefined) {
      result.push(`- ${key}:${value1}`);
    } else {
      if (_.isEqual(value1, value2)) {
        result.push(`  ${key}:${value1}`);
      } else {
        result.push(`- ${key}:${value1}`);
        result.push(`+ ${key}:${value2}`);
      }
    }
  }
  return result.join('\n');
}

export default parse
