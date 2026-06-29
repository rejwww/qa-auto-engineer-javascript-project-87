#!/usr/bin/env node
import parser from './parser.js'

const genDiff = (file1,file2)  =>{
  const parserFile1 = parser(file1)
  const parserFile2 = parser(file2)

    return parserFile1 }

export default genDiff