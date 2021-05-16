/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&units=metric&appid=352804011ad97b01a1d1f3290ca1a86e';

let zip = document.getElementById('zip');
let feelings = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

//function wtih promise

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault();
    const getZip = zip.value;
    getWeatherData(baseURL, getZip, apiKey)
        .then(function(newData) {
            postData('/addWeather', {
                temp: newData.main.temp,
                feelings: feelings.value,
            });
        })
        .then(() => updateUI());
}

const getWeatherData = async(baseURL, getZip, apiKey) => {
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
    console.log(request);
    try {
        const allData = await request.json();
        console.log(allData);
    } catch (error) {
        console.log('The API is getting an error', error);
    }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;

const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        date.innerHTML = allData[0].date;
        // temp.innerHTML = `Temperature: ${getData.newEntry[getData.newEntry.length - 1].temp}`;
        // content.innerHTML = `How I'm feeling: ${getData.newEntry[agetData.newEntry.length - 1].feelings}`;
    } catch (error) {
        console.log('error', error);
    }
};