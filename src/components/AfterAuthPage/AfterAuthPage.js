import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from '../DashboardPage/Dashboard.js';
import { doc, updateDoc } from "firebase/firestore"
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import shapka from '../AfterAuthImgs/shapka.png';
import vecboy from '../AfterAuthImgs/vectorBoy.png';
import admin from '../AfterAuthImgs/admin.png';
import calendar from '../AfterAuthImgs/calendar.png';
import attachment from '../AfterAuthImgs/attachment.png';
import bell from '../AfterAuthImgs/bell.png';
import chat_exclamation from '../AfterAuthImgs/chat_exclamation.png';
import plus from '../AfterAuthImgs/plus.png';
import exit from '../AfterAuthImgs/exit.png';
import exit_1 from '../AfterAuthImgs/exit_1.png';

import blueframe from '../AfterAuthImgs/blueframe.png';
import updProfDude from '../AfterAuthImgs/updateProfileDude.png';
import zsu from '../AfterAuthImgs/zsu.png';
import ramka from '../AfterAuthImgs/ramka1.png';
import fop_s_back from '../AfterAuthImgs/fop_s_back.png';
import sfop from '../AfterAuthImgs/select_fop_guy.png';


import Footer from '../Footer/Footer.js'








import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { getAuth, updateEmail, updateProfile, updatePassword } from "firebase/auth";




