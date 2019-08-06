import products from './products.js';

const PRODUCT_LIST = 'product-list';
const SHOWN_LAST = 'shown-last';

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
        let returnedProducts = movingData.get(PRODUCT_LIST);
        if(!returnedProducts) {
            movingData.save(PRODUCT_LIST, products);
            returnedProducts = products;
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
        movingData.save(SHOWN_LAST, [{ id: button1, quantity: 1 }, { id: button2, quantity: 1 }, { id: button3, quantity: 1 }]);
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
    randomWholeNum(num) {
        return Math.floor(Math.random() * num);
    },
    randomProducts(numOfProducts) {

        let pulledCards = [];
        movingData.pullFromProducts();

        const productArray = movingData.get(PRODUCT_LIST);
        const productCopy = productArray.slice();

        for(let i = 0; i < numOfProducts; i++) {
            let num = 19;
            num--;
            const randomNumber = movingData.randomWholeNum(num);
           
            const productObject = productCopy[randomNumber];
            productCopy.splice(randomNumber, 1);
            
          
            pulledCards.push(productObject);
            
    
        }
        return pulledCards;
    },
    randomProductsByArray(array) {

        let pulledProducts = [];

        const productCopy = array.slice();

        for(let i = 0; i < 3; i++) {
            let num = 16;
            num--;
            const randomNumber = movingData.randomWholeNum(num);
           
            const productObject = productCopy[randomNumber];
            productCopy.splice(randomNumber, 1);
            
          
            pulledProducts.push(productObject);
            
    
        }
        return pulledProducts;
    }
};

export default movingData;