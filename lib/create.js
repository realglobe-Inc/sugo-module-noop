/**
 * Create a module instance
 * @function create
 * @returns {Noop}
 */
'use strict'

const Noop = require('./noop')

/** @lends create */
function create (...args) {
  return new Noop(...args)
}

module.exports = create
