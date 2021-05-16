/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&units=metric&appid=352804011ad97b01a1d1f3290ca1a86e';

let zip = document.getElementById('zip');
let feelings = document.getElementById('feelings');

//function wtih promise

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault();
    const getZip = zip.value;
    getWeather(baseURL, getZip, apiKey)
        .then(function(newData) {
            postData('/myweather', {
                temp: newData.main.temp,
                feelings: feelings.value,
            });
        })
        .then(() => updateUI());
}

const getWeather = async(baseURL, getZip, apiKey) => {
    const keys = `${baseURL}${getZip}${apiKey}`;

    const response = await fetch(keys);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

//const postdata

const postData = async(url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

//Get data

const getData = async(url = '') => {
    const request = await fetch(url);
    try {
        const getData = await request.json();
    } catch (error) {
        console.log('The API is getting an error', error);
    }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;

const updateUI = async() => {
    const request = await fetch('/myweather');
    try {
        const lastEntry = await request.json();
        document.getElementById('date').innerHTML = lastEntry['date'];
        document.getElementById('temp').innerHTML = lastEntry['temp'];
        document.getElementById('content').innerHTML = lastEntry['feeling'];
    } catch (error) {
        console.log('error', error);
    }
};