export class Financial {
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
}