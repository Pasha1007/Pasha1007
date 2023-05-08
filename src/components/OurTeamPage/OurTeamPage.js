import React, { Component } from 'react';
import './OurTeamPage.css'
import pm from '../members_imgs/PM.png';
import qa from '../members_imgs/QA.png';
import design1 from '../members_imgs/Designer1.png';
import design2 from '../members_imgs/Designer2.png';
import ba from '../members_imgs/BA.png';
import techlead from '../members_imgs/TechLead.png';
import fullstack from '../members_imgs/FullStack.png';
import mentor from '../members_imgs/Mentor.png';
import point from '../members_imgs/point.png';
import aboutUs from '../members_imgs/aboutUs.png';



class OurTeamPage extends Component {
    render() {
        return (
            <div>
                <div className="team_container">
                    <p className="aboutUs">Про нас <img style={{ marginBottom: "20px" }} src={aboutUs} /></p>
                    <div className="members_intro">
                        <img src={point} />
                        <p className="intro_txt">
                            Ми команда студентів ІТ СТЕП Університету, які зібрались для того, щоб покращити життя українців. Навчаємось працювати у команді для створення цікавих проектів, які будуть корисними для людей.
                        </p>

                    </div>
                    <div className="members_container">
                        <div className="member">
                            <img src={pm} />
                            <span>Yankiv Dzvinka</span>
                            <h6>PM</h6>
                        </div>
                        <div className="member">
                            <img src={qa} />
                            <span>Okuniev Ivan</span>
                            <h6>QA</h6>
                        </div>
                        <div className="member">
                            <img style={{ marginTop: "20px" }} src={design1} />
                            <span>Ivaniuk Arthur</span>
                            <h6>Designer</h6>
                        </div>
                        <div className="member">
                            <img style={{ marginTop: "5px" }} src={design2} />
                            <span>Ivaniuk Oleh</span>
                            <h6>Designer</h6>
                        </div>
                        <div className="member">
                            <img style={{ marginTop: "10px" }} src={ba} />
                            <span>Hovda Bohdan</span>
                            <h6>BA</h6>
                        </div>
                        <div className="member">
                            <img style={{ marginTop: "15px", width: "170px" }} src={techlead} />
                            <span>Dubina Dmytro</span>
                            <h6>Tech Lead</h6>
                        </div>
                        <div className="member">
                            <img style={{ marginTop: "10px", width: "170px" }} src={fullstack} />
                            <span>Kramar Pavlo</span>
                            <h6>Developer</h6>
                        </div>
                        <div className="member" style={{ background: "rgb(237,251,150)", background: "radial-gradient(circle, rgba(237,251,150,1) 0%, rgba(255,153,60,1) 90%)" }}>
                            <img style={{ marginTop: "20px", width: "180px" }} src={mentor} />
                            <span style={{ fontSize: "18px" }}>Hilyazov Oleksandr</span>
                            <h6>Mentor</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeamPage;