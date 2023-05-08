import React, { useEffect, useState } from "react";

import { MDBPopover, MDBPopoverBody, 
  MDBPopoverHeader } from "mdb-react-ui-kit";
import './Calendar.css';
import Cal_Tab1 from './Cal_Tab1.js';
import Cal_Tab2 from './Cal_Tab2.js';
import Cal_Tab3 from './Cal_Tab3.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
function Calendar() {
  var caltab="";
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  var caltab='Група 3';
  if(value=='Cal_Tab1')
  {
    caltab="Група 2"
  }
  else if(value=='Cal_Tab2')
  {
    caltab="Група 1"
  }
  else if(value=='Cal_Tab3')
  {
    caltab="Група 3"
  }


  return (
    <>
    <div id='calendar' class='calendarmain'>
      <h1 style={{textAlign:'center', color:'white', fontWeight:'800'}}>Календар</h1>
    <nav id='bcknav'class="navbar navbar-expand-lg navbar-light bg-light">
  <div  class="container-fluid">
    

    <div class="collapse navbar-collapse" id="navbarLeftAlignExample" >
    <Dropdown>
        <Dropdown.Toggle className='select_cal' variant="success" id="dropdown-basic">
          2023
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="">2023</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className='select_cal' variant="success" id="dropdown-basic">
          ФОП
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="">ФОП</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    <Dropdown>
        <Dropdown.Toggle className='select_cal' variant="success" id="dropdown-basic">
          Без найманих працівників
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="">Без найманих працівників</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    <Dropdown  onSelect={handleSelect}>
        <Dropdown.Toggle className='select_cal' variant="success" id="dropdown-basic">
          {caltab}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Cal_Tab2">Група 1</Dropdown.Item>
          <Dropdown.Item eventKey="Cal_Tab1">Група 2</Dropdown.Item>
          <Dropdown.Item eventKey="Cal_Tab3">Група 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
</nav>

<Tab value={value} />



<div style={{marginLeft:'16%', marginTop:'40px'}}>
  <span id='circle1'></span>
  <span style={{marginLeft:'8px',fontSize:'14px'}} className='select_cal'>Податкова декларація</span>
  <span id='circle2'></span>
  <span style={{marginLeft:'8px',fontSize:'14px'}} className='select_cal'>Сплата ЄП</span>
  <span id='circle3'></span>
  <span style={{marginLeft:'8px',fontSize:'14px'}} className='select_cal'>Сплата ЄСВ</span>


</div>
   
    </div>
    
    </>
  );
}
function Tab({value}) {
  
  if (value.toString() == 'Cal_Tab2') {
    return <Cal_Tab1/>;
  }else if (value.toString()=='Cal_Tab1') {
    return <Cal_Tab2/>;
  }else {
    return <Cal_Tab3/>;
  }

  
}

export default Calendar;
