


function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return 'invalid input, please input an array';
        
    }

    let newArray = [];

    for (let item of array) {
        
        if (typeof item === 'number' && !isNaN(item) ) {
           newArray.push(item) 
        }
        
    }
    
    return newArray;
    

}

let arr = deleteInvalids([1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}])
console.log(arr);
let arr1 = deleteInvalids(["1",{num:2},NaN])
console.log(arr1);
let arr2 = deleteInvalids([1,2,-3])
console.log(arr2);
let arr3 = deleteInvalids({num:[1,2,3]})
console.log(arr3);




