import React, { Component } from 'react';
import globe from '../footer_imgs/globe.png'
import geo_loc from '../footer_imgs/geo_loc.png'
import logo from '../footer_imgs/logo.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

class Footer extends Component {
  render() {
    return (
      <div>

        <div class="footer">
          <img className='Footer_logo' src={logo} />

          <div className='topSplit'></div>
          <div className='adress'>
            <img className='globe' src={globe} />
            <img className='geo_loc' src={geo_loc} />

            <p>
              <a href='#!' id='footertxtsmall1' className='text-reset'>
                www.fophelper.com
              </a>
            </p>
            <p>
              <a href='#!' id='footertxtsmall1' className='text-reset'>
                83A, вулиця Замарстинівська
              </a>
            </p>
          </div>


          <div className='info'>

            <div className='left_info'>
              <h6 id='footertxtbig' className='text-uppercase fw-bold mb-4'>Розділи</h6>
              <p>
                <a href='#!' id='footertxtsmall' style={{ fontWeight: '700' }} className='text-reset'>
                  Календар
                </a>
              </p>
              <p>
                <a href='#!' id='footertxtsmall' className='text-reset'>
                  Новини
                </a>
              </p>
              <p>
                <a href='#!' id='footertxtsmall' className='text-reset'>
                  Блог
                </a>
              </p>
              <p>
                <a href='#!' id='footertxtsmall' className='text-reset'>
                  Контакти
                </a>
              </p>

            </div>
            <div className='split'>


            </div>
            <div className='right_info'>

              <h6 id='footertxtbig' className='text-uppercase fw-bold mb-4'>Інформація</h6>

              <p>
                <a href='#!' id='footertxtsmall' className='text-reset'>
                  Про ФОП
                </a>
              </p>
              <p>
                <a href='#!' id='footertxtsmall' className='text-reset'>
                  Про нас
                </a>
              </p>
              <p>
                <a href='#!' id='footertxtsmall' className='text-reset'>
                  Чат підтримки
                </a>
              </p>
            </div>

          </div>


          <div className='icons_div'>
            <h6 id='footertxtbig' className='icons_info'>Медіа</h6>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='facebook-f' />
            </a>

            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='telegram' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='instagram' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fas icon='envelope' />
            </a>

          </div>

        </div>
      </div>
    );
  }
}

export default Footer;