#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const parser = (file) => {
    // eslint-disable-next-line
  const content = fs.readFileSync(path.resolve(process.cwd(), file), 'utf-8');
  const parserContent = JSON.parse(content);

  return parserContent;
};

export default parser;
