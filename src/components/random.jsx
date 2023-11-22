import './random.css'
import { useState } from 'react'
import RealMadrid from '../assets/images/realmadrid.jpg'
import Barcelona from '../assets/images/barcelona.png'
import Bavarya from '../assets/images/bavarya.jpg'
import Arsenal from '../assets/images/arsenal.jpg'
import Yuventus from '../assets/images/yuventus.jpg'
import BvB from '../assets/images/bvb.jpg'
import United from '../assets/images/united.jpg'
import City from '../assets/images/city.png'
import Psj from '../assets/images/psj.png'
import Liverpul from '../assets/images/liverpul.webp'


function getRandomImage() {
    const imageUrls = [
        RealMadrid,
        Barcelona,
        Liverpul,
        Arsenal,
        Bavarya,
        City,
        United,
        Yuventus,
        BvB,
        Psj,
    ];
  
    
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
  
    
    const image = document.createElement('img');
    image.src = imageUrls[randomIndex];
  
    document.body.appendChild(image);
  }
  
  
  getRandomImage();



const Random = () => {
    return(
        <div>

        

        <div className="container">
            
        <button className='btn' onClick={getRandomImage}>Generator</button>
        </div>                


        </div>


    )


}


export default Random