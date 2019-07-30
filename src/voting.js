import { selectThreeObjects, replaceRepeats } from './emotion-generation.js';
import emotions from './data/emotions.js';

//const left = document.getElementById('left');
//const mid = document.getElementById('mid');
//const right = document.getElementById('right');
//Work in progress is commented out 
const threeObjArray = selectThreeObjects(emotions);
replaceRepeats(threeObjArray);


/*function displayArray(exampleArray) {
    const firstObject = exampleArray[0];
    const secondObject = exampleArray[1];
    const thirdObject = exampleArray[2];
    left.textContent = firstObject.unicode;
    console.log(firstObject.unicode);
    mid.textContent = secondObject.unicode;
    right.textContent = thirdObject.unicode;

} work in progress */
