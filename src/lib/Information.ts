export class Information {
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
}