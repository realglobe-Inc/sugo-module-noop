/**
 * NOOP module for SUGOS
 * @module sugo-module-noop
 * @version 4.0.3
 */

'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = require('./create');
var Noop = require('./noop');

var lib = create.bind(undefined);

(0, _assign2.default)(lib, Noop, {
  create: create,
  Noop: Noop
});

module.exports = lib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInJlcXVpcmUiLCJOb29wIiwibGliIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjtBQUNBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiOztBQUVBLElBQUlFLE1BQU1ILE9BQU9JLElBQVAsV0FBVjs7QUFFQSxzQkFBY0QsR0FBZCxFQUFtQkQsSUFBbkIsRUFBeUI7QUFDdkJGLGdCQUR1QjtBQUV2QkU7QUFGdUIsQ0FBekI7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJILEdBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTk9PUCBtb2R1bGUgZm9yIFNVR09TXG4gKiBAbW9kdWxlIHN1Z28tbW9kdWxlLW5vb3BcbiAqIEB2ZXJzaW9uIDQuMC4zXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNyZWF0ZSA9IHJlcXVpcmUoJy4vY3JlYXRlJylcbmNvbnN0IE5vb3AgPSByZXF1aXJlKCcuL25vb3AnKVxuXG5sZXQgbGliID0gY3JlYXRlLmJpbmQodGhpcylcblxuT2JqZWN0LmFzc2lnbihsaWIsIE5vb3AsIHtcbiAgY3JlYXRlLFxuICBOb29wXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpYlxuIl19