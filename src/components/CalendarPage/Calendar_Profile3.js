import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from '../DashboardPage/Dashboard.js';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader
} from 'mdb-react-ui-kit';
import shapka from '../AfterAuthImgs/shapka.png';
import redline from '../prof_calendar_imgs/redline.png';
import purpleline from '../prof_calendar_imgs/purpleline.png';
import yellowline from '../prof_calendar_imgs/yellowline.png';
import calendarguy from '../prof_calendar_imgs/calendarguy.png';

import vecboy from '../AfterAuthImgs/vectorBoy.png';
import admin from '../AfterAuthImgs/admin.png';
import calendar from '../AfterAuthImgs/calendar.png';
import attachment from '../AfterAuthImgs/attachment.png';
import bell from '../AfterAuthImgs/bell.png';
import chat_exclamation from '../AfterAuthImgs/chat_exclamation.png';
import plus from '../AfterAuthImgs/plus.png';
import exit from '../AfterAuthImgs/exit.png';
import blueframe from '../AfterAuthImgs/blueframe.png';
import updProfDude from '../AfterAuthImgs/updateProfileDude.png';
import zsu from '../AfterAuthImgs/zsu.png';
import '../Calendar_Profile.css';
import Footer from '../Footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';








import { auth, db, logout } from "../../firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";


