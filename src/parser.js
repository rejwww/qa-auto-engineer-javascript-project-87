#!/usr/bin/env node
import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

const parser = (file)  =>{
   const content = fs.readFileSync(path.resolve(process.cwd(), file), 'utf-8')
   const parserContent = JSON.parse(content )

    return parserContent}

export default parser