
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



