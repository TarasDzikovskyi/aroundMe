import React, {useEffect, useState} from "react";
import './element.scss';
import route from '../../img/route1.png';
import axios from 'axios';
import img1 from '../../icons/01d.png';
import img2 from '../../icons/02d.png';
import img3 from '../../icons/03d.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Element({object}) {
    const API_KEY = '3ef12399a56cd611dbec689c805b935e';
    const lat = '44.34';
    const lon = '10.99';
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getWeather = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            // console.log(res);
            setTemp((res.data.main.temp - 273,15).toFixed(1));


            const weather_icon = res.data.weather[0].icon;
            setIcon(weather_icon);

            setLoading(false);
        };

        getWeather()
    },[]);

    return (
        <div className='element'>

            <div className="wrapper">
                <div className="container">
                    <div className="title">
                        <h1>Yosemite valley</h1>
                        <p>Sentinel Dome</p>
                    </div>

                    <div className="route">

                        <p>Bettmerhorn <br/> <span>Canada</span></p>

                        <img src={route} alt="" height={300} width={360}/>

                        <div className='info'>
                            {loading ? (<div>Loading...</div>) : (
                                <div className="weather">
                                    {temp}
                                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" height={80}/>
                                </div>
                            )}

                            <p>Yosemite Valley</p>
                            <span>Sentinel Dome</span> <br/>

                            <div className="time">2d 12h 42min</div>
                        </div>

                    </div>
                </div>

                <div className="footer">
                    <div className="btn">
                        <button>Reserve Tour</button>
                    </div>
                    <div className="box">
                        <h3>Mission</h3>
                        <p>Bring inspiration and innovation to every in the world</p>
                    </div>
                    <div className="box">
                        <h3>Vision</h3>
                        <p>We create experiences & services for people that love travel</p>
                    </div>
                </div>

                <div className="icons">
                    <div>
                        <TelegramIcon className="icon"/>
                    </div>
                    <div>
                        <InstagramIcon className="icon"/>
                    </div>
                    <div>
                        <TwitterIcon className="icon"/>
                    </div>
                </div>

                <div className="c">© Copyright 2023, aroundMe</div>

            </div>
        </div>
    )
}