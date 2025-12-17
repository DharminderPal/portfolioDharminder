import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Profile from '../Profile/Profile'

const App= ()=>{
  return(
<div>
<Navbar/>
<Profile/>
</div>

  )
}


export default App



