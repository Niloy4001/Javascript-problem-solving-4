

function checkName(name) {

    if (typeof name !== 'string') {
        return 'invalid'
    }

    let nameOfSon = name.toLowerCase().split('');

    if (nameOfSon[nameOfSon.length - 1] === 'a' || nameOfSon[nameOfSon.length - 1] === 'e' || nameOfSon[nameOfSon.length - 1] === 'i' || nameOfSon[nameOfSon.length - 1] === 'o' || nameOfSon[nameOfSon.length - 1] === 'u' || nameOfSon[nameOfSon.length - 1] === 'y' || nameOfSon[nameOfSon.length - 1] === 'w') {

        return 'Good Name';

    }
    else {
        return 'Bad Name';

    }
}

let nickName = checkName(["rashed"]);

console.log(nickName);
