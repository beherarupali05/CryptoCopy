import React ,{useState}from 'react';
import './Borrow.css';
import { useNavigate } from 'react-router-dom';

const Borrow = () => {
 const navigate= useNavigate()
 
const [name, setName] = useState('')
  const handleClick=(r)=>{
   console.log(r.target.dataset.id);
     setName(r.target.dataset.id);
  }
  const HandleChange = () => {
    navigate ('/ecs')
  }


  return (
    <div className='container' >
      <div className='borrow' >
        <h1 className='p-5' id='borrowHeading'>How Much Would You Like to Borrow ?</h1>
        <div className='borrowText mt-5'  >
          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='Under $500' style={name ==='Under $500'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >Under $500</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='$500 - $1,500' style={name ==='$500 - $1,500'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >$500 - $1,500</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='$15,01- $3,000' style={name ==='$15,01- $3,000'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >$15,01- $3,000</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='$3,001-$5,000' style={name ==='$3,001-$5,000'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >$3,001-$5,000</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='$5,001-$7,500' style={name ==='$5,001-$7,500'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >$5,001-$7,500</p>

          <p className='Text'  onClick={(e)=>handleClick(e)} data-id ='$7,501-$15,000' style={name ==='$7,501-$15,000'? {backgroundColor:"skyblue",borderColor:"blue"} : {backgroundColor:"white",borderColor:"whitesmoke"}} >$7,501-$15,000</p>
          
        </div>
        <div className='btn-div'>
        <button className='btn m-5' onClick={HandleChange} > Continue</button>
      </div>

      </div>
    </div>
  )
}

export default Borrow;