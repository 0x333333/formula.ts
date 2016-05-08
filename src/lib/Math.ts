export class Math {
    // Returns the absolute value of a number
    ABS: () => void;

    // Returns the arccosine of a number
    ACOS: () => void;

    // Returns the inverse hyperbolic cosine of a number
    ACOSH: () => void;

    // Returns the arccotangent of a number
    ACOT: () => void;

    // Returns the hyperbolic arccotangent of a number
    ACOTH: () => void;

    // Returns an aggregate in a list or database
    AGGREGATE: () => void;

    // Converts a Roman number to Arabic, as a number
    ARABIC: () => void;

    // Returns the arcsine of a number
    ASIN: () => void;

    // Returns the inverse hyperbolic sine of a number
    ASINH: () => void;

    // Returns the arctangent of a number
    ATAN: () => void;

    // Returns the arctangent from x- and y-coordinates
    ATAN2: () => void;

    // Returns the inverse hyperbolic tangent of a number
    ATANH: () => void;

    // Converts a number into a text representation with the given radix (base)
    BASE: () => void;

    // Rounds a number to the nearest integer or to the nearest multiple of significance
    CEILING: () => void;

    // Rounds a number up, to the nearest integer or to the nearest multiple of significance
    CEILING_MATH: () => void;

    // Rounds a number the nearest integer or to the nearest multiple of significance. Regardless of the sign of the number, the number is rounded up.
    CEILING_PRECISE: () => void;

    // Returns the number of combinations for a given number of objects
    COMBIN: () => void;

    // Returns the number of combinations with repetitions for a given number of items
    COMBINA: () => void;

    // Returns the cosine of a number
    COS: () => void;

    // Returns the hyperbolic cosine of a number
    COSH: () => void;

    // Returns the cotangent of an angle
    COT: () => void;

    // Returns the hyperbolic cotangent of a number
    COTH: () => void;

    // Returns the cosecant of an angle
    CSC: () => void;

    // Returns the hyperbolic cosecant of an angle
    CSCH: () => void;

    // Converts a text representation of a number in a given base into a decimal number
    DECIMAL: () => void;

    // Converts radians to degrees
    DEGREES: () => void;

    // Rounds a number up to the nearest even integer
    EVEN: () => void;

    // Returns e raised to the power of a given number
    EXP: () => void;

    // Returns the factorial of a number
    FACT: () => void;

    // Returns the double factorial of a number
    FACTDOUBLE: () => void;

    // Rounds a number down, toward zero
    // FLOOR: () => void;

    // Rounds a number down, to the nearest integer or to the nearest multiple of significance
    FLOOR_MATH: () => void;

    // Rounds a number down to the nearest integer or to the nearest multiple of significance. Regardless of the sign of the number, the number is rounded down.
    FLOOR_PRECISE: () => void;

    // Returns the greatest common divisor
    GCD: () => void;

    // Rounds a number down to the nearest integer
    INT: () => void;

    // Returns a number that is rounded up to the nearest integer or to the nearest multiple of significance
    ISO_CEILING: () => void;

    // Returns the least common multiple
    LCM: () => void;

    // Returns the natural logarithm of a number
    LN: () => void;

    // Returns the logarithm of a number to a specified base
    LOG: () => void;

    // Returns the base-10 logarithm of a number
    LOG10: () => void;

    // Returns the matrix determinant of an array
    MDETERM: () => void;

    // Returns the matrix inverse of an array
    MINVERSE: () => void;

    // Returns the matrix product of two arrays
    MMULT: () => void;

    // Returns the remainder from division
    MOD: () => void;

    // Returns a number rounded to the desired multiple
    MROUND: () => void;

    // Returns the multinomial of a set of numbers
    MULTINOMIAL: () => void;

    // Returns the unit matrix or the specified dimension
    MUNIT: () => void;

    // Rounds a number up to the nearest odd integer
    ODD: () => void;

    // Returns the value of pi
    PI: () => void;

    // Returns the result of a number raised to a power
    POWER: () => void;

    // Multiplies its arguments
    PRODUCT: () => void;

    // Returns the integer portion of a division
    QUOTIENT: () => void;

    // Converts degrees to radians
    RADIANS: () => void;

    // Returns a random number between 0 and 1
    RAND: () => void;

    // Returns a random number between the numbers you specify
    RANDBETWEEN: () => void;

    // Converts an Arabic numeral to Roman, as text
    ROMAN: () => void;

    // Rounds a number to a specified number of digits
    ROUND: () => void;

    // Rounds a number down, toward zero
    ROUNDDOWN: () => void;

    // Rounds a number up, away from zero
    ROUNDUP: () => void;

    // Returns the secant of an angle
    SEC: () => void;

    // Returns the hyperbolic secant of an angle
    SECH: () => void;

    // Returns the sum of a power series based on the formula
    SERIESSUM: () => void;

    // Returns the sign of a number
    SIGN: () => void;

    // Returns the sine of the given angle
    SIN: () => void;

    // Returns the hyperbolic sine of a number
    SINH: () => void;

    // Returns a positive square root
    SQRT: () => void;

    // Returns the square root of (number * pi)
    SQRTPI: () => void;

    // Returns a subtotal in a list or database
    SUBTOTAL: () => void;

    // Adds its arguments
    SUM(a: number, b: number): number {
        return a + b;
    };

    // Adds the cells specified by a given criteria
    SUMIF: () => void;

    // Adds the cells in a range that meet multiple criteria
    SUMIFS: () => void;

    // Returns the sum of the products of corresponding array components
    SUMPRODUCT: () => void;

    // Returns the sum of the squares of the arguments
    SUMSQ: () => void;

    // Returns the sum of the difference of squares of corresponding values in two arrays
    SUMX2MY2: () => void;

    // Returns the sum of the sum of squares of corresponding values in two arrays
    SUMX2PY2: () => void;

    // Returns the sum of squares of differences of corresponding values in two arrays
    SUMXMY2: () => void;

    // Returns the tangent of a number
    TAN: () => void;

    // Returns the hyperbolic tangent of a number
    TANH: () => void;

    // Truncates a number to an integer
    TRUNC: () => void;
}