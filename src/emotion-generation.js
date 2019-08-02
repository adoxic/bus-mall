
export default function randomNumber(num) {
    return Math.floor(Math.random() * num);
}


export function selectThreeObjects(array) {
    const threeArray = [];
    for(let i = 0; i < 3; i++) {
        let element = array[randomNumber(17)];
        threeArray.push(element);  
    }
    return threeArray;
}

export function selectNoRepeatThreeObjects(array) {
    const threeArray = [];
    for(let i = 0; i < 3; i++) {
        let element = array[randomNumber(14)];
        threeArray.push(element);  
    }
    return threeArray;
}

export function noRepeat(threeArray) {
    if(threeArray[1] === threeArray[2] || threeArray[0] === threeArray[1] || threeArray[2] === threeArray[0]) {
        return false;
    } else {
        return true;
    }
}

export function replaceRepeats(threeArray, array) {
    while(threeArray[0] === threeArray[1]) {
        let oneElement = array[randomNumber(17)];
        threeArray.splice(1, 1, oneElement);
    }
    while(threeArray[1] === threeArray[2]) {
        let twoElement = array[randomNumber(17)];
        threeArray.splice(2, 1, twoElement);
    }
    while(threeArray[0] === threeArray[2]) {
        let threeElement = array[randomNumber(17)];
        threeArray.splice(2, 1, threeElement);
    }
    return threeArray;
}

export function replaceRepeatsSmall(threeArray, array) {
    while(threeArray[0] === threeArray[1]) {
        let oneElement = array[randomNumber(14)];
        threeArray.splice(1, 1, oneElement);
    }
    while(threeArray[1] === threeArray[2]) {
        let twoElement = array[randomNumber(14)];
        threeArray.splice(2, 1, twoElement);
    }
    while(threeArray[0] === threeArray[2]) {
        let threeElement = array[randomNumber(14)];
        threeArray.splice(2, 1, threeElement);
    }
    return threeArray;
}