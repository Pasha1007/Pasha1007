import React from 'react'
import { Link, useNavigate } from "react-router-dom";
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

function ForPresentation () {
    return (
        <div style={{width:'100%', height:'100%', textAlign:'center', marginTop:'300px'}}> 
            <Link to='/home' id="redbut"  style={{fontWeight:'800', color:'white', paddingTop:'20px'}} class="btn btn-light btn-lg action-button" >FOPHelper</Link>
        </div>
    )
  }

export default ForPresentation;