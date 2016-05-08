export class Datetime {
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
}