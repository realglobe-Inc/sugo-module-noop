/**
 * Noop module for SUGOS
 * @class Noop
 * @augments Module
 * @param {Object} config - Configuration
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('sugo-module-base');

var Module = _require.Module;

var _require2 = require('../package.json');

var name = _require2.name;
var version = _require2.version;
var description = _require2.description;


var co = require('co');

var _require3 = require('sg-check');

var hasBin = _require3.hasBin;

var asleep = require('asleep');
var debug = require('debug')('sugo:module:noop');

/** @lends Noop */

var Noop = function (_Module) {
  _inherits(Noop, _Module);

  function Noop() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Noop);

    debug('Config: ', config);
    return _possibleConstructorReturn(this, Object.getPrototypeOf(Noop).call(this, config));
  }

  /**
   * Ping a message.
   * @param {string} pong - Pong message
   * @returns {Promise.<string>} - Pong message
   */


  _createClass(Noop, [{
    key: 'ping',
    value: function ping() {
      var pong = arguments.length <= 0 || arguments[0] === undefined ? 'pong' : arguments[0];

      return co(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return asleep(500);

              case 2:
                return _context.abrupt('return', pong);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }

    /**
     * Assert spot system requirements.
     * @throws {Error} - System requirements failed error
     * @returns {Promise.<boolean>} - Asserted state
     */

  }, {
    key: 'assert',
    value: function assert(ctx) {
      var bins = ['node']; // Required commands
      return co(regeneratorRuntime.mark(function assertAck() {
        return regeneratorRuntime.wrap(function assertAck$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hasBin.assertAll(bins);

              case 2:
                return _context2.abrupt('return', true);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, assertAck, this);
      }));
    }

    /**
     * Module specification
     * @see https://github.com/realglobe-Inc/sg-schemas/blob/master/lib/module_spec.json
     */

  }, {
    key: '$spec',
    get: function get() {
      return {
        name: name,
        version: version,
        desc: description,
        methods: {
          ping: {
            desc: 'Test the reachability of a module.',
            params: [{ name: 'pong', type: 'string', desc: 'Pong message to return' }],
            return: {
              type: 'string',
              desc: 'Pong message'
            }
          },

          assert: {
            desc: 'Test if the spot fulfills system requirements',
            params: [],
            throws: [{
              type: 'Error',
              desc: 'System requirements failed'
            }],
            return: {
              type: 'boolean',
              desc: 'System is OK'
            }
          }
        }
      };
    }
  }]);

  return Noop;
}(Module);

module.exports = Noop;
//# sourceMappingURL=data:application/json;base64,bnVsbA==