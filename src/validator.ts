/**
 * The isValidBSN function takes a string (of numbers)
 *
 * @param bsn the BSN to be validated
 * @returns true if it is a valid BSN else false
 */
export const isValidBSN = (bsn: string): boolean => {
	if (bsn.length < 8 || bsn.length > 9) {
		return false
	}

	const numbers = Array.from(String(bsn), Number)
	const lastNumber = numbers[numbers.length - 1]

	if (typeof lastNumber === 'number' && !numbers.includes(NaN)) {
		return (
			(numbers
				.slice(0, -1)
				.reduce((a, b, i, arr) => b * (arr.length + 1 - i) + a, 0) -
				lastNumber) %
				11 ===
			0
		)
	}

	return false
}
