import React, { useEffect, useState } from "react";

import { MDBPopover, MDBPopoverBody, 
  MDBPopoverHeader } from "mdb-react-ui-kit";
import './Calendar.css';

export default function Cal_Tab1() {
return(
<div class="caltab2">
<div class='redpart' style={{height:'60px', width:'1100px', marginLeft:'14%', marginRight:'12%'}}>
<div className='cal_lines'>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'65.06%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'72%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'58.15%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'51.22%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'44.26%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'37.4%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'30.45%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'23.54%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'16.58%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'9.66%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'2.77%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'-4.15%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'-11.1%'}} class="vl"></div>
</div>

  <MDBPopover size='sm' id='esv' style={{width:'110px',marginLeft:'40px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Податкова декларація за 2025 рік</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <p style={{fontWeight:'600'}}>Здати до 09.02.2023</p>
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>

        
</div>
<div style={{height:'60px',width:'1100px', marginLeft:'14%', marginRight:'12%'}}>
<div className='cal_lines'>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'65.06%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'72%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'58.15%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'51.22%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'44.26%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'37.4%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'30.45%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'23.54%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'16.58%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'9.66%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'2.77%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'-4.15%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'-11.1%'}} class="vl"></div>
</div>

  <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'39px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'22px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за IV квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>21.02.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>

        <MDBPopover size='sm' id='esv2' style={{width:'80px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за I квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>19.05.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'110px',marginLeft:'21px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за II квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>18.08.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv2' style={{width:'150px',marginLeft:'21.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Сплата ЄП за III квартал 2022 року</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <h2 style={{color:'purple', fontSize:'19px', fontWeight:'bold'}}>5% від доходу</h2>
              <p style={{fontWeight:'500'}}>Сплатити до <p style={{fontWeight:'600'}}>17.11.2023</p></p>
              
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
</div>
<div id="thrdopt" style={{height:'60px',width:'1100px', marginLeft:'14%', marginRight:'12%'}}>
<div className='cal_lines'>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'65.06%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'72%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'58.15%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'51.22%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'44.26%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'37.4%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'30.45%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'23.54%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'16.58%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'9.66%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'2.77%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'-4.15%'}} class="vl"></div>
<div style={{height:'60px', borderRight:'2px solid black', position:'absolute', right:'-11.1%'}} class="vl"></div>
</div>

  <MDBPopover size='sm' id='esv3' style={{width:'110px',marginLeft:'40px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <p style={{fontWeight:'600'}}>Здати до 09.02.2023</p>
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>

        <MDBPopover size='sm' id='esv3' style={{width:'110px',marginLeft:'199px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <p style={{fontWeight:'600'}}>Здати до 09.02.2023</p>
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv3' style={{width:'110px',marginLeft:'199px'}} placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <p style={{fontWeight:'600'}}>Здати до 09.02.2023</p>
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
        <MDBPopover size='sm' id='esv3' style={{width:'110px',marginLeft:'199.5px'}}  placement='right' 
            btnChildren=''>
            <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
            <MDBPopoverBody>
              <p style={{fontWeight:'600'}}>Здати до 09.02.2023</p>
                Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
        </MDBPopover>
</div>
<div id='mnths'><span class='mnth'>Січень</span>
<span style={{marginLeft:'30px'}} class='mnth'>Лютий</span>
<span style={{marginLeft:'30px'}} class='mnth'>Березень</span>
<span style={{marginLeft:'22px'}} class='mnth'>Квітень</span>
<span style={{marginLeft:'30px'}} class='mnth'>Травень</span>
<span style={{marginLeft:'25px'}} class='mnth'>Червень</span>
<span style={{marginLeft:'26px'}} class='mnth'>Липень</span>
<span style={{marginLeft:'30px'}} class='mnth'>Серпень</span>
<span style={{marginLeft:'21px'}} class='mnth'>Вересень</span>
<span style={{marginLeft:'19px'}} class='mnth'>Жовтень</span>
<span style={{marginLeft:'17px'}} class='mnth'>Листопад</span>
<span style={{marginLeft:'24px'}} class='mnth'>Грудень</span>



</div>
</div>
)
}