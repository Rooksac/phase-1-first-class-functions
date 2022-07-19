const receivesAFunction = function(cb) {
    cb();
}

const returnsANamedFunction = function() {
    return function returnsANamedFunction(){}
}

const returnsAnAnonymousFunction = function() {
    return function() {};
}