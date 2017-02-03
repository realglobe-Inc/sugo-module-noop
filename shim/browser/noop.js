/**
 * Noop module for SUGOS
 * @class Noop
 * @augments Module
 * @param {Object} config - Configuration
 */
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('sugo-module-base'),
    Module = _require.Module;

var _require2 = require('../package.json'),
    name = _require2.name,
    version = _require2.version,
    description = _require2.description;

var co = require('co');

var _require3 = require('sg-check'),
    hasBin = _require3.hasBin;

var asleep = require('asleep');
var debug = require('debug')('sugo:module:noop');

/** @lends Noop */

var Noop = function (_Module) {
  (0, _inherits3.default)(Noop, _Module);

  function Noop() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Noop);

    debug('Config: ', config);
    return (0, _possibleConstructorReturn3.default)(this, (Noop.__proto__ || (0, _getPrototypeOf2.default)(Noop)).call(this, config));
  }

  /**
   * Ping a message.
   * @param {string} pong - Pong message
   * @returns {Promise.<string>} - Pong message
   */


  (0, _createClass3.default)(Noop, [{
    key: 'ping',
    value: function ping() {
      var pong = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pong';

      return co(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
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
      return co(_regenerator2.default.mark(function assertAck() {
        return _regenerator2.default.wrap(function assertAck$(_context2) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vb3AuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIk1vZHVsZSIsIm5hbWUiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJjbyIsImhhc0JpbiIsImFzbGVlcCIsImRlYnVnIiwiTm9vcCIsImNvbmZpZyIsInBvbmciLCJjdHgiLCJiaW5zIiwiYXNzZXJ0QWNrIiwiYXNzZXJ0QWxsIiwiZGVzYyIsIm1ldGhvZHMiLCJwaW5nIiwicGFyYW1zIiwidHlwZSIsInJldHVybiIsImFzc2VydCIsInRocm93cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVtQkEsUUFBUSxrQkFBUixDO0lBQVhDLE0sWUFBQUEsTTs7Z0JBQytCRCxRQUFRLGlCQUFSLEM7SUFBL0JFLEksYUFBQUEsSTtJQUFNQyxPLGFBQUFBLE87SUFBU0MsVyxhQUFBQSxXOztBQUV2QixJQUFNQyxLQUFLTCxRQUFRLElBQVIsQ0FBWDs7Z0JBQ21CQSxRQUFRLFVBQVIsQztJQUFYTSxNLGFBQUFBLE07O0FBQ1IsSUFBTUMsU0FBU1AsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFNUSxRQUFRUixRQUFRLE9BQVIsRUFBaUIsa0JBQWpCLENBQWQ7O0FBRUE7O0lBQ01TLEk7OztBQUNKLGtCQUEwQjtBQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTtBQUFBOztBQUN4QkYsVUFBTSxVQUFOLEVBQWtCRSxNQUFsQjtBQUR3Qiw2SEFFbEJBLE1BRmtCO0FBR3pCOztBQUVEOzs7Ozs7Ozs7MkJBS3FCO0FBQUEsVUFBZkMsSUFBZSx1RUFBUixNQUFROztBQUNuQixhQUFPTiw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDRkUsT0FBTyxHQUFQLENBREU7O0FBQUE7QUFBQSxpREFFREksSUFGQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFILEVBQVA7QUFJRDs7QUFFRDs7Ozs7Ozs7MkJBS1FDLEcsRUFBSztBQUNYLFVBQU1DLE9BQU8sQ0FBRSxNQUFGLENBQWIsQ0FEVyxDQUNhO0FBQ3hCLGFBQU9SLDhCQUFHLFNBQVdTLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0ZSLE9BQU9TLFNBQVAsQ0FBaUJGLElBQWpCLENBREU7O0FBQUE7QUFBQSxrREFFRCxJQUZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFXQyxTQUFYO0FBQUEsT0FBSCxFQUFQO0FBSUQ7O0FBRUQ7Ozs7Ozs7d0JBSWE7QUFDWCxhQUFPO0FBQ0xaLGtCQURLO0FBRUxDLHdCQUZLO0FBR0xhLGNBQU1aLFdBSEQ7QUFJTGEsaUJBQVM7QUFDUEMsZ0JBQU07QUFDSkYsa0JBQU0sb0NBREY7QUFFSkcsb0JBQVEsQ0FDTixFQUFFakIsTUFBTSxNQUFSLEVBQWdCa0IsTUFBTSxRQUF0QixFQUFnQ0osTUFBTSx3QkFBdEMsRUFETSxDQUZKO0FBS0pLLG9CQUFRO0FBQ05ELG9CQUFNLFFBREE7QUFFTkosb0JBQU07QUFGQTtBQUxKLFdBREM7O0FBWVBNLGtCQUFRO0FBQ05OLGtCQUFNLCtDQURBO0FBRU5HLG9CQUFRLEVBRkY7QUFHTkksb0JBQVEsQ0FBRTtBQUNSSCxvQkFBTSxPQURFO0FBRVJKLG9CQUFNO0FBRkUsYUFBRixDQUhGO0FBT05LLG9CQUFRO0FBQ05ELG9CQUFNLFNBREE7QUFFTkosb0JBQU07QUFGQTtBQVBGO0FBWkQ7QUFKSixPQUFQO0FBOEJEOzs7RUFsRWdCZixNOztBQXFFbkJ1QixPQUFPQyxPQUFQLEdBQWlCaEIsSUFBakIiLCJmaWxlIjoibm9vcC5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE5vb3AgbW9kdWxlIGZvciBTVUdPU1xuICogQGNsYXNzIE5vb3BcbiAqIEBhdWdtZW50cyBNb2R1bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBDb25maWd1cmF0aW9uXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IE1vZHVsZSB9ID0gcmVxdWlyZSgnc3Vnby1tb2R1bGUtYmFzZScpXG5jb25zdCB7IG5hbWUsIHZlcnNpb24sIGRlc2NyaXB0aW9uIH0gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKVxuXG5jb25zdCBjbyA9IHJlcXVpcmUoJ2NvJylcbmNvbnN0IHsgaGFzQmluIH0gPSByZXF1aXJlKCdzZy1jaGVjaycpXG5jb25zdCBhc2xlZXAgPSByZXF1aXJlKCdhc2xlZXAnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzdWdvOm1vZHVsZTpub29wJylcblxuLyoqIEBsZW5kcyBOb29wICovXG5jbGFzcyBOb29wIGV4dGVuZHMgTW9kdWxlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgZGVidWcoJ0NvbmZpZzogJywgY29uZmlnKVxuICAgIHN1cGVyKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBQaW5nIGEgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvbmcgLSBQb25nIG1lc3NhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2UuPHN0cmluZz59IC0gUG9uZyBtZXNzYWdlXG4gICAqL1xuICBwaW5nIChwb25nID0gJ3BvbmcnKSB7XG4gICAgcmV0dXJuIGNvKGZ1bmN0aW9uICogKCkge1xuICAgICAgeWllbGQgYXNsZWVwKDUwMCkgLy8gVGFrZSBzb21lIHRpbWVcbiAgICAgIHJldHVybiBwb25nIC8vIFJldHVybiByZXN1bHQgdG8gdGhlIGNhbGxlclxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0IHNwb3Qgc3lzdGVtIHJlcXVpcmVtZW50cy5cbiAgICogQHRocm93cyB7RXJyb3J9IC0gU3lzdGVtIHJlcXVpcmVtZW50cyBmYWlsZWQgZXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2UuPGJvb2xlYW4+fSAtIEFzc2VydGVkIHN0YXRlXG4gICAqL1xuICBhc3NlcnQgKGN0eCkge1xuICAgIGNvbnN0IGJpbnMgPSBbICdub2RlJyBdIC8vIFJlcXVpcmVkIGNvbW1hbmRzXG4gICAgcmV0dXJuIGNvKGZ1bmN0aW9uICogYXNzZXJ0QWNrICgpIHtcbiAgICAgIHlpZWxkIGhhc0Jpbi5hc3NlcnRBbGwoYmlucylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2R1bGUgc3BlY2lmaWNhdGlvblxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFsZ2xvYmUtSW5jL3NnLXNjaGVtYXMvYmxvYi9tYXN0ZXIvbGliL21vZHVsZV9zcGVjLmpzb25cbiAgICovXG4gIGdldCAkc3BlYyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2ZXJzaW9uLFxuICAgICAgZGVzYzogZGVzY3JpcHRpb24sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHBpbmc6IHtcbiAgICAgICAgICBkZXNjOiAnVGVzdCB0aGUgcmVhY2hhYmlsaXR5IG9mIGEgbW9kdWxlLicsXG4gICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICB7IG5hbWU6ICdwb25nJywgdHlwZTogJ3N0cmluZycsIGRlc2M6ICdQb25nIG1lc3NhZ2UgdG8gcmV0dXJuJyB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICByZXR1cm46IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVzYzogJ1BvbmcgbWVzc2FnZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXNzZXJ0OiB7XG4gICAgICAgICAgZGVzYzogJ1Rlc3QgaWYgdGhlIHNwb3QgZnVsZmlsbHMgc3lzdGVtIHJlcXVpcmVtZW50cycsXG4gICAgICAgICAgcGFyYW1zOiBbXSxcbiAgICAgICAgICB0aHJvd3M6IFsge1xuICAgICAgICAgICAgdHlwZTogJ0Vycm9yJyxcbiAgICAgICAgICAgIGRlc2M6ICdTeXN0ZW0gcmVxdWlyZW1lbnRzIGZhaWxlZCdcbiAgICAgICAgICB9IF0sXG4gICAgICAgICAgcmV0dXJuOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZXNjOiAnU3lzdGVtIGlzIE9LJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vb3BcbiJdfQ==