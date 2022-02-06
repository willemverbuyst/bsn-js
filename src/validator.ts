export const isValidBSN = (bsn: string): boolean => {
	if (bsn.length < 8 && bsn.length > 9) {
		return false
	}

	const numbers = Array.from(String(bsn), Number)
	const lastNumber = numbers[numbers.length - 1]

	if (typeof lastNumber !== 'number') {
		return false
	}

	return (
		(numbers
			.slice(0, -1)
			.reduce((a, b, i, arr) => b * (arr.length + 1 - i) + a, 0) -
			lastNumber) %
			11 ===
		0
	)
}
