import CoupleReview from "./CoupleReview";
import RandomCouple from "../pages/RandomCouple"
import React from 'react';
import "./Couple.css"
import Navbar from "../components/Navigation"
import { useState } from 'react';
class Couple extends React.Component
{
    render()
    {
        let Couple=[
            {src:'./imagesCouple/IMG01.jpg', title:'img01'},
            {src:'./imagesCouple/IMG2.jpg', title:'img2'},
            {src:'./imagesCouple/IMG3.jpg', title:'img3'},
            {src:'./imagesCouple/IMG4.jpg', title:'img4'},
            {src:'./imagesCouple/IMG5.jpg', title:'img5'},
            {src:'./imagesCouple/IMG6.jpg', title:'img6'},
            {src:'./imagesCouple/IMG7.jpg', title:'img7'},
            {src:'./imagesCouple/IMG8.jpg', title:'img8'},
            {src:'./imagesCouple/IMG9.jpg', title:'img9'},
            {src:'./imagesCouple/IMG10.jpg', title:'img10'},
            {src:'./imagesCouple/IMG11.jpg', title:'img11'},
            {src:'./imagesCouple/IMG12.jpg', title:'img12'},
            {src:'./imagesCouple/IMG13.jpg', title:'img13'},
            {src:'./imagesCouple/IMG14.jpg', title:'img14'},
            {src:'./imagesCouple/IMG15.jpg', title:'img15'},
            {src:'./imagesCouple/IMG16.jpg', title:'img16'},
            {src:'./imagesCouple/IMG17.jpg', title:'img17'},
            {src:'./imagesCouple/IMG18.jpg', title:'img18'},
            {src:'./imagesCouple/IMG19.jpg', title:'img19'},
            {src:'./imagesCouple/IMG20.jpg', title:'img20'},
            {src:'./imagesCouple/IMG21.jpg', title:'img21'},
            {src:'./imagesCouple/IMG22.jpg', title:'img22'},
            {src:'./imagesCouple/IMG23.jpg', title:'img23'},
            {src:'./imagesCouple/IMG24.jpg', title:'img24'},
            {src:'./imagesCouple/IMG25.jpg', title:'img25'},
            {src:'./imagesCouple/IMG26.jpg', title:'img26'},
        ];
        const shuffle = () => {
    let randomNumber = Math.floor(Math.random() * Couple.length);
            if (randomNumber === Couple){
                randomNumber = Couple + 1
            }
            console.log(randomNumber);
            
}
        

        
            return (
                <div>
                    <div>
                    <Navbar />
                    </div>
                    <div>
                    <CoupleReview />
                    </div>
                </div>
                
            );
                }
                }
            
export default Couple;
