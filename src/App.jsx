import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Profile from '../Profile/Profile'
import './index.css'
const App= ()=>{
  return(
<div>
  <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
<Navbar/>
<Profile/>

</div>

  )
}


export default App




