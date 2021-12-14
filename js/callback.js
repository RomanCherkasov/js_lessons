'use strict';

function first(){
    setTimeout(function(){
        console.log(1);
    }, 1000);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    setTimeout(function(){}, 1000);
    callback();
}


learnJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});


learnJS('Python', done);

function done() {
    console.log('Я прошел этот урок');
}


function learnJSWoCallback(lang, callback) {
    setTimeout(function(){}, 1000);
    console.log(`Я учу: ${lang}`);
    callback();
}

done();
learnJSWoCallback('C++', done);
