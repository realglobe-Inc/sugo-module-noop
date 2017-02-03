#!/usr/bin/env node

/**
 * Generate shim script
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { browser } = require('sugo-ci-module')

browser({
  cwd: 'lib',
  out: 'shim/browser'
})

