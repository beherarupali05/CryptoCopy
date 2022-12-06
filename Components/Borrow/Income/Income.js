import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Income=()=>{
  const navigate= useNavigate()

  const [name, setName] = useState('')
  const handleClick=(r)=>{
   console.log(r.target.dataset.id);
     setName(r.target.dataset.id);
  }
  const HandleChange = () => {
    navigate ('/tax')
  }



  return (
    <div className='container' >
      <div className='borrow' >
       
        <h1   className='p-5'  id='borrowHeading'>Income Details <br></br>Please Select One :</h1>
        <div className='borrowText mt-5'  >
          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='I Know My Annual Salary' style={name ==='I Know My Annual Salary'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >I Know My Annual Salary</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='I Know My Hourly Wage' style={name ==='I Know My Hourly Wage'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >I Know My Hourly Wage</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='I Know My Monthly Income' style={name ==='I Know My Monthly Income'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >I Know My Monthly Income</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Other' style={name ==='Other'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Other</p>

         
          
        </div>
        <div className='btn-div'>
        <button className='btn m-5' onClick={HandleChange} > Continue</button>
      </div>
        </div>
       
        
    </div>
  )
}

export default Income;