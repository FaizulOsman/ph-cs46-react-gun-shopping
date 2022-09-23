import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import AllGun from './AllGun/AllGun';

function App() {
  const [count, setCount] = useState(0)

  const updataCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun updataCount={updataCount}></AllGun>
    </div>
  );
}




export default App;
