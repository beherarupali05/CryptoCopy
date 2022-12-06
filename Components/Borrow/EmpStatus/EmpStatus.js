import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const EmpStatus=()=>{
  const navigate= useNavigate()

  const [name, setName] = useState('')
  const handleClick=(r)=>{
   console.log(r.target.dataset.id);
     setName(r.target.dataset.id);
  }
  const HandleChange = () => {
    navigate ('/income')
  }

  return (
    <div className='container' >
      <div className='borrow' >
       
        <h1   className='p-5'  id='borrowHeading'>What Is Your Employement Status ?</h1>
        <div className='borrowText mt-5'  >
          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Employeed' style={name ==='Employeed'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Employeed</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Temporary Layoff' style={name ==='Temporary Layoff'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Temporary Layoff</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Employeement Insurance' style={name ==='Employeement Insurance'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Employeement Insurance</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Unemployeement' style={name ==='Unemployeement'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Unemployeement</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Self-Employeed' style={name ==='Self-Employeed'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Self-Employeed</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Retired/Pension' style={name ==='Retired/Pension'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Retired/Pension</p>
          
          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Other' style={name ==='Other'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Other</p>
        </div>
        
        <div className='btn-div'>
        <button className='btn m-5' onClick={HandleChange} > Continue</button>
      </div>
         
        </div>
    </div>
  )
}

export default EmpStatus;