arr = [1,2,[3,[4,[5,6]]],[7,8,[9,10]]];

const flat = (arr, depth= Infinity ,arr2 = []) =>{
    arr.forEach(e => {
        typeof e === 'object' && depth ? flat(e, depth-1 ,arr2) : arr2.push(e)
    });
    return arr2
};
console.log(flat( arr, 1 ));
console.log(flat( arr, 2 ));
console.log(flat( arr, 3 ));
console.log(flat( arr, 4 ));
console.log(flat( arr, 5 ));
console.log(flat(arr));