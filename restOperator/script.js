const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'b some', 'operator', 'usage');

function calcOrDouble(number, basis=2){
    console.log(number * basis);
}

calcOrDouble(3);