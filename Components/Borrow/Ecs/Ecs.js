import React ,{useState}from 'react';

import { useNavigate } from 'react-router-dom';

const Ecs=()=>{
  const navigate= useNavigate()
  
  const [name, setName] = useState('')
  const handleClick=(r)=>{
   console.log(r.target.dataset.id);
     setName(r.target.dataset.id);
  }
  const HandleChange = () => {
    navigate ('/empStatus')
  }
  
  return (
    <div className='container' >
      <div className='borrow' >
       
        <h1   className='p-5'  id='borrowHeading'>What Is Your Estimated Credit Score ?</h1>
          
        <div className='borrowText mt-5'  >
          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Good (Over 650)' style={name ==='Good (Over 650)'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Good (Over 650)</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Fair(550-650)' style={name ==='Fair(550-650)'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Fair(550-650)</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Poor(Under 550)' style={name ==='Poor(Under 550)'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Poor(Under 550)</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Current Bankruptcy' style={name ==='Current Bankruptcy'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Current Bankruptcy</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='No Credit/Unsure' style={name ==='No Credit/Unsure'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >No Credit/Unsure</p>

          
        </div>
        <div className='btn-div'>
        <button className='btn m-5' onClick={HandleChange} > Continue</button>
      </div>
         
        </div>
       
       
    </div>
  )
}

export default Ecs;