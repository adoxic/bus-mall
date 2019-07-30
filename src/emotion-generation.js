import emotions from './data/emotions.js';

export default function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

let negativeArray = [];
let neutralArray = [];
let positiveArray = [];

function sortArray(emotions) {
    for(let i = 0; i < emotions.length; i++) {
        const returnedObject = emotions[i];
        if(returnedObject.type === 'positive') {
            positiveArray.push(returnedObject);
        } else if(returnedObject.type === 'neutral') {
            neutralArray.push(returnedObject);
        } else if(returnedObject.type === 'negative') {
            negativeArray.push(returnedObject);
        }
    }
}
sortArray(emotions);

export function selectThreeObjects(array) {
    const threeArray = [];
    for(let i = 0; i < 3; i++) {
        let element = array[randomNumber(11)];
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

export function replaceRepeats(threeArray) {
    while(threeArray[0] === threeArray[1]) {
        let oneElement = threeArray[randomNumber(12)];
        threeArray.splice(1, 1, oneElement);
    }
    while(threeArray[1] === threeArray[2]) {
        let twoElement = threeArray[randomNumber(12)];
        threeArray.splice(2, 1, twoElement);
    }
    while(threeArray[0] === threeArray[2]) {
        let twoElement = threeArray[randomNumber(12)];
        threeArray.splice(2, 1, twoElement);
    }
}