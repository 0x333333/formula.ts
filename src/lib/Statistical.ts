export class Statistical {
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
}