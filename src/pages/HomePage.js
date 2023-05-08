import React from 'react'
import Header1 from '../components/HeaderComp/Header1';
import Header2 from '../components/HeaderComp/Header2';
import Footer from '../components/Footer/Footer';
import Calendar from '../components/calendar/Calendar';
import NewsPart from '../components/NewsComps/NewsPart';
import OurTeamPage from '../components/OurTeamPage/OurTeamPage.js';



function HomePage() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Calendar />
      <NewsPart />
      <OurTeamPage />
      <Footer />
    </div>
  )
}

export default HomePage;
