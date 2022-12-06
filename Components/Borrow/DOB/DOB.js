import React from 'react';
import './DOB.css';
import { useNavigate } from 'react-router-dom';


function DOB() {
    const navigate = useNavigate()

    const HandleChange = () => {
        navigate ('/reach')
      }
  return (
    <div className='container' >
    <div  className='DOB-container' >
      <h1  className='p-5' id='DOBHeading' >What Is Your Date Of Birth ?</h1>

      <div  id='DOBInput' >
      <input   className='DOBInput'  type='text'  placeholder=' MM / DD / YYYY' ></input>
      </div>

      <div className='btn-div'>
        <button   onClick={HandleChange} className='btn m-5' > Continue</button>
      </div>
    </div>
    </div>
  )
}

export default DOB;