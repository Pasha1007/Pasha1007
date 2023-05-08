import './App.css';
import HomePage from './pages/HomePage';
import AskAnswer from './pages/AskAnswerPage';
import DocsPage from './pages/DocsPage';
import AIchat from './pages/AIchat';

import CalendarPage from './pages/CalendarPage';
import CalendarPage2 from './pages/CalendarPage2';
import CalendarPage3 from './pages/CalendarPage3';

import NewsPage from './pages/NewsPage';
import Login from './components/Login';
import Article_page from './components/ArticlePage/Article_page.js';
import Article_page2 from './components/ArticlePage/Article_page2.js';

import AfterAuthPage from './components/AfterAuthPage/AfterAuthPage';
import ForPresentation from './pages/ForPresentation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reset from './Reset';
import React, { useEffect, useState } from "react";



function App() {

  return (


    <div>

      <Routes>
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/log" component={<Login />} />
        <Route exact path='/home' exact element={<HomePage />} />
        <Route exact path='/' exact element={<HomePage />} />
        <Route exact path='/user' element={<AfterAuthPage />} />
        <Route exact path='/documents' element={<DocsPage />} />
        <Route exact path='/news' element={<NewsPage />} />
        <Route exact path='/calendar' element={<CalendarPage />} />
        <Route exact path='/calendar/group1' element={<CalendarPage />} />
        <Route exact path='/calendar/group2' element={<CalendarPage2 />} />
        <Route exact path='/calendar/group3' element={<CalendarPage3 />} />
        <Route exact path='/help' element={<AskAnswer />} />
        <Route exact path='/for_presentation' element={<ForPresentation />} />
        <Route exact path='/article1' element={<Article_page />} />
        <Route exact path='/article2' element={<Article_page2 />} />


        {/* 
         <Route exact path='/login' element={<LoginPage/>}/>
         <Route exact path='/register' element={<RegisterPage/>}/> */}
      </Routes>
    </div>

  );
}

export default App;
