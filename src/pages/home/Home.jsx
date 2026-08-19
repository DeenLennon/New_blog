import React from 'react';
import "./home.scss";
import NavbarTop from "../../components/navbarTop/NavbarTop";
import AdvertTop from "../../components/advertTop/AdvertTop";
import NavbarBottom from "../../components/navbarBottom/NavbarBottom";
import Hotlinks from "../../components/hotlinks/Hotlinks";
import MainContent from "../../components/mainContent/MainContent";
import MainBody from "../../components/mainBody/MainBody";
import MainBodyTwo from '../../components/mainBodyTwo/MainBodyTwo';
import MainBodyThree from '../../components/mainBodyThree/MainBodyThree';
import AudioVideo from '../../components/audioVideo/AudioVideo';
import AdvertLarge from '../../components/advertLarge/AdvertLarge';
import MainBodyFour from '../../components/mainBodyFour/MainBodyFour';
import FoodRecipe from '../../components/foodRecipe/FoodRecipe';
import PhotoGal from '../../components/photoGal/PhotoGal';
import Footer from '../../components/footer/Footer';

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