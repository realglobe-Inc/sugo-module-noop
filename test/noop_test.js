/**
 * Test case for Noop.
 * Runs with mocha.
 */
'use strict'

const Noop = require('../lib/noop.js')
const assert = require('assert')
const sgSchemas = require('sg-schemas')
const sgValidator = require('sg-validator')
const co = require('co')

describe('sugo-moduel-noop', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Check spec', () => co(function * () {
    let module = new Noop({})
    assert.ok(module)

    let { $spec } = module
    let specError = sgValidator(sgSchemas.moduleSpec).validate($spec)
    assert.ok(!specError)
  }))

  it('Take ping-pong', () => co(function * () {
    let module = new Noop({})
    let pong = yield module.ping()
    assert.ok(pong)
  }))

  it('Do assert', () => co(function * () {
    let module = new Noop({})
    let caught
    try {
      yield module.assert({})
    } catch (err) {
      caught = err
    }
    assert.ok(!caught)
  }))

  it('Compare methods with spec', () => co(function * () {
    let module = new Noop({})
    let { $spec } = module
    let implemented = Object.getOwnPropertyNames(Noop.prototype)
      .filter((name) => !/^[\$_]/.test(name))
      .filter((name) => !~[ 'constructor' ].indexOf(name))
    let described = Object.keys($spec.methods).filter((name) => !/^[\$_]/.test(name))
    for (let name of implemented) {
      assert.ok(!!~described.indexOf(name), `${name} method should be described in spec`)
    }
    for (let name of described) {
      assert.ok(!!~implemented.indexOf(name), `${name} method should be implemented`)
    }
  }))
})

/* global describe, before, after, it */
