/**
 * Noop module plugin of SUGOS
 * @function sugoModuleNoop
 * @param {Object} config - Configuration
 * @returns {Object} - Module settings
 */
'use strict'

const { name, version, description } = require('../package.json')
const co = require('co')
const { hasBin } = require('sg-check')
const debug = require('debug')('sugo:module:noop')
const asleep = require('asleep')

/** @lends sugoModuleNoop */
function sugoModuleNoop (config = {}) {
  debug('Config: ', config)
  return {

    /**
     * Ping a message.
     * @param {string} pong - Pong message
     * @returns {Promise.<string>} - Pong message
     */
    ping (pong = 'pong') {
      return co(function * () {
        yield asleep(500) // Take some time
        return pong // Return result to the caller
      })
    },

    /**
     * Assert spot system requirements.
     * @throws {Error} - System requirements failed error
     * @returns {Promise.<boolean>} - Asserted state
     */
    assert (ctx) {
      const bins = [ 'node' ] // Required commands
      return co(function * assertAck () {
        for (let bin of bins) {
          let ok = yield hasBin(bin)
          if (!ok) {
            throw new Error(`[${name}] Command not found: ${bin}`)
          }
        }
        return true
      })
    },

    /**
     * Module specification
     * @see https://github.com/realglobe-Inc/sg-schemas/blob/master/lib/module_spec.json
     */
    $spec: {
      name,
      version,
      desc: description,
      methods: {
        ping: {
          desc: 'Test the reachability of a module.',
          params: [
            { name: 'pong', type: 'string', desc: 'Pong message to return' }
          ],
          return: {
            type: 'string',
            desc: 'Pong message'
          }
        },

        assert: {
          desc: 'Test if the spot fulfills system requirements',
          params: [],
          throws: [ {
            type: 'Error',
            desc: 'System requirements failed'
          } ],
          return: {
            type: 'boolean',
            desc: 'System is OK'
          }
        }
      }
    }
  }
}

module.exports = sugoModuleNoop
