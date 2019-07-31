import emotions from './emotions.js';

const movingData = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        movingData.storage.setItem(key, json);
    },
    get(key) {
        const json = movingData.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    pullFromProducts() {
        let returnedProducts = movingData.get('emotions-list');
        if(!returnedProducts) {
            movingData.save('emotions-list', emotions);
            returnedProducts = emotions;
        }
        return returnedProducts;
    },
    makeClickedList() {
        let clickedList = movingData.get('clicked-list');
        if(!clickedList) {
            clickedList = [];
        }
        return clickedList;
    },
    addToClickedList(clickValue) {
        const clickedList = movingData.makeClickedList();
        let clickedObject = movingData.getObject(clickedList, clickValue);
        
        if(clickedObject) {
            clickedObject.quantity++;
        } else {
            clickedObject = {
                id: clickValue,
                quantity: 1
            };

            clickedList.push(clickedObject);
        }
        movingData.save('clicked-list', clickedList);
    },
    makeShownList() {
        let clickedList = movingData.get('all-shown-list');
       
        if(!clickedList) {
            clickedList = {};
        }
        return clickedList;
    },
    addToShownList(array) {
        const shownList = movingData.makeShownList();

        for(let i = 0; i < array.length; i++) {
            let shownObject = array[i];

            if(shownList[shownObject.id] === 'undefined') {

                shownList[shownObject.id] = 1;
                shownList[shownObject.id]++;
            } else {
                shownList[shownObject.id]++;

            }
        }
        movingData.save('all-shown-list', shownList);
        
    },
    addToShownLast(button1, button2, button3) {
        movingData.save('shown-last', [{ id: button1, quantity: 1 }, { id: button2, quantity: 1 }, { id: button3, quantity: 1 }]);
    },
    getObject(array, id) {
        for(let i = 0; i < array.length; i++) {
            const returnedObject = array[i];
            if(returnedObject.id === id) {
                return returnedObject;
            }
        }
        return null;
    },
};

export default movingData;