#!/usr/bin/env node
import parser from './parsers/parser.js'
import parse from './parsers/parse.js'
import stylish from './formatters/stylish.js'

const genDiff = (file1,file2,  format = 'stylish')  =>{
  const parserFile1 = parser(file1)
  const parserFile2 = parser(file2)

  const result = parse(parserFile1,parserFile2)

  if (format === 'stylish') {
    return stylish(result);
  }

    // return result
}

export default genDiff