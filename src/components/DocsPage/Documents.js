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
import docs1 from '../docs_imgs/docs1.png';
import law1 from '../docs_imgs/law1.png';
import law2 from '../docs_imgs/law2.png';
import law3 from '../docs_imgs/law3.png';


import news1 from '../NewsImgs/news1.png';
import news2_1 from '../NewsImgs/news2_1.png';
import news3_1 from '../NewsImgs/news3_1.png';
import news4_1 from '../NewsImgs/news4_1.png';
import news5_1 from '../NewsImgs/news5_1.png';

import news2_2 from '../NewsImgs/news2_2.png';
import news3_2 from '../NewsImgs/news3_2.png';
import news4_2 from '../NewsImgs/news4_2.png';
import news5_2 from '../NewsImgs/news5_2.png';

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
import '../NewsComps/NewsCards.css';
import './Documents.css';

import { Link, useNavigate } from "react-router-dom";
import Dashboard from '../DashboardPage/Dashboard.js';

import { auth, db, logout } from "../../firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Documents() {
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
          <h1 style={{ fontWeight: '800', color: 'black', fontSize: '35px', width: '900px' }}>Документи        <span id='blckl'></span>
          </h1>
          <div id='upper_card'>
            <div style={{ height: '200px', zIndex: '100', marginRight: '-100px', borderRadius: '12px', width: '650px', paddingBottom: '100px' }} id='left_side'>
              <div style={{ marginTop: '-10px', }} className='lft_dv'><p className='news1_txt' >Хочеш бути в курсі усіх нових  законопроектів ?</p>
              </div>
              <div style={{ marginTop: '0px', }} className='lft_dv'><p className='news1_txt' >FOP helper тобі в цьому допоможе !</p>
              </div>
            </div>
            <div style={{ zIndex: '-100' }} id='right_side'>
              <img style={{ width: '430px' }} className='news1_img' src={docs1} />

            </div>

          </div>


          <div style={{ marginTop: '200px' }} className='dcs'>
            <div className='doc_card'>
              <div className='upper_dc' style={{ marginBottom: 0 }}>
                <img className='news2_1img' style={{ width: '650px' }} src={law1} />

              </div>
              <div className='bottom_dc'>
                <h1 className='law_title' style={{}} >Законопроект 8401 </h1>
                <p style={{ fontSize: '18px', width: '500px', marginBottom: '5px', fontWeight: 600 }} className='txt_news'>Має скасувати воєнну пільгу, яка забороняє податківцям штрафувати за порушення правил роботи з РРО.</p>
              </div>

            </div>



          </div>

          <div className='dcs'>
            <div className='doc_card'>
              <div className='upper_dc' style={{ marginBottom: 0 }}>
                <img className='news2_1img' style={{ width: '650px' }} src={law2} />

              </div>
              <div className='bottom_dc'>
                <h1 className='law_title' style={{}} >Законопроект 8131 </h1>
                <p style={{ fontSize: '18px', width: '500px', marginBottom: '5px', fontWeight: 600 }} className='txt_news'>Про автоматичний обмін податковою інформацією</p>
              </div>

            </div>



          </div>
          <div className='dcs'>
            <div className='doc_card'>
              <div className='upper_dc' style={{ marginBottom: 0 }}>
                <img className='news2_1img' style={{ width: '650px' }} src={law3} />

              </div>
              <div className='bottom_dc'>
                <h1 className='law_title' style={{}} >Законопроект 6134 </h1>
                <p style={{ fontSize: '18px', width: '500px', marginBottom: '5px', fontWeight: 600 }} className='txt_news'>Про етапну євроінтеграцію</p>
              </div>

            </div>



          </div>


        </div>

      </div>



    </div>

  );
}
