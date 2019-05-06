const isLeapYear = require('../functions/LeapYear')


test('If the year provided is a leap yaer, retun true', () => {

    expect(isLeapYear(2016)).toBe(true);


})

test('If the year provided is a leap yaer, retun true', () => {

    expect(isLeapYear(1900)).toBe(false);


})