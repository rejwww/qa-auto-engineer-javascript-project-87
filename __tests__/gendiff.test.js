import { fileURLToPath } from 'url'
import path from 'path'
import { dirname, resolve } from 'node:path';
import genDiff from '../src/index.js'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)


// BEGIN (write your solution here)

test('genDiff json', () =>{
// let path1= `${__dirname}/../__fixtures__/file1.json`
// let path2 = `${__dirname}/../__fixtures__/file2.json`
const currentDir = dirname(fileURLToPath(import.meta.url))
let path1 = path.resolve(currentDir, '..', '__fixtures__', 'file1.json')
let path2 = path.resolve(currentDir, '..', '__fixtures__', 'file2.json')

let expected = "{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}"

let result = genDiff(path1, path2)

    expect(typeof result).toBe('string')
    expect(result).toBe(expected)
})



test('genDiff yml', () =>{
const currentDir = dirname(fileURLToPath(import.meta.url))
let path1 = path.resolve(currentDir, '..', '__fixtures__', 'file1.yml')
let path2 = path.resolve(currentDir, '..', '__fixtures__', 'file2.yml')

let expected = "{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}"

let result = genDiff(path1, path2)

    expect(typeof result).toBe('string')
    expect(result).toBe(expected)
})


test('genDiff yaml', () =>{
const currentDir = dirname(fileURLToPath(import.meta.url))
let path1 = path.resolve(currentDir, '..', '__fixtures__', 'file1.yaml')
let path2 = path.resolve(currentDir, '..', '__fixtures__', 'file2.yaml')

let expected = "{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}"

let result = genDiff(path1, path2)

    expect(typeof result).toBe('string')
    expect(result).toBe(expected)
})

// END