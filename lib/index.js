/**
 * NOOP interface plugin of SUGOS
 * @module sugo-interface-noop
 */

'use strict'

const sugoInterfaceNoop = require('./sugo_interface_noop')

let lib = sugoInterfaceNoop.bind(this)

Object.assign(lib, sugoInterfaceNoop, {
  sugoInterfaceNoop
})

module.exports = lib
