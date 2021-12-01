import React, {useState, useEffect, cloneElement} from "react";
import Card, { CardImage } from "./card";

import devanture1 from '../images/Devanture_2.jpg';
import devanture2 from '../images/Devanture_1.jpg';
import interieur from '../images/Interieur.jpg';

function Diapo ( {alt, size}) {

    const backgroundImages=[devanture1, devanture2, interieur];
    const [imageId, setImageId] = useState(0);
    const [timerCount, setTimerCount] = useState(0);
    const [cardImages, setCardImages] = useState(() => {
      return(
        backgroundImages.map((value) => <CardImage key={value} classNames="is-hidden" src={value} alt={alt} size={size}/>)
      )
    });
    const takenTime = 6000;

    useEffect(() => {
        const timer = window.setInterval(() => {
          setTimerCount(prevTimerCount => prevTimerCount + 1); 
        }, takenTime);
  
        return () => {
          window.clearInterval(timer);
        };
      }, []);
  
      useEffect(() => {
        setImageId(timerCount % backgroundImages.length);
      }, [backgroundImages, timerCount]);

      useEffect(() => {
        setCardImages((prevCardImages) => prevCardImages.map((value, index) => {
          if (index===imageId) {
            return(cloneElement(value, { classNames: "" }));
          }
            return(cloneElement(value, { classNames:"is-hidden" }));
          
        }))
      }, [imageId])
    return(
    <div className="container">
        <Card height="">
          {cardImages}
        </Card>
    </div>
    );
  }

export default Diapo;