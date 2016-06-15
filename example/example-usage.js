#!/usr/bin/env node

/**
 * Example usage of the terminal
 */
'use strict'

const sugoInterfaceNoop = require('sugo-interface-noop')
const sugoSpot = require('sugo-spot')
const co = require('co')

co(function * () {
  let spot = sugoSpot('http://my-sugo-cloud.example.com/spots', {
    key: 'my-spot-01',
    interfaces: {
      // Register the interface
      noop: sugoInterfaceNoop({})
    }
  })
  yield spot.connect()
}).catch((err) => console.error(err))
