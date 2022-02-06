import { generateBSN } from './generator'
import { isValidBSN } from './validator'

describe('#generateBSN', () => {
	const testcases = Array.from({ length: 50 }, (_, i) => i + 1)

	test.each(testcases)('%s: should generate valid BSN)', () =>
		expect(isValidBSN(generateBSN())).toBe(true)
	)

	test.each(testcases)(
		'%s: with leading "0000" should generate valid BSN)',
		() => expect(isValidBSN(generateBSN(true))).toBe(true)
	)
})
