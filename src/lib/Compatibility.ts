export class Compatibility {
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
}