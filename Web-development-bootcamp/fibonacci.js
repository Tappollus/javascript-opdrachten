function fibonacciGenerator (n) {
    var output = [0, 1];

    if (n === 0) {
        return output.pop[1, 2];
    }
    else if (n === 1) {
        return output[0];
    }
    else if (n === 2) {
        return output;
    }
    else {
        while (output.length < n){
            var addNumber = output[output.length-1] + output[output.length-2];
            output.push(addNumber);
        }
    return output;
    }
}