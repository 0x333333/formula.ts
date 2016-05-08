import {Compatibility} from "./lib/Compatibility";
import {Cube} from "./lib/Cube";
import {Database} from "./lib/Database";
import {Datetime} from "./lib/Datetime";
import {Engineering} from "./lib/Engineering";
import {Financial} from "./lib/Financial";
import {Information} from "./lib/Information";
import {Logical} from "./lib/Logical";
import {Lookup} from "./lib/Lookup";
import {Math} from "./lib/Math";
import {Statistical} from "./lib/Statistical";
import {Text} from "./lib/Text";
import {Web} from "./lib/Web";

export class Formula implements
    Compatibility,
    Cube,
    Database,
    Datetime,
    Engineering,
    Financial,
    Information,
    Logical,
    Lookup,
    Math,
    Statistical,
    Text,
    Web {
    // Returns the beta cumulative distribution function
    BETADIST: (foo: string) => void;

    // Returns the inverse of the cumulative distribution function for a specified beta distribution
    BETAINV: () => void;

    // Returns the individual term binomial distribution probability
    BINOMDIST: () => void;

    // Returns the one-tailed probability of the chi-squared distribution
    CHIDIST: () => void;

    // Returns the inverse of the one-tailed probability of the chi-squared distribution
    CHIINV: () => void;

    // Returns the test for independence
    CHITEST: () => void;

    // Joins two or more text strings into one string
    CONCATENATE: () => void;

    // Returns the confidence interval for a population mean
    CONFIDENCE: () => void;

    // Returns covariance, the average of the products of paired deviations
    COVAR: () => void;

    // Returns the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value
    CRITBINOM: () => void;

    // Returns the exponential distribution
    EXPONDIST: () => void;

    // Returns the F probability distribution
    FDIST: () => void;

    // Returns the inverse of the F probability distribution
    FINV: () => void;

    // Rounds a number down, toward zero
    FLOOR: () => void;

    // Calculates, or predicts, a future value by using existing values.
    FORECAST: () => void;

    // Returns the result of an F-test
    FTEST: () => void;

    // Returns the gamma distribution
    GAMMADIST: () => void;

    // Returns the inverse of the gamma cumulative distribution
    GAMMAINV: () => void;

    // Returns the hypergeometric distribution
    HYPGEOMDIST: () => void;

    // Returns the inverse of the lognormal cumulative distribution function
    LOGINV: () => void;

    // Returns the cumulative lognormal distribution
    LOGNORMDIST: () => void;

    // Returns the most common value in a data set
    MODE: () => void;

    // Returns the negative binomial distribution
    NEGBINOMDIST: () => void;

    // Returns the normal cumulative distribution
    NORMDIST: () => void;

    // Returns the inverse of the normal cumulative distribution
    NORMINV: () => void;

    // Returns the standard normal cumulative distribution
    NORMSDIST: () => void;

    // Returns the inverse of the standard normal cumulative distribution
    NORMSINV: () => void;

    // Returns the k-th percentile of values in a range
    PERCENTILE: () => void;

    // Returns the percentage rank of a value in a data set
    PERCENTRANK: () => void;

    // Returns the Poisson distribution
    POISSON: () => void;

    // Returns the quartile of a data set
    QUARTILE: () => void;

    // Returns the rank of a number in a list of numbers
    RANK: () => void;

    // Estimates standard deviation based on a sample
    STDEV: () => void;

    // Calculates standard deviation based on the entire population
    STDEVP: () => void;

    // Returns the Student's t-distribution
    TDIST: () => void;

    // Returns the inverse of the Student's t-distribution
    TINV: () => void;

    // Returns the probability associated with a Student's t-test
    TTEST: () => void;

    // Estimates variance based on a sample
    VAR: () => void;

    // Calculates variance based on the entire population
    VARP: () => void;

    // Returns the Weibull distribution
    WEIBULL: () => void;

    // Returns the one-tailed probability-value of a z-test
    ZTEST: () => void;

    // Returns a key performance indicator (KPI) property and displays the KPI name in the cell. A KPI is a quantifiable measurement, such as monthly gross profit or quarterly employee turnover, that is used to monitor an organization's performance.
    CUBEKPIMEMBER: () => void;

    // Returns a member or tuple from the cube. Use to validate that the member or tuple exists in the cube.
    CUBEMEMBER: () => void;

    // Returns the value of a member property from the cube. Use to validate that a member name exists within the cube and to return the specified property for this member.
    CUBEMEMBERPROPERTY: () => void;

    // Returns the nth, or ranked, member in a set_ Use to return one or more elements in a set, such as the top sales performer or the top 10 students.
    CUBERANKEDMEMBER: () => void;

    // Defines a calculated set of members or tuples by sending a set expression to the cube on the server, which creates the set, and then returns that set to Microsoft Office Excel.
    CUBESET: () => void;

    // Returns the number of items in a set_
    CUBESETCOUNT: () => void;

    // Returns an aggregated value from the cube.
    CUBEVALUE: () => void;

    // Returns the average of selected database entries
    DAVERAGE: () => void;

    // Counts the cells that contain numbers in a database
    DCOUNT: () => void;

    // Counts nonblank cells in a database
    DCOUNTA: () => void;

    // Extracts from a database a single record that matches the specified criteria
    DGET: () => void;

    // Returns the maximum value from selected database entries
    DMAX: () => void;

    // Returns the minimum value from selected database entries
    DMIN: () => void;

    // Multiplies the values in a particular field of records that match the criteria in a database
    DPRODUCT: () => void;

    // Estimates the standard deviation based on a sample of selected database entries
    DSTDEV: () => void;

    // Calculates the standard deviation based on the entire population of selected database entries
    DSTDEVP: () => void;

    // Adds the numbers in the field column of records in the database that match the criteria
    DSUM: () => void;

    // Estimates variance based on a sample from selected database entries
    DVAR: () => void;

    // Calculates variance based on the entire population of selected database entries
    DVARP: () => void;

    // Returns the serial number of a particular date
    DATE: () => void;

    // Calculates the number of days, months, or years between two dates. This function is useful in formulas where you need to calculate an age.
    DATEDIF: () => void;

    // Converts a date in the form of text to a serial number
    DATEVALUE: () => void;

    // Converts a serial number to a day of the month
    DAY: () => void;

    // Returns the number of days between two dates
    DAYS: () => void;

    // Calculates the number of days between two dates based on a 360-day year
    DAYS360: () => void;

    // Returns the serial number of the date that is the indicated number of months before or after the start date
    EDATE: () => void;

    // Returns the serial number of the last day of the month before or after a specified number of months
    EOMONTH: () => void;

    // Converts a serial number to an hour
    HOUR: () => void;

    // Returns the number of the ISO week number of the year for a given date
    ISOWEEKNUM: () => void;

    // Converts a serial number to a minute
    MINUTE: () => void;

    // Converts a serial number to a month
    MONTH: () => void;

    // Returns the number of whole workdays between two dates
    NETWORKDAYS: () => void;

    // Returns the number of whole workdays between two dates using parameters to indicate which and how many days are weekend days
    NETWORKDAYS_INTL: () => void;

    // Returns the serial number of the current date and time
    NOW: () => void;

    // Converts a serial number to a second
    SECOND: () => void;

    // Returns the serial number of a particular time
    TIME: () => void;

    // Converts a time in the form of text to a serial number
    TIMEVALUE: () => void;

    // Returns the serial number of today's date
    TODAY: () => void;

    // Converts a serial number to a day of the week
    WEEKDAY: () => void;

    // Converts a serial number to a number representing where the week falls numerically with a year
    WEEKNUM: () => void;

    // Returns the serial number of the date before or after a specified number of workdays
    WORKDAY: () => void;

    // Returns the serial number of the date before or after a specified number of workdays using parameters to indicate which and how many days are weekend days
    WORKDAY_INTL: () => void;

    // Converts a serial number to a year
    YEAR: () => void;

    // Returns the year fraction representing the number of whole days between start_date and end_date
    YEARFRAC: () => void;

    // Returns the modified Bessel function In(x)
    BESSELI: () => void;

    // Returns the Bessel function Jn(x)
    BESSELJ: () => void;

    // Returns the modified Bessel function Kn(x)
    BESSELK: () => void;

    // Returns the Bessel function Yn(x)
    BESSELY: () => void;

    // Converts a binary number to decimal
    BIN2DEC: () => void;

    // Converts a binary number to hexadecimal
    BIN2HEX: () => void;

    // Converts a binary number to octal
    BIN2OCT: () => void;

    // Returns a 'Bitwise And' of two numbers
    BITAND: () => void;

    // Returns a value number shifted left by shift_amount bits
    BITLSHIFT: () => void;

    // Returns a bitwise OR of 2 numbers
    BITOR: () => void;

    // Returns a value number shifted right by shift_amount bits
    BITRSHIFT: () => void;

    // Returns a bitwise 'Exclusive Or' of two numbers
    BITXOR: () => void;

    // Converts real and imaginary coefficients into a complex number
    COMPLEX: () => void;

    // Converts a number from one measurement system to another
    CONVERT: () => void;

    // Converts a decimal number to binary
    DEC2BIN: () => void;

    // Converts a decimal number to hexadecimal
    DEC2HEX: () => void;

    // Converts a decimal number to octal
    DEC2OCT: () => void;

    // Tests whether two values are equal
    DELTA: () => void;

    // Returns the error function
    ERF: () => void;

    // Returns the error function
    ERF_PRECISE: () => void;

    // Returns the complementary error function
    ERFC: () => void;

    // Returns the complementary ERF function integrated between x and infinity
    ERFC_PRECISE: () => void;

    // Tests whether a number is greater than a threshold value
    GESTEP: () => void;

    // Converts a hexadecimal number to binary
    HEX2BIN: () => void;

    // Converts a hexadecimal number to decimal
    HEX2DEC: () => void;

    // Converts a hexadecimal number to octal
    HEX2OCT: () => void;

    // Returns the absolute value (modulus) of a complex number
    IMABS: () => void;

    // Returns the imaginary coefficient of a complex number
    IMAGINARY: () => void;

    // Returns the argument theta, an angle expressed in radians
    IMARGUMENT: () => void;

    // Returns the complex conjugate of a complex number
    IMCONJUGATE: () => void;

    // Returns the cosine of a complex number
    IMCOS: () => void;

    // Returns the hyperbolic cosine of a complex number
    IMCOSH: () => void;

    // Returns the cotangent of a complex number
    IMCOT: () => void;

    // Returns the cosecant of a complex number
    IMCSC: () => void;

    // Returns the hyperbolic cosecant of a complex number
    IMCSCH: () => void;

    // Returns the quotient of two complex numbers
    IMDIV: () => void;

    // Returns the exponential of a complex number
    IMEXP: () => void;

    // Returns the natural logarithm of a complex number
    IMLN: () => void;

    // Returns the base-10 logarithm of a complex number
    IMLOG10: () => void;

    // Returns the base-2 logarithm of a complex number
    IMLOG2: () => void;

    // Returns a complex number raised to an integer power
    IMPOWER: () => void;

    // Returns the product of from 2 to 255 complex numbers
    IMPRODUCT: () => void;

    // Returns the real coefficient of a complex number
    IMREAL: () => void;

    // Returns the secant of a complex number
    IMSEC: () => void;

    // Returns the hyperbolic secant of a complex number
    IMSECH: () => void;

    // Returns the sine of a complex number
    IMSIN: () => void;

    // Returns the hyperbolic sine of a complex number
    IMSINH: () => void;

    // Returns the square root of a complex number
    IMSQRT: () => void;

    // Returns the difference between two complex numbers
    IMSUB: () => void;

    // Returns the sum of complex numbers
    IMSUM: () => void;

    // Returns the tangent of a complex number
    IMTAN: () => void;

    // Converts an octal number to binary
    OCT2BIN: () => void;

    // Converts an octal number to decimal
    OCT2DEC: () => void;

    // Converts an octal number to hexadecimal
    OCT2HEX: () => void;

    // Returns the accrued interest for a security that pays periodic interest
    ACCRINT: () => void;

    // Returns the accrued interest for a security that pays interest at maturity
    ACCRINTM: () => void;

    // Returns the depreciation for each accounting period by using a depreciation coefficient
    AMORDEGRC: () => void;

    // Returns the depreciation for each accounting period
    AMORLINC: () => void;

    // Returns the number of days from the beginning of the coupon period to the settlement date
    COUPDAYBS: () => void;

    // Returns the number of days in the coupon period that contains the settlement date
    COUPDAYS: () => void;

    // Returns the number of days from the settlement date to the next coupon date
    COUPDAYSNC: () => void;

    // Returns the next coupon date after the settlement date
    COUPNCD: () => void;

    // Returns the number of coupons payable between the settlement date and maturity date
    COUPNUM: () => void;

    // Returns the previous coupon date before the settlement date
    COUPPCD: () => void;

    // Returns the cumulative interest paid between two periods
    CUMIPMT: () => void;

    // Returns the cumulative principal paid on a loan between two periods
    CUMPRINC: () => void;

    // Returns the depreciation of an asset for a specified period by using the fixed-declining balance method
    DB: () => void;

    // Returns the depreciation of an asset for a specified period by using the double-declining balance method or some other method that you specify
    DDB: () => void;

    // Returns the discount rate for a security
    DISC: () => void;

    // Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number
    DOLLARDE: () => void;

    // Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction
    DOLLARFR: () => void;

    // Returns the annual duration of a security with periodic interest payments
    DURATION: () => void;

    // Returns the effective annual interest rate
    EFFECT: () => void;

    // Returns the future value of an investment
    FV: () => void;

    // Returns the future value of an initial principal after applying a series of compound interest rates
    FVSCHEDULE: () => void;

    // Returns the interest rate for a fully invested security
    INTRATE: () => void;

    // Returns the interest payment for an investment for a given period
    IPMT: () => void;

    // Returns the internal rate of return for a series of cash flows
    IRR: () => void;

    // Calculates the interest paid during a specific period of an investment
    ISPMT: () => void;

    // Returns the Macauley modified duration for a security with an assumed par value of $100
    MDURATION: () => void;

    // Returns the internal rate of return where positive and negative cash flows are financed at different rates
    MIRR: () => void;

    // Returns the annual nominal interest rate
    NOMINAL: () => void;

    // Returns the number of periods for an investment
    NPER: () => void;

    // Returns the net present value of an investment based on a series of periodic cash flows and a discount rate
    NPV: () => void;

    // Returns the price per $100 face value of a security with an odd first period
    ODDFPRICE: () => void;

    // Returns the yield of a security with an odd first period
    ODDFYIELD: () => void;

    // Returns the price per $100 face value of a security with an odd last period
    ODDLPRICE: () => void;

    // Returns the yield of a security with an odd last period
    ODDLYIELD: () => void;

    // Returns the number of periods required by an investment to reach a specified value
    PDURATION: () => void;

    // Returns the periodic payment for an annuity
    PMT: () => void;

    // Returns the payment on the principal for an investment for a given period
    PPMT: () => void;

    // Returns the price per $100 face value of a security that pays periodic interest
    PRICE: () => void;

    // Returns the price per $100 face value of a discounted security
    PRICEDISC: () => void;

    // Returns the price per $100 face value of a security that pays interest at maturity
    PRICEMAT: () => void;

    // Returns the present value of an investment
    PV: () => void;

    // Returns the interest rate per period of an annuity
    RATE: () => void;

    // Returns the amount received at maturity for a fully invested security
    RECEIVED: () => void;

    // Returns an equivalent interest rate for the growth of an investment
    RRI: () => void;

    // Returns the straight-line depreciation of an asset for one period
    SLN: () => void;

    // Returns the sum-of-years' digits depreciation of an asset for a specified period
    SYD: () => void;

    // Returns the bond-equivalent yield for a Treasury bill
    TBILLEQ: () => void;

    // Returns the price per $100 face value for a Treasury bill
    TBILLPRICE: () => void;

    // Returns the yield for a Treasury bill
    TBILLYIELD: () => void;

    // Returns the depreciation of an asset for a specified or partial period by using a declining balance method
    VDB: () => void;

    // Returns the internal rate of return for a schedule of cash flows that is not necessarily periodic
    XIRR: () => void;

    // Returns the net present value for a schedule of cash flows that is not necessarily periodic
    XNPV: () => void;

    // Returns the yield on a security that pays periodic interest
    YIELD: () => void;

    // Returns the annual yield for a discounted security; for example, a Treasury bill
    YIELDDISC: () => void;

    // Returns the annual yield of a security that pays interest at maturity
    YIELDMAT: () => void;

    // Returns information about the formatting, location, or contents of a cell
    CELL: () => void;

    // Returns a number corresponding to an error type
    ERROR_TYPE: () => void;

    // Returns information about the current operating environment
    INFO: () => void;

    // Returns TRUE if the value is blank
    ISBLANK: () => void;

    // Returns TRUE if the value is any error value except #N/A
    ISERR: () => void;

    // Returns TRUE if the value is any error value
    ISERROR: () => void;

    // Returns TRUE if the number is even
    ISEVEN: () => void;

    // Returns TRUE if there is a reference to a cell that contains a formula
    ISFORMULA: () => void;

    // Returns TRUE if the value is a logical value
    ISLOGICAL: () => void;

    // Returns TRUE if the value is the #N/A error value
    ISNA: () => void;

    // Returns TRUE if the value is not text
    ISNONTEXT: () => void;

    // Returns TRUE if the value is a number
    ISNUMBER: () => void;

    // Returns TRUE if the number is odd
    ISODD: () => void;

    // Returns TRUE if the value is a reference
    ISREF: () => void;

    // Returns TRUE if the value is text
    ISTEXT: () => void;

    // Returns a value converted to a number
    N: () => void;

    // Returns the error value #N/A
    NA: () => void;

    // Returns the sheet number of the referenced sheet
    SHEET: () => void;

    // Returns the number of sheets in a reference
    SHEETS: () => void;

    // Returns a number indicating the data type of a value
    TYPE: () => void;

    // Returns TRUE if all of its arguments are TRUE
    AND: () => void;

    // Returns the logical value FALSE
    FALSE: () => void;

    // Specifies a logical test to perform
    IF: () => void;

    // Returns a value you specify if a formula evaluates to an error; otherwise, returns the result of the formula
    IFERROR: () => void;

    // Returns the value you specify if the expression resolves to #N/A, otherwise returns the result of the expression
    IFNA: () => void;

    // Checks whether one or more conditions are met and returns a value that corresponds to the first TRUE condition.
    IFS: () => void;

    // Reverses the logic of its argument
    NOT: () => void;

    // Returns TRUE if any argument is TRUE
    OR: () => void;

    // Evaluates an expression against a list of values and returns the result corresponding to the first matching value. If there is no match, an optional default value may be returned.
    SWITCH: () => void;

    // Returns the logical value TRUE
    TRUE: () => void;

    // Returns a logical exclusive OR of all arguments
    XOR: () => void;

    // Returns a reference as text to a single cell in a worksheet
    ADDRESS: () => void;

    // Returns the number of areas in a reference
    AREAS: () => void;

    // Chooses a value from a list of values
    CHOOSE: () => void;

    // Returns the column number of a reference
    COLUMN: () => void;

    // Returns the number of columns in a reference
    COLUMNS: () => void;

    // Returns the formula at the given reference as text
    FORMULATEXT: () => void;

    // Returns data stored in a PivotTable report
    GETPIVOTDATA: () => void;

    // Looks in the top row of an array and returns the value of the indicated cell
    HLOOKUP: () => void;

    // Creates a shortcut or jump that opens a document stored on a network server, an intranet, or the Internet
    HYPERLINK: () => void;

    // Uses an index to choose a value from a reference or array
    INDEX: () => void;

    // Returns a reference indicated by a text value
    INDIRECT: () => void;

    // Looks up values in a vector or array
    LOOKUP: () => void;

    // Looks up values in a reference or array
    MATCH: () => void;

    // Returns a reference offset from a given reference
    OFFSET: () => void;

    // Returns the row number of a reference
    ROW: () => void;

    // Returns the number of rows in a reference
    ROWS: () => void;

    // Retrieves real-time data from a program that supports COM automation
    RTD: () => void;

    // Returns the transpose of an array
    TRANSPOSE: () => void;

    // Looks in the first column of an array and moves across the row to return the value of a cell
    VLOOKUP: () => void;

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
    SUM: () => number;

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

    // Returns the average of the absolute deviations of data points from their mean
    AVEDEV: () => void;

    // Returns the average of its arguments
    AVERAGE: () => void;

    // Returns the average of its arguments, including numbers, text, and logical values
    AVERAGEA: () => void;

    // Returns the average (arithmetic mean) of all the cells in a range that meet a given criteria
    AVERAGEIF: () => void;

    // Returns the average (arithmetic mean) of all cells that meet multiple criteria
    AVERAGEIFS: () => void;

    // Returns the beta cumulative distribution function
    BETA_DIST: () => void;

    // Returns the inverse of the cumulative distribution function for a specified beta distribution
    BETA_INV: () => void;

    // Returns the individual term binomial distribution probability
    BINOM_DIST: () => void;

    // Returns the probability of a trial result using a binomial distribution
    BINOM_DIST_RANGE: () => void;

    // Returns the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value
    BINOM_INV: () => void;

    // Returns the cumulative beta probability density function
    CHISQ_DIST: () => void;

    // Returns the one-tailed probability of the chi-squared distribution
    CHISQ_DIST_RT: () => void;

    // Returns the cumulative beta probability density function
    CHISQ_INV: () => void;

    // Returns the inverse of the one-tailed probability of the chi-squared distribution
    CHISQ_INV_RT: () => void;

    // Returns the test for independence
    CHISQ_TEST: () => void;

    // Returns the confidence interval for a population mean
    CONFIDENCE_NORM: () => void;

    // Returns the confidence interval for a population mean, using a Student's t distribution
    CONFIDENCE_T: () => void;

    // Returns the correlation coefficient between two data sets
    CORREL: () => void;

    // Counts how many numbers are in the list of arguments
    COUNT: () => void;

    // Counts how many values are in the list of arguments
    COUNTA: () => void;

    // Counts the number of blank cells within a range
    COUNTBLANK: () => void;

    // Counts the number of cells within a range that meet the given criteria
    COUNTIF: () => void;

    // Counts the number of cells within a range that meet multiple criteria
    COUNTIFS: () => void;

    // Returns covariance, the average of the products of paired deviations
    COVARIANCE_P: () => void;

    // Returns the sample covariance, the average of the products deviations for each data point pair in two data sets
    COVARIANCE_S: () => void;

    // Returns the sum of squares of deviations
    DEVSQ: () => void;

    // Returns the exponential distribution
    EXPON_DIST: () => void;

    // Returns the F probability distribution
    F_DIST: () => void;

    // Returns the F probability distribution
    F_DIST_RT: () => void;

    // Returns the inverse of the F probability distribution
    F_INV: () => void;

    // Returns the inverse of the F probability distribution
    F_INV_RT: () => void;

    // Returns the result of an F-test
    F_TEST: () => void;

    // Returns the Fisher transformation
    FISHER: () => void;

    // Returns the inverse of the Fisher transformation
    FISHERINV: () => void;

    // Returns a value along a linear trend
    // FORECAST: () => void;

    // Returns a frequency distribution as a vertical array
    FREQUENCY: () => void;

    // Returns the Gamma function value
    GAMMA: () => void;

    // Returns the gamma distribution
    GAMMA_DIST: () => void;

    // Returns the inverse of the gamma cumulative distribution
    GAMMA_INV: () => void;

    // Returns the natural logarithm of the gamma function, Γ(x)
    GAMMALN: () => void;

    // Returns the natural logarithm of the gamma function, Γ(x)
    GAMMALN_PRECISE: () => void;

    // Returns 0.5 less than the standard normal cumulative distribution
    GAUSS: () => void;

    // Returns the geometric mean
    GEOMEAN: () => void;

    // Returns values along an exponential trend
    GROWTH: () => void;

    // Returns the harmonic mean
    HARMEAN: () => void;

    // Returns the hypergeometric distribution
    HYPGEOM_DIST: () => void;

    // Returns the intercept of the linear regression line
    INTERCEPT: () => void;

    // Returns the kurtosis of a data set
    KURT: () => void;

    // Returns the k-th largest value in a data set
    LARGE: () => void;

    // Returns the parameters of a linear trend
    LINEST: () => void;

    // Returns the parameters of an exponential trend
    LOGEST: () => void;

    // Returns the cumulative lognormal distribution
    LOGNORM_DIST: () => void;

    // Returns the inverse of the lognormal cumulative distribution
    LOGNORM_INV: () => void;

    // Returns the maximum value in a list of arguments
    MAX: () => void;

    // Returns the maximum value in a list of arguments, including numbers, text, and logical values
    MAXA: () => void;

    // Returns the maximum value among cells specified by a given set of conditions or criteria
    MAXIFS: () => void;

    // Returns the median of the given numbers
    MEDIAN: () => void;

    // Returns the minimum value in a list of arguments
    MIN: () => void;

    // Returns the smallest value in a list of arguments, including numbers, text, and logical values
    MINA: () => void;

    // Returns the minimum value among cells specified by a given set of conditions or criteria.
    MINIFS: () => void;

    // Returns a vertical array of the most frequently occurring, or repetitive values in an array or range of data
    MODE_MULT: () => void;

    // Returns the most common value in a data set
    MODE_SNGL: () => void;

    // Returns the negative binomial distribution
    NEGBINOM_DIST: () => void;

    // Returns the normal cumulative distribution
    NORM_DIST: () => void;

    // Returns the inverse of the normal cumulative distribution
    NORM_INV: () => void;

    // Returns the standard normal cumulative distribution
    NORM_S_DIST: () => void;

    // Returns the inverse of the standard normal cumulative distribution
    NORM_S_INV: () => void;

    // Returns the Pearson product moment correlation coefficient
    PEARSON: () => void;

    // Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive
    PERCENTILE_EXC: () => void;

    // Returns the k-th percentile of values in a range
    PERCENTILE_INC: () => void;

    // Returns the rank of a value in a data set as a percentage (0..1, exclusive) of the data set
    PERCENTRANK_EXC: () => void;

    // Returns the percentage rank of a value in a data set
    PERCENTRANK_INC: () => void;

    // Returns the number of permutations for a given number of objects
    PERMUT: () => void;

    // Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects
    PERMUTATIONA: () => void;

    // Returns the value of the density function for a standard normal distribution
    PHI: () => void;

    // Returns the Poisson distribution
    POISSON_DIST: () => void;

    // Returns the probability that values in a range are between two limits
    PROB: () => void;

    // Returns the quartile of the data set, based on percentile values from 0..1, exclusive
    QUARTILE_EXC: () => void;

    // Returns the quartile of a data set
    QUARTILE_INC: () => void;

    // Returns the rank of a number in a list of numbers
    RANK_AVG: () => void;

    // Returns the rank of a number in a list of numbers
    RANK_EQ: () => void;

    // Returns the square of the Pearson product moment correlation coefficient
    RSQ: () => void;

    // Returns the skewness of a distribution
    SKEW: () => void;

    // Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean
    SKEW_P: () => void;

    // Returns the slope of the linear regression line
    SLOPE: () => void;

    // Returns the k-th smallest value in a data set
    SMALL: () => void;

    // Returns a normalized value
    STANDARDIZE: () => void;

    // Calculates standard deviation based on the entire population
    STDEV_P: () => void;

    // Estimates standard deviation based on a sample
    STDEV_S: () => void;

    // Estimates standard deviation based on a sample, including numbers, text, and logical values
    STDEVA: () => void;

    // Calculates standard deviation based on the entire population, including numbers, text, and logical values
    STDEVPA: () => void;

    // Returns the standard error of the predicted y-value for each x in the regression
    STEYX: () => void;

    // Returns the Percentage Points (probability) for the Student t-distribution
    T_DIST: () => void;

    // Returns the Percentage Points (probability) for the Student t-distribution
    T_DIST_2T: () => void;

    // Returns the Student's t-distribution
    T_DIST_RT: () => void;

    // Returns the t-value of the Student's t-distribution as a function of the probability and the degrees of freedom
    T_INV: () => void;

    // Returns the inverse of the Student's t-distribution
    T_INV_2T: () => void;

    // Returns the probability associated with a Student's t-test
    T_TEST: () => void;

    // Returns values along a linear trend
    TREND: () => void;

    // Returns the mean of the interior of a data set
    TRIMMEAN: () => void;

    // Calculates variance based on the entire population
    VAR_P: () => void;

    // Estimates variance based on a sample
    VAR_S: () => void;

    // Estimates variance based on a sample, including numbers, text, and logical values
    VARA: () => void;

    // Calculates variance based on the entire population, including numbers, text, and logical values
    VARPA: () => void;

    // Returns the Weibull distribution
    WEIBULL_DIST: () => void;

    // Returns the one-tailed probability-value of a z-test
    Z_TEST: () => void;

    // Changes full-width (double-byte) English letters or katakana within a character string to half-width (single-byte) characters
    ASC: () => void;

    // Converts a number to text, using the ß (baht) currency format
    BAHTTEXT: () => void;

    // Returns the character specified by the code number
    CHAR: () => void;

    // Removes all nonprintable characters from text
    CLEAN: () => void;

    // Returns a numeric code for the first character in a text string
    CODE: () => void;

    // Combines the text from multiple ranges and/or strings, but it doesn't provide the delimiter or IgnoreEmpty arguments.
    CONCAT: () => void;

    // Joins several text items into one text item
    // CONCATENATE: () => void;

    // Changes half-width (single-byte) English letters or katakana within a character string to full-width (double-byte) characters
    DBCS: () => void;

    // Converts a number to text, using the $ (dollar) currency format
    DOLLAR: () => void;

    // Checks to see if two text values are identical
    EXACT: () => void;

    // Formats a number as text with a fixed number of decimals
    FIXED: () => void;

    // Converts text to lowercase
    LOWER: () => void;

    // Converts text to number in a locale-independent manner
    NUMBERVALUE: () => void;

    // Extracts the phonetic (furigana) characters from a text string
    PHONETIC: () => void;

    // Capitalizes the first letter in each word of a text value
    PROPER: () => void;

    // Repeats text a given number of times
    REPT: () => void;

    // Substitutes new text for old text in a text string
    SUBSTITUTE: () => void;

    // Converts its arguments to text
    T: () => void;

    // Formats a number and converts it to text
    TEXT: () => void;

    // Combines the text from multiple ranges and/or strings, and includes a delimiter you specify between each text value that will be combined. If the delimiter is an empty text string, this function will effectively concatenate the ranges.
    TEXTJOIN: () => void;

    // Removes spaces from text
    TRIM: () => void;

    // Returns the Unicode character that is references by the given numeric value
    UNICHAR: () => void;

    // Returns the number (code point) that corresponds to the first character of the text
    UNICODE: () => void;

    // Converts text to uppercase
    UPPER: () => void;

    // Converts a text argument to a number
    VALUE: () => void;

    // Calls a procedure in a dynamic link library or code resource
    CALL: () => void;

    // Converts a number to euros, converts a number from euros to a euro member currency, or converts a number from one euro member currency to another by using the euro as an intermediary (triangulation)
    EUROCONVERT: () => void;

    // Returns the register ID of the specified dynamic link library (DLL) or code resource that has been previously registered
    REGISTER_ID: () => void;

    // Connects with an external data source and runs a query from a worksheet, then returns the result as an array without the need for macro programming
    SQL_REQUEST: () => void;

    // Returns a URL-encoded string
    ENCODEURL: () => void;

    // Returns specific data from the XML content by using the specified XPath
    FILTERXML: () => void;

    // Returns data from a web service
    WEBSERVICE: () => void;
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
             if (name !== "constructor") {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}

applyMixins(Formula, [
    Compatibility,
    Cube,
    Database,
    Datetime,
    Engineering,
    Financial,
    Information,
    Logical,
    Lookup,
    Math,
    Statistical,
    Text,
    Web
]);

