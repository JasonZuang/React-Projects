import React from 'react';

const List = (props) => {
  console.log(props);
  const people = props.people;
  return (
    <>
      {people.map((person)=> {
        const {id,name,age,image} = person;
        return(
          <div className="person" key={id}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <p>Age: {age}</p>
          </div>
        );
      })

      }
    </>
  );
};

export default List;
