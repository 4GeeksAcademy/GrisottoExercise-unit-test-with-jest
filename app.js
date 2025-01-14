// Conversion rates (1 Euro to other currencies)
const oneEuroIs = {
    JPY: 156.5, // Japan Yen
    USD: 1.07,  // US Dollar
    GBP: 0.87   // British Pound
};

// Function to convert from Euro to Dollar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD; // Multiply by the USD conversion rate
};

// Function to convert from Dollar to Yen
const fromDollarToYen = function(valueInDollar) {
    const valueInEuro = valueInDollar / oneEuroIs.USD; // Convert dollars to euros
    return valueInEuro * oneEuroIs.JPY; // Convert euros to yen
};

// Function to convert from Yen to Pound
const fromYenToPound = function(valueInYen) {
    const valueInEuro = valueInYen / oneEuroIs.JPY; // Convert yen to euros
    return valueInEuro * oneEuroIs.GBP; // Convert euros to pounds
};

// Export all functions
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
