import React from 'react';
import './RcvIncome.css';
import { useNavigate } from 'react-router-dom';


function RcvIncome() {
  const navigate = useNavigate()



  const HandleChange = () => {
    navigate ('/home')
  }
 
  return (
    <div className='container' >
       <div  className='RcvIncome-container' >
      <h1  className='p-5' id='RcvHeading' >How Long Have You Been<br></br> Receiving This Income ?</h1>

      <div  id='RcvInput' >
      <input   id='RcvIncomeInput'  type='text'  placeholder='years' ></input><br></br>
      <input     className='mt-3' id='RcvIncomeInput'  type='text'  placeholder='month' ></input>
      </div>

      <div className='btn-div'>
        <button  onClick={HandleChange}  className='btn m-5'  > Continue</button>
      </div>
    </div>
    </div>
  )
}

export default RcvIncome;