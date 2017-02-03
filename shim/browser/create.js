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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJOb29wIiwicmVxdWlyZSIsImNyZWF0ZSIsImFyZ3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQTtBQUNBLFNBQVNDLE1BQVQsR0FBMEI7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ3hCLDRDQUFXSCxJQUFYLGdCQUFtQkcsSUFBbkI7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlIGEgbW9kdWxlIGluc3RhbmNlXG4gKiBAZnVuY3Rpb24gY3JlYXRlXG4gKiBAcmV0dXJucyB7Tm9vcH1cbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE5vb3AgPSByZXF1aXJlKCcuL25vb3AnKVxuXG4vKiogQGxlbmRzIGNyZWF0ZSAqL1xuZnVuY3Rpb24gY3JlYXRlICguLi5hcmdzKSB7XG4gIHJldHVybiBuZXcgTm9vcCguLi5hcmdzKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuIl19