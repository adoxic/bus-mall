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
        const clickedObject = {
            code: clickValue,
            quantity: 1
        };
        clickedList.push(clickedObject);

        movingData.save('clicked-list', clickedList);
    },
    addToShownLast(button1, button2, button3) {
        movingData.save('all-shown-items', [button1, button2, button3]);
    },
};

export default movingData;