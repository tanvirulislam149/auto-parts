import React, { useState } from 'react';
import Banner from './Banner/Banner';
import Facilities from './Facilities';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import Summary from './Summary';

const HomePage = () => {
  const [homeLoading, setHomeLoading] = useState(true);
  return (
    <div>
      {
        homeLoading ? "" :
          <>
            <Banner></Banner>
            <Facilities></Facilities>
          </>

      }
      <Parts setHomeLoading={setHomeLoading}></Parts>
      {
        homeLoading ? "" :
          <>
            <Summary></Summary>

            <Reviews></Reviews>
            <Newsletter></Newsletter>
            <Footer></Footer>
          </>
      }
    </div>
  );
};

export default HomePage;