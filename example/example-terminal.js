#!/usr/bin/env node

/**
 * Example control from remote terminal
 */
'use strict'

const co = require('co')
const assert = require('assert')
const sugoTerminal = require('sugo-terminal')

co(function * () {
  let terminal = sugoTerminal('http://my-sugo-cloud.example.com/terminals', {})
  let spot = terminal.connect('my-spot-01')

  // Access to the interface
  let noop = spot.noop()

  // Send ping
  let pong = yield noop.ping()
  assert.ok(pong)

// Just ping-pong, nothing more
}).catch((err) => console.error(err))
