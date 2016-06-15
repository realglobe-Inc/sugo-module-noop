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

  it('Sugo demo interface', () => co(function * () {
    let interface_ = sugoInterfaceNoop({})
    assert.ok(interface_)

    let { $spec } = interface_
    let specError = sgValidator(sgSchemas.interfaceSpec).validate($spec)
    assert.ok(!specError)
  }))

  it('Ping/Pong', () => co(function * () {
    let interface_ = sugoInterfaceNoop({})
    let pong = yield interface_.ping({ params: [] })
    assert.ok(pong)
  }))
})

/* global describe, before, after, it */
