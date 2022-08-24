
import './App.css';
import {useState} from "react"
import Cards from './Component/Cards';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Cards></Cards>
      </div>
      
    </div>
  );
}

export default App;
