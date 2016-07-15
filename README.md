sugo-moduel-noop
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-moduel-noop
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-moduel-noop
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-moduel-noop.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-moduel-noop
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-moduel-noop.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-moduel-noop/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-moduel-noop
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-moduel-noop.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-moduel-noop.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-moduel-noop
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-moduel-noop.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-moduel-noop
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-moduel-noop.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

NOOP interface plugin of SUGOS

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


This is a stub module for testing purpose. ("noop" stands for "No-Operation") 

It has only few basic methods.


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sugo-moduel-noop --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

Register a module to actor.

```javascript
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

```

Then, call the module from a remote caller.

```javascript
#!/usr/bin/env node

/**
 * Example control from caller
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

```

<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Methods.md.hbs" Start -->

<a name="section-doc-guides-03-methods-md"></a>

Methods
---------

The following methods are available from remote terminals for the interface.

+ [.ping(pong) -> string](#method-ping)
+ [.assert() -> boolean](#method-assert)

<a name="method-ping"></a>
### .ping(pong) -> <code>string</code>

Test the reachability of a module.

| Param | Type | Description |
| ----- | ---- | ----------- |
| pong  | <code>string</code> | Pong message to return |

<a name="method-assert"></a>
### .assert() -> <code>boolean</code>

Test if the spot fulfills system requirements



<!-- Section from "doc/guides/03.Methods.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-moduel-noop/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [SUGOS][sugos_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos

<!-- Links End -->
