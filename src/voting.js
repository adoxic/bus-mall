import movingData from './data/collect-push-data.js';

movingData.removeArrayDataByKey('clicked-this-round');
movingData.removeArrayDataByKey('shown-last');
movingData.removeObjectDataByKey('shown-this-round');
movingData.pullFromProducts();
let productList = movingData.get('product-list');

const left = document.getElementById('left');
const mid = document.getElementById('mid');
const right = document.getElementById('right');

const leftButton = document.getElementById('left-button');
const midButton = document.getElementById('mid-button');
const rightButton = document.getElementById('right-button');
const buttons = document.getElementById('options');
const displayResult = document.getElementById('display-results');
const displayShown = document.getElementById('display-shown');
const showAllResults = document.getElementById('show');

let threeObjArray = movingData.randomProducts(3);

function displayArray(threeObjArray) {
    const firstObject = threeObjArray[0];
    const secondObject = threeObjArray[1];
    const thirdObject = threeObjArray[2];

    left.src = firstObject.image;
    mid.src = secondObject.image;
    right.src = thirdObject.image;

    leftButton.value = firstObject.id;
    midButton.value = secondObject.id;
    rightButton.value = thirdObject.id;

} 

displayArray(threeObjArray);


getDataOnClick(leftButton);
getDataOnClick(midButton);
getDataOnClick(rightButton);


function getDataOnClick(button) {
    let numOfRounds = 0;
    let newList = [];
    
    button.addEventListener('click', () => {
        
        movingData.addToClickedList(button.value, 'clicked-list');
        movingData.addToClickedList(button.value, 'clicked-this-round');
        movingData.addToShownLast(leftButton.value, midButton.value, rightButton.value);
        
        const shownLastArray = movingData.get('shown-last');
        movingData.addToShownList(shownLastArray, 'all-time-shown');
        movingData.addToShownList(shownLastArray, 'shown-this-round');
        
        numOfRounds++;

        const shownIds = shownLastArray.map(i => i.id);
        console.log(shownIds);
        
        newList = productList.filter(item => {
            if(!shownIds.includes(item.id)) {
                return newList;
            }
        });
        console.log(newList);

        if(numOfRounds === 25) {
            buttons.classList.add('hide');
            showAllResults.classList.remove('hide');

            const clickedList = movingData.get('clicked-this-round');

            for(let i = 0; i < clickedList.length; i++) {

                const clickedObject = clickedList[i];
                const li = document.createElement('li');
                li.textContent = clickedObject.id + ' : ' + clickedObject.quantity;
                displayResult.appendChild(li);
            }

            const shownList = movingData.get('shown-this-round');
            const arrayifiedKeys = Object.keys(shownList);
            const arrayifiedValues = Object.values(shownList);
            for(let i = 0; i < arrayifiedValues.length; i++) {
                
                const key = arrayifiedKeys[i];
                let value = +arrayifiedValues[i];
                value += 1;
                const li = document.createElement('li');
                li.textContent = key + ' : ' + value;
                displayShown.appendChild(li);
            }
            
        }    
        
        threeObjArray = movingData.randomProductsByArray(newList);

        displayArray(threeObjArray);
    }); 
}


   
