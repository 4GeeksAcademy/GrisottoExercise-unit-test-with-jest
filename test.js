// Import the functions from app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test for fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // Use the function like it's supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // Expected value
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(dollars).toBeCloseTo(expected); // Handle floating-point precision
});

// Test for fromDollarToYen
test("One dollar should be equivalent to the correct yen value", function() {
    // Use the function like it's supposed to be used
    const yen = fromDollarToYen(5); // 5 dollars to yen

    // Conversion formula
    const expected = (5 / 1.07) * 156.5;

    // This is the comparison for the unit test
    expect(yen).toBeCloseTo(expected); // Handle floating-point precision
});

// Test for fromYenToPound
test("One yen should be equivalent to the correct pound value", function() {
    // Use the function like it's supposed to be used
    const pounds = fromYenToPound(156.5); // 156.5 yen to pounds

    // Conversion formula
    const expected = (156.5 / 156.5) * 0.87;

    // This is the comparison for the unit test
    expect(pounds).toBeCloseTo(expected); // Handle floating-point precision
});
