import React from 'react';
import './Reach.css';
import { useNavigate } from 'react-router-dom';
import ReactPhone from '../ReactPhone/ReactPhone';

function Reach() {
  const navigate = useNavigate()

  const HandleChange = () => {
    navigate('/')
  }
  return (
    <div className='container' >
      <div className='Reach-container' >
        <h1 className='p-5' id='ReachHeading' >How Can We Reach You?</h1>

        <div id='ReachInput' >
          <p className='Reach' >We Will Call You as soon as you complete your application or during<br></br> the next business day if completed outside of normal business hours.</p>
          <p  id='continue' >When you tap "Continue" , Spring Financial will send a text with a<br></br> verification code. message and data rates may apply.</p>
          {/* <input className='ReachInput mb-3' type='text' placeholder='Phone Number' ></input><br></br> */}
          <ReactPhone></ReactPhone>

          <input type="checkbox" value="Send me a Code by text message" />
          <label  className='Reach m-3' >Send me a Code by text message</label>   <br></br>

          <input type="checkbox" value="Call me with a code" />
          <label  className='Reach m-3' >Call me with a code</label>
        </div>

        <div className='btn-div'>
          <button onClick={HandleChange} className='btn m-5' > Continue</button>
        </div>
      </div>
    </div>
  )

}

export default Reach;