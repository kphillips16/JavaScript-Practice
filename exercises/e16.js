// see e16.md

export function find(array, callback) {
    let arr = [];
    for(let element of array) {
        console.log(callback(element))
        if(callback(element)) {
            arr.push(element);
        }
    }
    return arr[0];
}

console.log(find(
    [
      { v: false, id: 1 },
      { v: true, id: 2 },
      { v: true, id: 3 },
    ],
    (el) => el.v
  ));