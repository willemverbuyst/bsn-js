[![lint-test-build](https://github.com/willemverbuyst/bsn-js/actions/workflows/lint-test-build.yml/badge.svg)](https://github.com/willemverbuyst/bsn-js/actions/workflows/lint-test-build.yml)

# bsn-js

bsn-js can be used to generate a test BSN (burger service nummer) or validate an existing BSN

works for JavaScript and TypeScript (type definitions included)

## installation

> npm install bsn-js

or using yarn

> yarn add bsn-js

<br>

## usage

#### validate existing BSN

`import { isValidBSN } from 'bsn-js'`

or

`const { isValidBSN } = require('bsn-js')`

pass the BSN (string) to the function and it will return `true` or `false`

example: `const validBSN = isValidBSN('12312312') # false`

<br>

#### generate BSN for testing

`import { generateBSN } from 'bsn-js'`

or

`const { generateBSN } = require('bsn-js)`

test BSNs will consist of 9 characters

the Dutch authority has reserved BSNs starting with 0000 and 99999 for testing

the generetated BSN will start with 99999 by default

`const bsn = generateBSN() # 999999400`

when the function generateBSN is given true as argument, it will return a BSN starting with 0000

`const bsn = generateBSN(true) # 000078840`

<br>

## information BSN

[official docs](https://www.government.nl/topics/personal-data/citizen-service-number-bsn)

[11 check](https://en.wikipedia.org/wiki/Check_digit)

[bsn-tool](https://github.com/willemverbuyst/bsn-tool)
