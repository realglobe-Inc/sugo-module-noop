/**
 * Create a module instance
 * @function create
 * @returns {Noop}
 */
'use strict';

var Noop = require('./noop');

/** @lends create */
function create() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Noop, [null].concat(args)))();
}

module.exports = create;
//# sourceMappingURL=data:application/json;base64,bnVsbA==