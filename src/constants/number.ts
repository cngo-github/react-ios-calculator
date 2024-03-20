export const NOT_A_NUMBER = "NaN";

export const ZERO = "0";

export const DECIMAL_POINT = ".";

export const OVERFLOW = "Ovr";

export const NEGATIVE_SIGN = "-";

const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

export const isCalcNumber = (value: string) => numberKeys.includes(value);
