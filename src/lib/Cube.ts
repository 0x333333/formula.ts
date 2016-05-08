export class Cube {
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
}