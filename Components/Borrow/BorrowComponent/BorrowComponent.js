import React, { useState } from 'react';
import './BorrowComponent.css';
import Ecs from '../Ecs/Ecs';
import EmpStatus from '../EmpStatus/EmpStatus';
import Income from '../Income/Income';
import Borrow from '../Borrow/Borrow';
import { useNavigate } from 'react-router-dom';

function BorrowComponent() {
  const navigate = useNavigate();
  
  const [page, setpage] = useState(0);

 



  return (
    <div>
   <Borrow></Borrow>
      {/* <div>
        {page === 0 && <Borrow></Borrow>}
        {page === 1 && <Ecs></Ecs>}
        {page === 2 && <EmpStatus></EmpStatus>}
        {page === 3 && <Income></Income>}

      </div> */}

      
    </div>
  )
}

export default BorrowComponent;