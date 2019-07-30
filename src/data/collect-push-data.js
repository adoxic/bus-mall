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
};

export default movingData;