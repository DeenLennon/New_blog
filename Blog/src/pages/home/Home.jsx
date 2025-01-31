import React from 'react';
import "./home.scss";
import NavbarTop from "/src/components/navbarTop/NavbarTop";
import AdvertTop from "/src/components/advertTop/AdvertTop";
import NavbarBottom from "/src/components/navbarBottom/NavbarBottom";
import Hotlinks from "/src/components/hotlinks/Hotlinks";
import MainContent from "/src/components/mainContent/MainContent";
import MainBody from "/src/components/mainBody/MainBody";
import MainBodyTwo from '/src/components/mainBodyTwo/MainBodyTwo';
import MainBodyThree from '/src/components/mainBodyThree/MainBodyThree';
import AudioVideo from '/src/components/audioVideo/AudioVideo';
import AdvertLarge from '/src/components/advertLarge/AdvertLarge';
import MainBodyFour from '/src/components/mainBodyFour/MainBodyFour';
import FoodRecipe from '/src/components/foodRecipe/FoodRecipe';
import PhotoGal from '/src/components/photoGal/PhotoGal';
import Footer from '/src/components/footer/Footer';

function Home() {
  return (
        <div className='home'>
            <div className="homeWrapper">
                <NavbarTop />
                <AdvertTop/>
                <NavbarBottom/>
                <Hotlinks/>
                <MainContent/>
                <MainBody />
                <MainBodyTwo />
                <MainBodyThree />
                <AudioVideo />
                <AdvertLarge />
                <MainBodyFour />
                <FoodRecipe />
                <PhotoGal />
                <Footer />
            </div>
        </div>
  )
}

export default Home