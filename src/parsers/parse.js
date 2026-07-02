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
      result.push({type: 'add', key, value: value2});
    } else if (value2 === undefined) {
      result.push({type: 'del', key, value: value1});
    } else {
      if (_.isEqual(value1, value2)) {
        result.push({type: 'pass', key, value: value1});
      } else {
       result.push({type: 'update',key, oldValue: value1, newValue: value2,
      });
      }
    }
  }
  return result;
}

export default parse
