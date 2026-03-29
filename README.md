# bsn-js

[![Code Checks](https://github.com/willemverbuyst/bsn-js/actions/workflows/code-checks.yml/badge.svg)](https://github.com/willemverbuyst/bsn-js/actions/workflows/code-checks.yml) [![Tests](https://github.com/willemverbuyst/bsn-js/actions/workflows/tests.yml/badge.svg)](https://github.com/willemverbuyst/bsn-js/actions/workflows/tests.yml) [![CodeQL](https://github.com/willemverbuyst/bsn-js/actions/workflows/code-ql.yml/badge.svg)](https://github.com/willemverbuyst/bsn-js/actions/workflows/code-ql.yml)

## What is this?

The bsn-js package can be used to generate a test BSN (burger service nummer) or to validate an existing BSN.

## Installation

> npm install bsn-js

## usage

### Validate an existing BSN

`import { isValidBSN } from 'bsn-js'`

Pass the BSN (string) to the function and it will return `true` or `false`.

Example: `const validBSN = isValidBSN('12312312') // false`

### Generate a BSN for testing

`import { generateBSN } from 'bsn-js'`

The test BSNs will consist of 9 characters. The Dutch authority has reserved BSNs starting with 0000 and 99999 for testing.

The generated BSN will start with 99999 by default.

`const bsn = generateBSN() // 999999400`

When the function generateBSN is given true as argument, it will return a BSN starting with 0000.

`const bsn = generateBSN(true) // 000078840`

## Information on BSN

[official docs](https://www.government.nl/topics/personal-data/citizen-service-number-bsn)

[11 check](https://en.wikipedia.org/wiki/Check_digit)

[bsn-tool](https://willemverbuyst.github.io/bsn-tool/)
