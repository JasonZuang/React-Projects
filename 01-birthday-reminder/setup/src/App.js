import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  const clearPeople = () => {
    setPeople([]);
  }
  return (
    <>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List people = {people}/>
        <button class="btn" onClick={()=> clearPeople()}>Clear All</button>
      </section>
    </>
  )
}

export default App;
