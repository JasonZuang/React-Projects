import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const tours = props.tours;
  const removeTour = props.removeTour;
  console.log(tours)
  return (
    <main>
      <div className="title">
        <h2> Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour)=>{
          return(
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          )
        })
      }
      </div>
    </main>
  )
};

export default Tours;
