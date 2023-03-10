export function minBy(array, cb) {
    let obj;
    let num;
    for(let element of array) {
        if(cb(element) < num || !num) {
            obj = element;
            num = cb(element);
        }
    }
    return obj;
}

console.log(minBy(
    [
    { name: "jon", age: 29 },
    { name: "peter", age: 30 },
    { name: "andrey", age: 22 },
  ],
  (person) => person.age));

export function maxBy(array, cb) {
    let obj;
    let num;
    for(let element of array) {
        if(cb(element) > num || !num) {
            obj = element;
            num = cb(element);
        }
    }
    return obj;
}

console.log(maxBy(
    [
    { name: "jon", age: 29 },
    { name: "peter", age: 30 },
    { name: "andrey", age: 22 },
  ],
  (person) => person.age));
