/**
 * NOOP interface plugin of SUGOS
 * @module sugo-moduel-noop
 */

'use strict'

const sugoModuleNoop = require('./sugo_module_noop')

let lib = sugoModuleNoop.bind(this)

Object.assign(lib, sugoModuleNoop, {
  sugoModuleNoop
})

module.exports = lib
