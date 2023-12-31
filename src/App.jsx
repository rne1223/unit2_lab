import './App.css'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyUpgrade = (upgradeMultiplier, upgradeCost) => { 
    if(count >= upgradeCost){
      setMultiplier(multiplier * upgradeMultiplier);
      setCount(count - upgradeCost);
    }
   };
  // const buyDoubleStuffed = () => {
  //   if (count >= 10) {
  //     setMultiplier(multiplier * 2);
  //     setCount(count - 10);
  //   }
  // };
  // const buyPartyPack = () => {
  //   if (count >= 100) {
  //     setMultiplier(multiplier * 5);
  //     setCount(count - 100);
  //   }
  // };

  // const buyFullFeast= () => {
  //   if (count >= 1000) {
  //     setMultiplier(multiplier * 10);
  //     setCount(count - 1000);
  //   }
  // };

  return (
    <div className="App">

      <div>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <h2>Count: {multiplier}</h2>
        <img className="samosa" src="samosa.png" alt="" onClick={updateCount} />
      </div>

      <div className="container">
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          {/* <button onClick={buyDoubleStuffed}>10 samosas</button> */}
          <button onClick={() => { buyUpgrade(2,10) }}>10 samosas</button>
        </div>

        <div className='upgrade'>
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          {/* <button onClick={buyPartyPack}>100 samosas</button> */}
          <button onClick={() => { buyUpgrade(5,100) }}>100 samosas</button>
        </div>

        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          {/* <button onClick={buyFullFeast}>1000 samosas</button> */}
          <button onClick={() => { buyUpgrade(10,100) }}>1000 samosas</button>
        </div>
      </div>
    </div>
  );
}

export default App
