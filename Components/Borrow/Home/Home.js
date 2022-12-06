import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()

    const HandleChange = () => {
        navigate ('/dob')
      }
      
  return (
<div className='container' >
    <div  className='Home-container' >
      <h1  className='p-5' id='HomeHeading' >What Is Your Home Address ?</h1>

      <div  id='HomeInput' >
      <input   className='HomeInput'  type='text'  placeholder='My Home Address' ></input>
      </div>

      <div className='btn-div'>
        <button   onClick={HandleChange} className='btn m-5' > Continue</button>
      </div>
    </div>
    </div>
  )
}

export default Home;