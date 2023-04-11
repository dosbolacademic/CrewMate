import { useState } from 'react'

import './App.css'
import Crewmate from './Crewmate'

function App() {

  return (
    <div className="home-page">
      <h1>Welcome to the Crewmate Creator!</h1>
      <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
      <div className="images-container">
        <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075" className="welcome-images" width="400" height="250" />
        <img src="https://gamernetwork.bbvms.com/mediaclip/5106866/pthumbnail/640/default" className="welcome-images" width="400" height="250" />
      </div>
    </div>
  )
}

export default App
