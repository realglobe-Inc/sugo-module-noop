/**
 * NOOP interface plugin of SUGOS
 * @module sugo-module-noop
 */

'use strict'

const sugoModuleNoop = require('./sugo_module_noop')

let lib = sugoModuleNoop.bind(this)

Object.assign(lib, sugoModuleNoop, {
  sugoModuleNoop
})

module.exports = lib
