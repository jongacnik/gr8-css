#!/usr/bin/env node

var program = require('commander')
var fs = require('fs-extra')

program
  .version('0.0.1')
  .arguments('[target]')
  .option('-d, --dirname <value>', 'gr8 directory name')

program.parse(process.argv)

var target  = program.args.length ? program.args[0] : '.'
var dirname = program.dirname || 'gr8'

fs.copy('source', target + '/' + dirname, function (err) {
  if (err) return console.error(err)
  console.log('gr8 added to ' + target + '/' + dirname)
})