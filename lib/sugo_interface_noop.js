/**
 * Noop interface plugin of SUGOS
 * @function sugoInterfaceNoop
 * @param {Object} config - Configuration
 * @returns {Object} - Interface settings
 */
'use strict'

const { name, version, description } = require('../package.json')
const co = require('co')
const debug = require('debug')('sugo:interface:noop')
const { sleep } = require('apemansleep')

/** @lends sugoInterfaceNoop */
function sugoInterfaceNoop (config = {}) {
  return {

    /**
     * Ping a message.
     * @param {SugoInterfaceContext} ctx
     * @returns {Promise.<string>} - Pong message
     */
    ping (ctx) {
      let { params, pipe } = ctx
      return co(function * () {
        yield sleep(500) // Take some time
        return params[ 0 ] || 'pong' // Return result to remote terminal.
      })
    },

    /**
     * Interface specification
     * @see https://github.com/realglobe-Inc/sg-schemas/blob/master/lib/interface_spec.json
     */
    $spec: {
      name,
      version,
      desc: description,
      methods: {
        ping: {
          desc: 'Test the reachability of a interface.',
          params: [
            { name: 'pong', type: 'string', desc: 'Pong message to return' }
          ],
          return: {
            type: 'string',
            desc: 'pong message'
          }
        }
      }
    }
  }
}

module.exports = sugoInterfaceNoop

/**
 * @typedef {Object} SugoInterfaceContext
 * @property {Array} params - Invoke parameters.
 * @property {EventEmitter} pipe - Pipe to remote terminal.
 */
