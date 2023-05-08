import React, { Component } from 'react';
import logo from '../Header1_imgs/logo.svg';
import yellowback from '../Header1_imgs/yellowback.png';
import girlphone from '../Header1_imgs/girl_phone.png';
import grlphone from '../Header1_imgs/girlsgirls.png';
import yback from '../Header1_imgs/yback.png';
import lines from '../Header1_imgs/lines.png';

import Navbar1 from '../NavbarComp/NavbarComp';
import Login from '../Login';
import Log from '../Log';
import Reg from '../Reg'

import Registration from '../Registration';

import { useState } from 'react'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
} from 'mdb-react-ui-kit'

function Header1() {


  const [basicModal, setBasicModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const toggleShow1 = () => setLoginModal(!loginModal);
  const toggleShow2 = () => setRegisterModal(!registerModal);

  return (
    <>
      <div class='mainpage'>
        <div class="header-blue">
          <Navbar1 />
          <img id='lines_img' src={lines} />

          <img id='yback_img' src={yback} />

          <div id="headermain" class="cont hero">

            <div style={{ width: "100%" }} class="row">
              <div class="col-lg-3 head" style={{ width: "300px", paddingLeft: '140px' }}>
                <div style={{ width: "500px" }} id='headerblck' class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                  <div style={{ paddingLeft: '20px' }} class='butns'>
                    <h1 style={{ fontWeight: 900, fontSize: '45px' }}>Календар</h1>
                    <p style={{ width: '300px', marginTop: '-17px', marginBottom: '35px' }}>Твій щоденник календар із
                      актуальними податковими новинами</p>
                    <MDBBtn onClick={toggleShow1} id="redbut" style={{ fontWeight: '800' }} class="btn btn-light btn-lg action-button" type="button">Вхід</MDBBtn>
                    <MDBModal show={loginModal} setShow={setLoginModal} tabIndex='1'>
                      <MDBModalDialog >
                        <MDBModalContent style={{ width: '978px', height: '750px', marginLeft: '-240px' }}>
                          <MDBModalHeader>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow1}></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody ><Log /></MDBModalBody>


                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                    <div>
                      <MDBBtn onClick={toggleShow2} style={{ fontWeight: '800', marginTop: '85px' }} id="redbut1" class="btn btn-light btn-lg action-button" type="button">Зареєструватися</MDBBtn>
                      <MDBModal show={registerModal} setShow={setRegisterModal} tabIndex='-1'>
                        <MDBModalDialog>
                          <MDBModalContent style={{ width: '978px', height: '750px', marginLeft: '-240px' }}>
                            <MDBModalHeader>
                              <MDBBtn className='btn-close' color='none' onClick={toggleShow2}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody><Reg /></MDBModalBody>


                          </MDBModalContent>
                        </MDBModalDialog>
                      </MDBModal>
                    </div>
                    <div className='nothing'></div>
                  </div>
                </div>
                <div class="imgsheader">
                  <p></p>
                </div>
              </div>
              <div class="col b" style={{ width: '1100px' }}>
                <img id='girlphn_img' src={grlphone} />
                <button id='helpbtn_'>допомогти</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );

}

export default Header1;