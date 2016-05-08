export class Lookup {
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
}