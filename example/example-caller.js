#!/usr/bin/env node

/**
 * Example to call from caller
 * @see https://github.com/realglobe-Inc/sugo-caller
 */
'use strict'

const co = require('co')
const assert = require('assert')
const sugoCaller = require('sugo-caller')

co(function * () {
  let caller = sugoCaller('http://my-sugo-cloud.example.com/callers', {})
  let actor = caller.connect('my-actor-01')

  // Access to the interface
  let noop = actor.noop()

  // Send ping
  let pong = yield noop.ping()
  assert.ok(pong)

// Just ping-pong, nothing more
}).catch((err) => console.error(err))
