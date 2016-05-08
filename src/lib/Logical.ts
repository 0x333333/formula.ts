export class Logical {
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
}