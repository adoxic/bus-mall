import { selectThreeObjects, replaceRepeats } from './emotion-generation.js';
import emotions from './data/emotions.js';
import movingData from './data/collect-push-data.js';

movingData.pullFromProducts();

const left = document.getElementById('left');
const mid = document.getElementById('mid');
const right = document.getElementById('right');

const leftButton = document.getElementById('left-button');
const midButton = document.getElementById('mid-button');
const rightButton = document.getElementById('right-button');

const threeObjArray = selectThreeObjects(emotions);
replaceRepeats(threeObjArray, emotions);


function displayArray(exampleArray) {
    const firstObject = exampleArray[0];
    const secondObject = exampleArray[1];
    const thirdObject = exampleArray[2];

    left.src = firstObject.image;
    mid.src = secondObject.image;
    right.src = thirdObject.image;

    leftButton.value = firstObject.id;
    midButton.value = secondObject.id;
    rightButton.value = thirdObject.id;

} 

displayArray(threeObjArray);
movingData.makeClickedList();

leftButton.addEventListener('click', () => {
    movingData.addToClickedList(leftButton.value);
    movingData.addToShownLast(leftButton.value, midButton.value, rightButton.value);
});

