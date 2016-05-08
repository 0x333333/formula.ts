export class Text {
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
}