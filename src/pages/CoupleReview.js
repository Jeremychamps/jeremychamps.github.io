import React, {useState} from 'react';
import RandomCouple from './RandomCouple';
import "./CoupleReview.css"

const CoupleReview = () => {
    const [index,setIndex] = useState(0);
    const {src} = RandomCouple [index]

    const checkNumber = (number) => {
      if(number > RandomCouple.length -1){
        return 0
      }
      if (number <0){
        return RandomCouple.length -1
      }
      return number;  
    }

    const prevBtn = () => {
       setIndex((index)=>{
        let newIndex= index- 1;
        return checkNumber(newIndex);
       }); 
    };

    const nextBtn = () => {
        setIndex((index)=>{
         let newIndex= index+ 1;
         return checkNumber(newIndex);
        }); 
     };
     const random = () =>{
        let randomNumber = Math.floor (Math.random()*RandomCouple.length);
        if(randomNumber === index){
            randomNumber=index+1
        }
        setIndex(checkNumber(randomNumber));
     }
    return (
    <div>
    <div className='img-container'>
        <div>
        <img src={src} className="CoupleCard"/>
        </div>
        </div>
        <div>
        <button className='prev-btn' onClick={prevBtn}>Carte précédente</button>
        <button className='random-btn' onClick={random}>Carte au hasard</button>
        <button className='next-btn' onClick={nextBtn}>Carte suivante</button>
        </div>
    </div>
    )
};

export default CoupleReview;