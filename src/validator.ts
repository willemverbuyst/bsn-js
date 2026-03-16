/** Sum of digit[i] * weight[i], minus check digit, must be divisible by 11 (Dutch 11-proef). */
export const passesElevenTest = (digits: number[]): boolean => {
  const checkDigit = digits.at(-1);
  if (checkDigit === undefined) return false;
  const weightedSum = digits
    .slice(0, -1)
    .reduce((acc, digit, i, arr) => digit * (arr.length + 1 - i) + acc, 0);
  return (weightedSum - checkDigit) % 11 === 0;
};

export const isValidBSN = (bsn: string): boolean => {
  if (bsn.length < 8 || bsn.length > 9) {
    return false;
  }

  const digits = Array.from(bsn, Number);

  if (digits.includes(NaN)) {
    return false;
  }

  return passesElevenTest(digits);
};
