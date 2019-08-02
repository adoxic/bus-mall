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
    makeClickedList(key) {
        let clickedList = movingData.get(key);
        if(!clickedList) {
            clickedList = [];
        }
        return clickedList;
    },
    addToClickedList(clickValue, key) {
        const clickedList = movingData.makeClickedList(key);
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
        movingData.save(key, clickedList);
    },
    makeShownList(key) {
        let clickedList = movingData.get(key);
       
        if(!clickedList) {
            clickedList = {};
        }
        return clickedList;
    },
    addToShownList(array, key) {
        const shownList = movingData.makeShownList(key);

        for(let i = 0; i < array.length; i++) {
            let shownObject = array[i];

            if(shownList[shownObject.id] === 'undefined') {

                shownList[shownObject.id] = 1;
                shownList[shownObject.id]++;
            } else {
                shownList[shownObject.id]++;

            }
        }
        movingData.save(key, shownList);
        
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
    removeArrayDataByKey(key) {
        let pulledData = movingData.get(key);
        pulledData = [];
        movingData.save(key, pulledData);
    },
    removeObjectDataByKey(key) {
        let pulledData = movingData.get(key);
        pulledData = {};
        movingData.save(key, pulledData);
    },
};

export default movingData;