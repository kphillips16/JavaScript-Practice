// see e16.md

export function find(array, callback) {
    for(let element of array) {
        console.log(callback(element))
        if(callback(element)) {
            return element;
        }
    }
}

console.log(find(
    [
      { v: false, id: 1 },
      { v: true, id: 2 },
      { v: true, id: 3 },
    ],
    (el) => el.v
  ));