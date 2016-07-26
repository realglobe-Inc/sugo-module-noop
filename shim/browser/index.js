/**
 * NOOP module for SUGOS
 * @module sugo-module-noop
 * @version 4.0.1
 */

'use strict';

var create = require('./create');
var Noop = require('./noop');

var lib = create.bind(undefined);

Object.assign(lib, Noop, {
  create: create,
  Noop: Noop
});

module.exports = lib;
//# sourceMappingURL=data:application/json;base64,bnVsbA==