#!/usr/bin/env node

/**
 * Example usage of the caller
 */
'use strict'

const sugoModuleNoop = require('sugo-moduel-noop')
const sugoActor = require('sugo-actor')
const co = require('co')

co(function * () {
  let actor = sugoActor('http://my-sugo-cloud.example.com/actors', {
    key: 'my-actor-01',
    modules: {
      // Register the module
      noop: sugoModuleNoop({})
    }
  })
  yield actor.connect()
}).catch((err) => console.error(err))
