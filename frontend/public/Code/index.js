"use-strict"

const submitBtn = document.getElementById('submit-btn');
const inputTag = document.getElementById('input-tag');

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
const currDay = weekday[d.getDay()];
const currDate = new Date().toJSON().slice(0, 10);


const getValue =  async () => {
    let inputVal = inputTag.value;
    inputTag.value = "";

    if (inputVal === "") {
        document.getElementById('cityName').innerText = `Please enter correct data!`;
    }
    else {
        try {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=eb5c48b402df7abefa18cbe476cb9fd2`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            document.getElementById('cityName').innerText = arrData[0].name;
            document.getElementById('temp').innerText = `${arrData[0].main.temp}°C`;
        }
        catch{
            document.getElementById('cityName').innerText = `Please enter a correct city name.`;
            document.getElementById('temp').innerText = `0°C`;
        }

    }

    document.getElementById('day').innerText = currDay;
    document.getElementById('date').innerText = `Date:-${currDate}`;

}

submitBtn.addEventListener('click', getValue);
