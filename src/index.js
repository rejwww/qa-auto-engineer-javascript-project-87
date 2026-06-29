#!/usr/bin/env node
import parser from './parser.js'
import parse from './parse.js'

const genDiff = (file1,file2)  =>{
  const parserFile1 = parser(file1)
  const parserFile2 = parser(file2)

  const result = parse(parserFile1,parserFile2)

    return result
}

export default genDiff