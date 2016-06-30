/**
 * Test case for sugoInterfaceNoop.
 * Runs with mocha.
 */
'use strict'

const sugoInterfaceNoop = require('../lib/sugo_interface_noop.js')
const assert = require('assert')
const sgSchemas = require('sg-schemas')
const sgValidator = require('sg-validator')
const co = require('co')

describe('sugo-interface-noop', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Check spec', () => co(function * () {
    let interface_ = sugoInterfaceNoop({})
    assert.ok(interface_)

    let { $spec } = interface_
    let specError = sgValidator(sgSchemas.interfaceSpec).validate($spec)
    assert.ok(!specError)
  }))

  it('Take ping-pong', () => co(function * () {
    let interface_ = sugoInterfaceNoop({})
    let pong = yield interface_.ping({ params: [] })
    assert.ok(pong)
  }))

  it('Do assert', () => co(function * () {
    let interface_ = sugoInterfaceNoop({})
    let caught
    try {
      yield interface_.assert({})
    } catch (err) {
      caught = err
    }
    assert.ok(!caught)
  }))

  it('Compare methods with spec', () => co(function * () {
    let interface_ = sugoInterfaceNoop({})
    let { $spec } = interface_
    let implemented = Object.keys(interface_).filter((name) => !/^[\$_]/.test(name))
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
