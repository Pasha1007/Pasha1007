import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader
} from 'mdb-react-ui-kit';
import shapka from '../AfterAuthImgs/shapka.png';
import news1 from '../NewsImgs/news1.png';
import news2_1 from '../NewsImgs/news2_1.png';
import news3_1 from '../NewsImgs/news3_1.png';
import news4_1 from '../NewsImgs/news4_1.png';
import news5_1 from '../NewsImgs/news5_1.png';

import news2_2 from '../NewsImgs/news2_2.png';
import news3_2 from '../NewsImgs/news3_2.png';
import news4_2 from '../NewsImgs/news4_2.png';
import news5_2 from '../NewsImgs/news5_2.png';

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
import Footer from '../Footer/Footer.js';
import './NewsCards.css';

import { Link, useNavigate } from "react-router-dom";
import Dashboard from '../DashboardPage/Dashboard.js';

import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function NewsCards() {
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

        <div id='newsprof'>
          <h1 style={{ fontWeight: '800', color: 'black', fontSize: '35px', width: '900px' }}>Новини        <span id='blckl'></span>
          </h1>
          <div id='upper_card'>
            <div id='left_side'>
              <div className='lft_dv'><p className='news1_txt' >Блог адвокатів про супровід бізнесу, податки, інвестиції суди та сімейне право.</p></div>
              <button id='btn_news'>Читати більше</button>
            </div>
            <div id='right_side'>
              <img className='news1_img' src={news1} />

            </div>

          </div>
          <div className='other_cards'>
            <div className='left_oth'>
              <div className='upper_left'>
                <img className='news2_1img' src={news2_1} />

              </div>
              <div className='bottom_left'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt'>30.12.2022</span>
                  <span id='ved_txt'>Ведення бізнесу</span>
                </div>
                <p className='txt_news'>Корпоративний договір</p>
                <span style={{ marginLeft: '20px' }} id='date_txt'>Read more</span>
              </div>
            </div>
            <div className='right_oth'>
              <div className='upper_right'>
                <img className='news2_2img' src={news2_2} />

              </div>
              <div className='bottom_right'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt1'>30.12.2022</span>


                </div>
                <div className='txtdiv'>
                  <p className='txt_news1'>Все що ви хотіли знати про інвойс</p>
                  <span style={{ marginLeft: '20px', marginTop: '-15px' }} id='date_txt1'>Read more</span>

                </div>
              </div>
            </div>
          </div>

          <div className='other_cards'>

            <div className='left_oth'>
              <div className='upper_left'>
                <img className='news2_1img' src={news3_1} />

              </div>
              <div className='bottom_left'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt'>30.12.2022</span>
                  <span id='ved_txt'>Ведення бізнесу</span>
                </div>
                <p className='txt_news'>Реєстрація ФОП-дизайнера</p>
                <span style={{ marginLeft: '20px' }} id='date_txt'>Read more</span>
              </div>
            </div>
            <div className='right_oth'>
              <div className='upper_right'>
                <img className='news2_2img' src={news3_2} />

              </div>
              <div className='bottom_right'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt1'>30.12.2022</span>


                </div>
                <div className='txtdiv'>
                  <p className='txt_news1'>Реєстрація ФОП-дизайнера</p>
                  <span style={{ marginLeft: '20px', marginTop: '-15px' }} id='date_txt1'>Read more</span>

                </div>
              </div>
            </div>
          </div>

          <div className='other_cards'>
            <div className='left_oth'>
              <div className='upper_left'>
                <img className='news2_1img' src={news4_1} />

              </div>
              <div className='bottom_left'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt'>30.12.2022</span>
                  <span id='ved_txt'>Ведення бізнесу</span>
                </div>
                <p style={{ fontSize: '15px', width: '300px', marginBottom: '5px' }} className='txt_news'>Як оформити працівника на роботу? Та чи варто це робити?</p>
                <span style={{ marginLeft: '20px' }} id='date_txt'>Read more</span>
              </div>
            </div>
            <div className='right_oth'>
              <div className='upper_right'>
                <img className='news2_2img' src={news4_2} />

              </div>
              <div className='bottom_right'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt1'>30.12.2022</span>


                </div>
                <div className='txtdiv'>
                  <p className='txt_news1'>Послуги адвоката для ФОП</p>
                  <span style={{ marginLeft: '20px', marginTop: '-15px' }} id='date_txt1'>Read more</span>

                </div>
              </div>
            </div>
          </div>

          <div className='other_cards'>
            <div className='left_oth'>
              <div className='upper_left'>
                <img className='news2_1img' src={news5_1} />

              </div>
              <div className='bottom_left'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt'>30.12.2022</span>
                  <span id='ved_txt'>Ведення бізнесу</span>
                </div>
                <p style={{ fontSize: '15px', width: '300px', marginBottom: '5px' }} className='txt_news'>Розлучення онлайн/як подати заяву на розлучення онлайн</p>
                <span style={{ marginLeft: '20px' }} id='date_txt'>Read more</span>
              </div>

            </div>
            <div className='right_oth'>
              <div className='upper_right'>
                <img className='news2_2img' src={news5_2} />

              </div>
              <div className='bottom_right'>
                <div style={{ width: '100%' }}>
                  <span id='date_txt1'>30.12.2022</span>


                </div>
                <div className='txtdiv'>
                  <p className='txt_news1'>Реєстрація ФОП-психолога</p>
                  <span style={{ marginLeft: '20px', marginTop: '-15px' }} id='date_txt1'>Read more</span>

                </div>
              </div>
            </div>

          </div>



        </div>

      </div>



    </div>

  );
}
