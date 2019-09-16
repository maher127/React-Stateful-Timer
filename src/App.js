import React from 'react';
import './App.css';
import Timer from './Timer';

const starterSeconds= 3000 //in milliseconds



function App() {
  return (
    <div className="App">
      <Timer starterSeconds={starterSeconds}/>
    </div>
  );
}

export default App;
