import React from 'react';

const Weather = ({weather}) => {
    const getTime = (times) =>{
        let time = new Date(times);
        let hours = time.getHours();
        let minute = time.getMinutes();
        if (minute < 10){
            minute = `0${minute}`
        }
        if (hours < 10){
            hours = `0${hours}`
        }
        return `${hours} : ${minute}`
    };

    return (
        <div>
            <p className='weather__time'>{getTime(weather.dt * 1000)}</p>
            <p className='weather__city'>{weather.name}</p>
            <div className='weather__top'>
                <p className='weather__descr'>{weather.weather.map(el =>{
                    return el.description
                })}</p>
                <p className='weather__speed'>{weather.wind.speed} м/c</p>
            </div>



            <div className='weather__grad'>
                <p className='weather__temp'>{Math.round(weather.main.temp - 273.15)} °C</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather"/>
            </div>




            <p className='weather__sunrise'>Рассвет : {getTime(weather.sys.sunrise * 1000)}
                <img src="https://image.flaticon.com/icons/png/512/116/116262.png" alt=""/>
            </p>
            <p className='weather__sunset'>Закат : {getTime(weather.sys.sunset * 1000)}
                <img src="https://image.flaticon.com/icons/png/512/116/116262.png" alt=""/>
            </p>
        </div>
    );
};

export default Weather;