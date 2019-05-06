
function fizzBuzz(value1) {
    if (value1 % 3 === 0 && value1 % 5 === 0){
        return "FizzBuzz"
    }
    else if (value1 % 5 ===  0){
        return "Buzz";
    }
    else if (value1 % 3 === 0) {
        return "Fizz";
    }
    else 
    {
        return value1;
    }
}

module.exports = fizzBuzz;