export default function Calendar_Profile3() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [fop_group, setFopGroup] = useState("");
  const [workers, setWorkers] = useState("");
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setFopGroup(data.fop_group);
      setName(data.name);
      setWorkers(data.workers);

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/home");
    fetchUserName();
  }, [user, loading]);

  const [verticalActive, setVerticalActive] = useState('tab5');

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <div class='faqdiv'>
      <div id='top_profile'>
        <div id='topgradient' style={{ width: '80%', height: '100%', paddingLeft: '50px', paddingTop: '20px' }}>
          <img style={{ width: '180px' }} src={shapka} />
          {/* <Dashboard/> */}

        </div>
      </div>
      <div id='innerDivProfile'>
        <MDBRow id='rw' style={{ width: '865px' }}>

          <MDBCol size='4'>
            <div className='left_side_blocks_container'>
              <MDBTabs style={{ marginTop: '20px', border: "none" }} className='flex-column text-center'>

                <MDBTabsItem>
                  <MDBTabsLink className='tabitm' >
                    <Link to='/user' className='tabitm_link'>
                      <img className='left_side_block_img' src={admin} />
                      Особистій кабінет
                    </Link>
                  </MDBTabsLink>

                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink className='tabitm'>
                    <Link to='/calendar' className='tabitm_link'>
                      <img style={{ height: '37px' }} className='left_side_block_img' src={calendar} />
                      Календар
                    </Link>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink className='tabitm'>
                    <Link to='/documents' className='tabitm_link'>
                      <img className='left_side_block_img' src={attachment} />
                      Документи
                    </Link>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink className='tabitm'>
                    <Link to='/news' className='tabitm_link'>
                      <img className='left_side_block_img' src={bell} />
                      Новини
                    </Link>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink className='tabitm'>
                    <Link to='/help' className='tabitm_link'>
                      <img className='left_side_block_img' src={chat_exclamation} />
                      Питання/Відповідь
                    </Link>
                  </MDBTabsLink>
                </MDBTabsItem>

                <div className="logout_divider"></div>

                <MDBTabsItem>

                  <Dashboard />

                  <MDBTabsLink onClick={logout} className='logout_button'>
                    <div className="logout_divider2"></div>
                    <img className="logout_button_img" src={exit} />
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </div>
          </MDBCol>


        </MDBRow>

        <div id='calprof'>
          <h1 style={{ fontWeight: '800', color: 'black', fontSize: '35px', width: '900px' }}>ПОДАТКОВИЙ КАЛЕНДАР        <span id='blckl'></span>
          </h1>
          <div class='calendar_profile'>
            <div class="calendar_nav">
              <nav id='bcknav1' class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">


                  <div class="collapse navbar-collapse" id="navbarLeftAlignExample" >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                      <select class="select">
                        <option value="1">2023</option>


                      </select>
                      <select class="select">
                        <option value="1">ФОП</option>
                      </select>
                      <select value={workers} class="select">
                        <option value="1">{workers}</option>
                      </select>

                      <select value={fop_group} class="select">
                        <option value="1">{fop_group}</option>
                      </select>



                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div class="_calendar">
              <div class='lines_red'>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '68.5%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '63.03%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '57.6%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '52.15%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '46.7%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '41.25%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '35.8%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '30.36%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '24.9%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '19.45%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '14.05%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '8.57%' }} class="ab"></div>
                <div style={{ height: '60px', borderRight: '2px solid black', position: 'absolute', right: '3.15%' }} class="ab"></div>
              </div>
              <MDBPopover size='sm' id='esv' style={{ width: '85px', marginLeft: '20px' }} placement='right'
                btnChildren=''>
                <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                <MDBPopoverBody>
                  <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                  Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
              </MDBPopover>

              <MDBPopover size='sm' id='esv' style={{ width: '85px', marginLeft: '109.5px' }} placement='right'
                btnChildren=''>
                <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                <MDBPopoverBody>
                  <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                  Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
              </MDBPopover>
              <MDBPopover size='sm' id='esv' style={{ width: '85px', marginLeft: '109.5px' }} placement='right'
                btnChildren=''>
                <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                <MDBPopoverBody>
                  <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                  Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
              </MDBPopover>
              <MDBPopover size='sm' id='esv' style={{ width: '85px', marginLeft: '109.5px' }} placement='right'
                btnChildren=''>
                <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                <MDBPopoverBody>
                  <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                  Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
              </MDBPopover>
              <div class='lines_red'>

                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '68.5%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '63.03%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '57.6%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '52.15%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '46.7%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '41.25%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '35.8%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '30.36%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '24.9%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '19.45%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '14.05%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '8.57%', marginTop: '17.5px' }} class="ab"></div>
                <div style={{ height: '54.5px', borderRight: '2px solid black', position: 'absolute', right: '3.15%', marginTop: '17.5px' }} class="ab"></div>
              </div>
              <div>
                <MDBPopover size='sm' id='esv2' style={{ width: '80px', marginLeft: '20px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>

                <MDBPopover size='sm' id='esv2' style={{ width: '110px', marginLeft: '95px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>
                <MDBPopover size='sm' id='esv2' style={{ width: '110px', marginLeft: '94px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>
                <MDBPopover size='sm' id='esv2' style={{ width: '110px', marginLeft: '95px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Сплата ЄП за III квартал 2022 року</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <h2 style={{ color: 'purple', fontSize: '19px', fontWeight: 'bold' }}>5% від доходу</h2>
                    <p style={{ fontWeight: '500' }}>Сплатити до <p style={{ fontWeight: '600' }}>17.11.2023</p></p>

                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>
              </div>
              <div class='lines_red'>

                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '68.5%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '63.03%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '57.6%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '52.15%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '46.7%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '41.25%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '35.8%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '30.36%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '24.9%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '19.45%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '14.05%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '8.57%', marginTop: '2px' }} class="ab"></div>
                <div style={{ height: '65px', borderRight: '2px solid black', position: 'absolute', right: '3.15%', marginTop: '2px' }} class="ab"></div>
              </div>
              <div>
                <MDBPopover size='sm' id='esv3' style={{ width: '70px', marginLeft: '20px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>

                <MDBPopover size='sm' id='esv3' style={{ width: '110px', marginLeft: '155px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>
                <MDBPopover size='sm' id='esv3' style={{ width: '110px', marginLeft: '154px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>
                <MDBPopover size='sm' id='esv3' style={{ width: '110px', marginLeft: '155px', marginTop: '20px' }} placement='right'
                  btnChildren=''>
                  <MDBPopoverHeader><b>Податкова декларація за 2022 рік</b></MDBPopoverHeader>
                  <MDBPopoverBody>
                    <p style={{ fontWeight: '600' }}>Здати до 09.02.2023</p>
                    Натисніть на подію, щоб побачити більше інформації</MDBPopoverBody>
                </MDBPopover>
              </div>
              <div id='mnths'><span style={{ marginLeft: '-92px' }} class='mnth1'>Січень</span>
                <span style={{ marginLeft: '27px' }} class='mnth1'>Лютий</span>
                <span style={{ marginLeft: '20px' }} class='mnth1'>Березень</span>
                <span style={{ marginLeft: '17px' }} class='mnth1'>Квітень</span>
                <span style={{ marginLeft: '22px' }} class='mnth1'>Травень</span>
                <span style={{ marginLeft: '19px' }} class='mnth1'>Червень</span>
                <span style={{ marginLeft: '20px' }} class='mnth1'>Липень</span>
                <span style={{ marginLeft: '19px' }} class='mnth1'>Серпень</span>
                <span style={{ marginLeft: '16px' }} class='mnth1'>Вересень</span>
                <span style={{ marginLeft: '15px' }} class='mnth1'>Жовтень</span>
                <span style={{ marginLeft: '13px' }} class='mnth1'>Листопад</span>
                <span style={{ marginLeft: '17px' }} class='mnth1'>Грудень</span>



              </div>
              <div style={{ marginLeft: '-9%', marginTop: '40px' }}>
                <span id='circle1'></span>
                <span style={{ marginLeft: '8px', fontSize: '14px' }} className='select_cal'>Податкова декларація</span>
                <span id='circle2'></span>
                <span style={{ marginLeft: '8px', fontSize: '14px' }} className='select_cal'>Сплата ЄП</span>
                <span id='circle3'></span>
                <span style={{ marginLeft: '8px', fontSize: '14px' }} className='select_cal'>Сплата ЄСВ</span>


              </div>

            </div>
            <div className='cal_info'>
              <img className="calendar_guy" src={calendarguy} />
              <div className='info_block1'><p class="info_cal_txt">Для підприємців на єдиному податку 3-ї групи звітний період складає календарний квартал
                (п. 294.1 ПКУ) і вони подають декларацію протягом 40-ка календарних днів, наступних за останнім календарним днем звітного року</p></div>
              <div className='info_block2'><p class="info_cal_txt">ЄП сплачуєте від доходу: 5% або 3% + ПДВ, раз на квартал звітуєте в податкову, ліміт доходу — 7 818 900 грн на рік. Якщо у вас 2%, то звітуєте щомісяця.</p></div>
              <div className='info_block3'><p class="info_cal_txt">Єдиний податок 3% або 5%; ЕСВ за себе; ПДВ, за умови що він зареєстрований як платник ПДВ.</p></div>
            </div>

          </div>


        </div>


      </div>



    </div>
  );
}