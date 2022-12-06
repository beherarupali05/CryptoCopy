import React from 'react';
import './Taxes.css';
import { useNavigate } from 'react-router-dom';

function Taxes() {
  const navigate = useNavigate()


  const HandleChange = () => {
    navigate ('/rcvIncome')
  }
  return (
    <div className='container' >
    <div  className='tax-container' >
      <h1  className='p-5' id='TaxHeading' >What Is Your Monthly Income ? <br></br> Before Taxes & Deductions</h1>

      <div  id='TaxInput' >
       <h6>Round to Nearest Dollar</h6>
      <input   className='taxInput'  type='text'  placeholder='$ Monthly Income' ></input>
      </div>

      <div className='btn-div'>
        <button   onClick={HandleChange} className='btn m-5' > Continue</button>
      </div>
    </div>
    </div>
  )
}

export default Taxes;