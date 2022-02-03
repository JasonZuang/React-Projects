import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setIndex] = useState(0);
  let review = people[index];
  
  const goRight = () => {
   if(index === people.length -1){
     setIndex(0);
   }
   else{
     setIndex(index+1);
   }
  }
  const goLeft = () => {
    if(index === 0){
      setIndex(people.length - 1);
    }
    else{
      setIndex(index-1);
    }
  }
  const getRandom = () => {
    const index = Math.floor(Math.random()*people.length);
    setIndex(index);
  }
  return( 
  <main>
    <section className="review">
   
      <div className="container">
        <h4>{review.name}</h4>
        <h4>{review.job}</h4>
        <div className="img-container">
        <img src={review.image} alt="" className="person-img"/>
        </div>
        
        <p>{review.text}</p>
      </div>
    <button className="prev-btn" onClick={()=>{goLeft()}}> 
    <FaChevronLeft />
    </button>
    <button className='next-btn' onClick={()=>{goRight()}}>
    <FaChevronRight />
    </button>
    <button className="random-btn" onClick={()=>{getRandom()}}>Randomize!</button>
    </section>
  </main>
  )
};

export default Review;
