import movingData from './data/collect-push-data.js';

const clickedList = movingData.get('clicked-list');
const clickedListThis = movingData.get('clicked-this-round');

const ctx = document.getElementById('all-shown').getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const canvasClick = document.getElementById('all-clicked').getContext('2d');
canvasClick.canvas.width = window.innerWidth;
canvasClick.canvas.height = window.innerHeight;

const canvasThisShown = document.getElementById('this-shown').getContext('2d');
canvasThisShown.canvas.width = window.innerWidth;
canvasThisShown.canvas.height = window.innerHeight;

const canvasThisClicked = document.getElementById('this-clicked').getContext('2d');
canvasThisClicked.canvas.width = window.innerWidth;
canvasThisClicked.canvas.height = window.innerHeight;

const allTimeShown = movingData.get('all-time-shown');
const arrayifiedValues = Object.values(allTimeShown);
const arrayifiedKeys = Object.keys(allTimeShown);

const thisShown = movingData.get('shown-this-round');
const arrayifiedValuesThis = Object.values(thisShown);
const arrayifiedKeysThis = Object.keys(thisShown);

const idOnlyArray = [];
const quantityOnlyArray = [];
const idOnlyArrayThis = [];
const quantityOnlyArrayThis = [];

function extractValue(array, newArray) {
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        const value = element.id;
        newArray.push(value);
    }
}

function extractNumber(array, newArray) {
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        const value = element.quantity;
        newArray.push(value);
    }
}

extractValue(clickedList, idOnlyArray);
extractNumber(clickedList, quantityOnlyArray);

extractValue(clickedListThis, idOnlyArrayThis);
extractNumber(clickedListThis, quantityOnlyArrayThis);

// eslint-disable-next-line
const firstChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrayifiedKeys,
        datasets: [{
            label: 'All Time Views',
            data: arrayifiedValues,
            backgroundColor: [

            ],
            borderColor: [

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// eslint-disable-next-line
const secondChart = new Chart(canvasClick, {
    type: 'bar',
    data: {
        labels: idOnlyArray,
        datasets: [{
            label: 'All time Clicks',
            data: quantityOnlyArray,
            backgroundColor: [

            ],
            borderColor: [

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// eslint-disable-next-line
const thirdChart = new Chart(canvasThisShown, {
    type: 'bar',
    data: {
        labels: arrayifiedKeysThis,
        datasets: [{
            label: 'Shown last time',
            data: arrayifiedValuesThis,
            backgroundColor: [

            ],
            borderColor: [

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// eslint-disable-next-line
const fourthChart = new Chart(canvasThisClicked, {
    type: 'bar',
    data: {
        labels: idOnlyArrayThis,
        datasets: [{
            label: 'Clicked last time',
            data: quantityOnlyArrayThis,
            backgroundColor: [

            ],
            borderColor: [

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});