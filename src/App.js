import React from 'react'
import Header from './Components/Header/Header'
import Launch from './Components/Launch/Launch'
import './style.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Launch
        imageUrl="https://farm2.staticflickr.com/1633/25788014884_6a3f9ae183_o.jpg"
        name="Falcon 9"
        launchDate="2016-03-04T23:35:00.000Z"
        description="Engine failure at 33 seconds and loss of vehicle.
        Engine failure at 33 seconds and loss of vehicle.
        Engine failure at 33 seconds and loss of vehicle.
        Engine failure at 33 seconds and loss of vehicle.
        Engine failure at 33 seconds and loss of vehicle."
      />
      <Launch
        imageUrl="https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png"
        name="Trailblazer"
        launchDate="2008-08-03T03:34:00.000Z"
        description="Residual stage 1 thrust led to collision between stage 1 and stage 2"
      />
    </div>
  );
}


// GitHub token
// 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

export default App;
