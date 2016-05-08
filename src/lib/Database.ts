export class Database {
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
}