#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

const parser = (file) => {
    // eslint-disable-next-line
  const content = fs.readFileSync(path.resolve(process.cwd(), file), 'utf-8');
  const extension = path.extname(file)
  if (extension === '.json'){
  const parserContent = JSON.parse(content);
  return parserContent;
  } else if((extension === '.yml') || (extension === '.yaml')){
  const parserContent = YAML.parse(content);
  return parserContent;
  }
};

export default parser;
