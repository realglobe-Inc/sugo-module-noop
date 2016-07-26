/**
 * NOOP interface plugin of SUGOS
 * @module sugo-module-noop
 * @version 4.0.0
 */

'use strict'

const create = require('./create')
const Noop = require('./noop')

let lib = create.bind(this)

Object.assign(lib, Noop, {
  create,
  Noop
})

module.exports = lib
