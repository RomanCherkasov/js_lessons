// function* generator() {
//     yield 'S';
//     yield 'C';
//     yield 'R';
//     yield 'I';
//     yield 'P';
//     yield 'T';
// }

// const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);
// console.log(str.next()); // Value undefined 

function* count(n) {
    for (let i = 0; i < n; i++){
        yield i;
    }
}

for (let value of count(10)) {
    console.log(value)
}
// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);