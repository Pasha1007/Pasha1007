import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Col from "react-bootstrap/Container";
import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import './NewsPart.css';
import shake from '../NewsImgs/shake.png';
import rbroke from '../NewsImgs/rbroke.png';
import taxnews from '../NewsImgs/taxnews.png';
import live from '../NewsImgs/live.png';



function NewsPart() {

  return (

    <div className='NEWSpart d-flex' style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0E1123', height: '40rem', marginTop: '0', width: '100%' }}>

      <Row className='justify-content-md-center'>
        <Card.Text style={{ textAlign: 'center', fontWeight: '800', fontSize: '50px', color: 'white', marginBottom: '50px', marginTop: '50px' }}>
          Останні Новини
          <img style={{ marginLeft: "10px", width: '70px', height: '72px' }} src={live} />
        </Card.Text>
        <Col className='d-flex' md="auto">

          <CardGroup style={{ marginBottom: '20px', justifyContent: 'center', width: "120rem", border: 'none', backgroundColor: '#0D0947', height: '30rem', padding: '10px', borderRadius: '50px', marginRight: '10px' }}>
            <Card className='cardnews' style={{ background: 'none', width: "20rem", border: 'none', fontWeight: '700', height: '21rem' }}>
              <Card.Body className='cardbody' style={{ width: "20rem", height: '22rem' }}>
                <Card.Img src={shake} style={{ borderRadius: '55px', boxShadow: '0px 0px 20px 1px rgba(255,255,255,0.32)' }}></Card.Img>

                <Card.Text id='textnews' style={{ marginLeft: '10px', fontWeight: 800, color: 'white', marginBottom: '0', marginTop: '5px' }}>
                  Як оформити працівника на роботу?
                </Card.Text>
                <Card.Text id='textnews' style={{ marginLeft: '10px', color: 'white' }}>
                  Чи варто це робити?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cardnews' style={{ background: 'none', width: "20rem", border: 'none', fontWeight: '800', height: '21rem' }}>
              <Card.Body className='cardbody' style={{ width: "20rem", height: '22rem' }}>
                <Card.Img src={rbroke} style={{ borderRadius: '55px', boxShadow: '0px 0px 20px 1px rgba(255,255,255,0.32)' }}></Card.Img>

                <Card.Text id='textnews' style={{ marginLeft: '10px', color: 'white', marginBottom: '0', marginTop: '5px' }}>
                  Незаконне використання торгової марки без дозволу можна побороти!
                </Card.Text>

              </Card.Body>
            </Card>
            <Card className='cardnews' style={{ background: 'none', width: "20rem", border: 'none', fontWeight: '700', height: '21rem' }}>
              <Card.Body className='cardbody' style={{ width: "20rem", height: '22rem' }}>
                <Card.Img src={taxnews} style={{ borderRadius: '55px', boxShadow: '0px 0px 20px 1px rgba(255,255,255,0.32)' }}></Card.Img>

                <Card.Text id='textnews' style={{ marginLeft: '10px', color: 'white', marginBottom: '0', marginTop: '5px' }}>
                  Що таке податкова амністія?
                </Card.Text>

              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
}


export default NewsPart;