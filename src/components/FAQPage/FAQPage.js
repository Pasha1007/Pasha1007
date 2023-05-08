import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from '../DashboardPage/Dashboard.js';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBRow,
  MDBCol,
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
import quest_mark from '../FAQimgs/question_mark.png'
import answer from '../FAQimgs/answ.png'

import Footer from '../Footer/Footer.js'
import './FAQPage.css';







import { auth, db, logout } from "../../firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";


export default function AfterAuthPage() {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
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

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = (buttonIndex) => {
    if (selectedButton === buttonIndex) {
      setSelectedButton(null);
      setSelectedAnswer(null);
    } else {
      setSelectedButton(buttonIndex);
      setSelectedAnswer(buttonIndex);
    }
  };
  const faqs = [
    {
      id: 1,
      question: 'Для чого потрібен FOP Helper?',
      answer: ' FOP Helper був створений для людей, які тільки зареєстрували ФОП і хочуть мати зручний сервіс для відстежування часу для подачі звітів та сплати податків.',
    },
    {
      id: 2,
      question: 'Чи є FOP Helper безкоштовним?',
      answer: 'FOP Helper є повністю безкоштовним сервісом.',
    },
    {
      id: 3,
      question: 'Чи можна змінити групу ФОП після реєстрації?',
      answer: 'Так. Після реєстрації, у Кабінеті користувача є можливість змінити групу ФОП. Користувач самостійно вибирає групу та наявність найманих працівників',
    },
    {
      id: 4,
      question: 'Навіщо створювати профіль, якщо можна просто стежити за календарем на головній сторінці?',
      answer: 'Створення профілю необхідне для персоналізації. Щоб Користувача повідомляло про періоди, коли потрібно сплатити податки чи здати декларацію, потрібно створити кабінет, де буде ваша електрона пошта',
    },
    {
      id: 5,
      question: 'Як зареєструватись у FOP Helper?',
      answer: 'На головній сторінці натисніть кнопку «Зареєструватись», далі введіть своє ім’я, прізвище, електрону пошту та пароль. На наступній сторінці оберіть групу ФОП та наявність найманих працівників. Після цього ваш Кабінет створено',
    },
  ];
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
        <MDBRow style={{ width: '80%' }}>

          <MDBCol size='3'>
            <div className='left_side_blocks_container'>
              <MDBTabs style={{ marginTop: '20px', border: "none" }} className='flex-column text-center'>

                <MDBTabsItem>
                  <MDBTabsLink to='/user' className='tabitm' >

                    <img className='left_side_block_img' src={admin} />
                    Особистій кабінет
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

          <MDBCol>


            <div id='askanswer'>
              <h1 style={{ fontWeight: '800', color: 'black', fontSize: '45px' }}>Питання/Відповідь</h1>
            </div>
            {faqs.map((faq) => (
              <button key={faq.id} className={`question_button ${selectedButton === faq.id ? 'active' : ''}`}
                onClick={() => handleClick(faq.id)}
              >
                <div className="question_container" >
                  <p style={{ marginLeft: '3%' }}><i className="arrow"></i></p>
                  <span className="quest_text" style={{ fontSize: faq.id === 4 ? '15px' : '20px' }}>{faq.question}</span>
                  <img className="quest_img" src={quest_mark}></img>
                </div>
              </button>
            ))}


          </MDBCol>

          <MDBCol size={1}>
            <div className="asd"></div>

            <div className="answ_block">

              <img src={answer} style={{ width: '40px', marginLeft: '40%' }}></img>
              {faqs.map((faq) => (
                <div className="answer" style={{ backgroundColor: "transparent", height: '14%' }}>
                  {selectedAnswer === faq.id && (
                    <div key={faq.id} className='answer' >
                      <span className="quest_text" style={{ fontSize: faq.id === 2 ? '20px' : '13px' }}>{faq.answer}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </MDBCol>
        </MDBRow>


      </div>


      <Footer />

    </div >

  );
}