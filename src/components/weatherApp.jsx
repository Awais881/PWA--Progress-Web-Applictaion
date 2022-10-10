import { useState, useEffect  } from "react";
import axios from "axios";
import './weatherApp.css';

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
     <nav className="nav-bar"><h1> Weather App</h1></nav>
      <div className="form-div">
        
      <form onSubmit={submitHandler} className="form">
               
                <input type="text" placeholder="Enter your city name" required className="city"
                    onChange={(e) => { setCity(e.target.value) }} /> <br />

                <button type="submit">Submit </button>
            </form>
         </div>
         {(weatherData === null) ? null :
         <div  >
            <div className="today"> {Math.round(weatherData?.main?.temp)}°C</div>
                <div className="flex">
                   <div className="left">
                <div>  min: {Math.round(weatherData?.main?.temp_min)}°C <br /></div>  
                <div>  max: {Math.round(weatherData?.main?.temp_max)}°C <br /></div>  
                    </div>
                    <div className="right">
                    <div> Feels Like: {Math.round(weatherData?.main?.feels_like)}°C <br /></div>  
                    <div>   Humidity: {Math.round(weatherData?.main?.humidity)}°C <br /></div>  

                    </div>
                    </div>  
         </div>
     

         }
         </>
     );
 }
 





export default WeatherApp;