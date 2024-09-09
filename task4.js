

let obj = { name: "kolimuddin", birthYear: 1999, siteName: "google" }

function password(object) {

    if (Object.keys(object).length < 3 || object.birthYear.toString().length !== 4) {

        return 'invalid'

    }

    let site = object.siteName.slice(0, 1).toUpperCase() + object.siteName.slice(1);

    let result = site + '#' + object.name + '@' + object.birthYear;

    return result;




}

let makePassword = password(obj);
console.log(makePassword);









// let obj1 = {
//     name: "yuyuyu",
//     birthYear: 199890,
//     siteName: "google"
// }
// console.log(obj1.birthYear.toString().length);