import React,{useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import './ReactPhone.css';

const ReactPhone = () => {
    const [value, setValue] = useState();

  return (
   <div>
     <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
   </div>
  )
  
}

export default ReactPhone;