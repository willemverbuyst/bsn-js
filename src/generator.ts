interface BSN {
	leading: string
	i4: number
	i5: number
	i6: number
	i7: number
	i8: number
}

export const generateBSN = (withLeadingZeroes = false): string => {
	const bsn: BSN = {
		leading: '9999',
		i4: Math.floor(Math.random() * 10),
		i5: Math.floor(Math.random() * 10),
		i6: Math.floor(Math.random() * 10),
		i7: Math.floor(Math.random() * 10),
		i8: 0,
	}

	if (withLeadingZeroes) bsn.leading = '0000'

	const sum =
		Array.from(String(bsn.leading), Number).reduce(
			(a, b, i) => b * (9 - i) + a,
			0
		) +
		5 * bsn.i4 +
		4 * bsn.i5 +
		3 * bsn.i6 +
		2 * bsn.i7

	bsn.i8 = Math.floor(sum - Math.floor(sum / 11) * 11)

	if (bsn.i8 > 9 && bsn.i7 > 0) {
		bsn.i7 -= 1
		bsn.i8 = 8
	}

	if (bsn.i8 > 9 && !(bsn.i7 > 0)) {
		bsn.i7 += 1
		bsn.i8 = 1
	}

	return `${bsn.leading}${bsn.i4}${bsn.i5}${bsn.i6}${bsn.i7}${bsn.i8}`
}
