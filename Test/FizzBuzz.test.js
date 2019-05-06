const fizzBuzz = require('../functions/FizzBuzz')
test('If the number is divisible by 3, return "Fizz".', () => {
    
    expect(fizzBuzz(9)).toBe("Fizz");

    
})

test('If the number is divisible by 5, return "Buzz".', () => {
    expect(fizzBuzz(20)).toBe("Buzz");
    

})

test('If the number is not divisible by 3 and 5, return number.', () => {
    expect(fizzBuzz(11)).toBe(11);


})
test('If the number is divisible by 3 and 5, return "FizzBuzz".', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");


})
