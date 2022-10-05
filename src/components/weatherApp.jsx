import { useState, useEffect  } from "react";
import axios from "axios";


function WeatherApp (){


    const [city, setCity] = useState([]);
    const [weatherData, setWeatherData] = useState(null)
    
    
    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I am click handler")
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
            .then(response => {
                console.log("response: ", response.data);

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }

   return(
   <>
     <nav className="navbar"> Weather App</nav>
      <div className="form-div">
        
      <form onSubmit={submitHandler}>
               
                <input type="text" placeholder="enter your city name" required
                    onChange={(e) => { setCity(e.target.value) }} /> <br />

                <button type="submit">get weather</button>
            </form>
         </div>
         {(weatherData === null) ? null :
         <div>
             {Math.round(weatherData?.main?.temp)}°C
                    
                    min: {Math.round(weatherData?.main?.temp_min)}°C
                  
                    max: {Math.round(weatherData?.main?.temp_max)}°C
                    Feels Like: {Math.round(weatherData?.main?.feels_like)}°C
                    Humidity: {Math.round(weatherData?.main?.humidity)}°C
         
         </div>
     

         }
         </>
     );
 }
 





export default WeatherApp;