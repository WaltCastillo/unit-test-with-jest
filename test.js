// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test('One Euro should be 1.206', () => {

    const dollars = fromEuroToDollar(10);

    const expected = 10 * 1.206;

    expect(expected).toBeCloseTo(dollars);
});

test('One Dollar should be 106.157', () => {
    const yen = fromDollarToYen(10);

    const expected = 10 * 106.157;

    expect(expected).toBe(yen);
});

test('One Yen should be 0.00624', () => {
    const pound = fromYenToPound(10);

    const expected = 10 * 0.00624;

    expect(expected).toBeCloseTo(pound);
});