export default function AfterAuthPage() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [newGroup, setNewGroup] = useState("");


  const [fop_group, setFopGroup] = useState("");
  const [workers, setWorkers] = useState("");

  const navigate = useNavigate();
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");



  useEffect(() => {
    if (user) {
      setCurrentEmail(user.email);
    }
  }, [user]);
  var grp = fop_group;
  if (grp == "Група 1") {
    grp = "group1";
  }
  else if (grp == "Група 2") {
    grp = "group2";
  }
  else if (grp == "Група 3") {
    grp = "group3";
  }
  var calendar_path = "/calendar/" + grp;
  const handleUpdateEmail = async () => {
    if (!user) return;
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        alert("Email has been updated");
      })
      .catch((error) => {
        alert(error.message);
      });
    window.location.reload();


  };
  var fop_toset1;
  var fop_toset2;
  if (fop_group == "Група 1") {
    fop_toset1 = "Група 2";
    fop_toset2 = "Група 3";
  }
  else if (fop_group == "Група 2") {
    fop_toset1 = "Група 1";
    fop_toset2 = "Група 3";
  }
  else if (fop_group == "Група 3") {
    fop_toset1 = "Група 1";
    fop_toset2 = "Група 2";
  }

  const handleUpdatePassword = () => {
    updatePassword(user, newPassword)
      .then(() => {
        alert("Password has been updated");
      })
      .catch((error) => {
        alert(error.message);
      });
    window.location.reload();

  }
  const changeName = () => {
    updateProfile({
      displayName: 'Lohn Doe'
    })
      .then(() => {
        alert("Email has been updated");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const changeUserName = () => {
    user.updateProfile(auth.currentUser, {
      displayName: newName
    }).then(() => {
      alert("Username has been updated");
    }).catch((error) => {
      alert(error.message);

    });
  }

  const updName = async () => {
    const q = query(collection(db, "users"), where("email", "==", currentEmail));

    const querySnapshot = await getDocs(q);
    let docID = '';
    querySnapshot.forEach((doc) => {
      docID = doc.id;
    });
    const user = doc(db, "users", docID);

    await updateDoc(user, {
      name: newName,
    }).then(() => {
      alert("Username has been updated");
    }).catch((error) => {
      alert(error.message);

    });
    window.location.reload();

  }

  const updFop = async () => {
    const q = query(collection(db, "users"), where("email", "==", currentEmail));

    const querySnapshot = await getDocs(q);
    let docID = '';
    querySnapshot.forEach((doc) => {
      docID = doc.id;
    });
    const user = doc(db, "users", docID);

    await updateDoc(user, {
      fop_group: fop_toset1,
    }).then(() => {
      alert("FOP has been updated");
    }).catch((error) => {
      alert(error.message);

    });
    window.location.reload();
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setWorkers(data.workers);
      setFopGroup(data.fop_group);

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

  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <div>
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
                  <MDBTabsLink to='/user' className='tabitm' onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>

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
                    <img className="logout_button_img" src={exit_1} />
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </div>
          </MDBCol>

          <MDBCol style={{ marginLeft: '90px', marginTop: '40px' }} size='8'>
            <MDBTabsContent>
              <MDBTabsPane id='first_tab' style={{ marginTop: '50px', marginLeft: '90px' }} show={verticalActive === 'tab1'}>
                <h1 class='shadow_text' style={{ fontWeight: '900', color: 'black', fontSize: '45px', marginLeft: '50px' }}>Привіт, тебе вітає</h1>
                <h1 class='shadow_text' style={{ fontWeight: '900', color: '#7534FF', fontSize: '45px', display: 'inline-block', marginLeft: '50px' }}><img className="blueframe" src={blueframe} />FOP Help</h1><h1 class='shadow_text' style={{ fontWeight: '900', color: 'black', fontSize: '55px', display: 'inline-block' }}>er!</h1>
                <p style={{ fontSize: '13px', color: 'black', marginTop: '20px', width: '410px', marginLeft: '50px' }}>Хочеш вести свого ФОП, але боїшся труднощів з
                  податками?</p>
                <p style={{ fontSize: '12px', color: 'black', marginLeft: '80px', marginTop: '40px', width: '400px' }}>Вводь свої дані нижче, обирай групу ФОП та слідкуй за термінами сплати податків у нашому календарі. </p>
                <div class="input-group mb-3" id="grform">
                  <img style={{ width: '20px', height: '20px', margin: '40px -10px 0px 0px', zIndex: '1' }} src={plus} />
                  <div
                    id='txt_in_grey'
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    style={{ borderRadius: '70px', fontSize: '12px', paddingLeft: '40px', backgroundColor: '#F4F4F4', border: 'none', height: '100px', paddingTop: '19px', fontWeight: '500', paddingRight: '30px' }}
                  >Тут ти також можеш знайти потрібні документи, ознайомлюватися з усіма новинами щодо твого ФОП та отримати відповіді на популярні питання. </div>

                </div>

              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
              <MDBTabsPane show={verticalActive === 'tab3'}>Messages content</MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>

        </MDBRow>


        <img id='vecboyy' style={{ height: '900px', width: '450px', marginTop: '-55px' }} src={vecboy} />
      </div>
      <div id='profileComp'>
        <p class='help_txt'>Збираємо кошти на закупівлю та переобладнання мототехніки для ЗСУ</p>
        <button class="help_btn">ДОПОМОГТИ</button>
        <img className='ramka_img' src={ramka} />
        <div id='nameCard' style={{ width: '600px', height: '260px', paddingTop: '50px' }}>
          <h1 style={{ fontWeight: '700' }}>Змінити ім'я</h1>
          <input style={{ margin: '20px', fontSize: '12px', marginTop: '10px' }} placeholder={name} id="form1" label="Ім'я" type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />

          <button id="changeBtn" type="submit" onClick={updName}>Змінити</button>
        </div>
        <div id='nameCard1' style={{ width: '600px', height: '260px', paddingTop: '40px' }}>
          <h1 style={{ fontWeight: '700' }}>Змінити пошту</h1>
          <input style={{ margin: '20px', fontSize: '12px', marginTop: '10px' }} id="form1" placeholder={currentEmail} type='email' label='Пошта' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
          <button id="changeBtn" type="submit" onClick={handleUpdateEmail}>Змінити</button>
          <h1 style={{ fontWeight: '700' }}>Змінити пароль</h1>
          <input style={{ margin: '20px', fontSize: '12px', marginTop: '10px' }} id="form1" placeholder="Введіть новий пароль" label='Пароль' type='text' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <button id="changeBtn" type="submit" onClick={handleUpdatePassword}>Змінити</button>

        </div>

        <img className="upPrDude" src={updProfDude} />
        <div className='fop_select'>
          <h1 style={{ marginTop: '190px', position: 'absolute', fontSize: '50px', fontWeight: 800, marginLeft: '270px' }}>Змінити ФОП</h1>
          <div id='fopCard1' style={{ paddingTop: '25px' }}>
            <select class='frmfop' style={{ margin: '20px', marginTop: '20px' }} id='form2' type='text' value={newGroup} onChange={(e) => setNewGroup(e.target.value)}>
              <option value='1'>{fop_group}</option>
              <option value='2'>{fop_toset1}</option>
              <option value='3'>{fop_toset2}</option>


            </select>
            <select class='frmfop' style={{ margin: '20px', marginTop: '50px' }} value={workers} id='form2' type='text' >
              <option value='1'>{workers}</option>

            </select>
            <button id="changeBtn" type="submit" style={{ marginLeft: '30%' }} onClick={updFop}>Змінити</button>

          </div>
          <img className='select_fop_guy' src={sfop} />

        </div>
        <Footer />
      </div>

    </div>
  );
}