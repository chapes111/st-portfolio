import React from 'react'
import Navbar from './Navbar'
import heroImg from '../images/hero-img.svg'
import { Link } from 'react-router-dom'
import Card from './Card'
import accessIcon from '../images/accessible-icon.svg'
import appIcon from '../images/app-web-icon.svg'
import changeIcon from '../images/change-circle-icon.svg'
import dbIcon from '../images/db-icon.svg'
import designIcon from '../images/design-pencil-icon.svg'
import lightningIcon from '../images/lightning-icon.svg'
import mobileBlob1 from '../images/mobile-blob-1.svg'
import mobileBlob2 from '../images/mobile-blob-2.svg'
import arrow1 from '../images/arrow-1.svg'

const Home = () => {
    return (
        <div className="home-container">
          <Navbar />
          <div className="hero-container">
              <h1 className="headline">
                  A developer with a passion for full-stack web development.
              </h1>
              <div className="hero-pic-lg">
                <img src={heroImg} aria-hidden={true} className="hero-img" />
                <img src={mobileBlob1} aria-hidden={true} className="blob-1" />
              </div>
              <Link to='/contact' className='hero-cta-button'>
                  Let's Create
              </Link>
              <img src={arrow1} aria-hidden={true} className="arrow-1" />
              <div className="hero-pic">
                <img src={heroImg} aria-hidden={true} className="hero-img" />
                <img src={mobileBlob1} aria-hidden={true} className="blob-1" />
              </div>
          </div>
          <img src={mobileBlob2} aria-hidden={true} className="blob-2" />
          <div className="cards-container">
            <Card
              color={'yellow'}
              heading={'HTML'}
              entries={
                [
                  {
                    icon: lightningIcon,
                    subHeading: 'Fast',
                    content: 'organized and logical code to ensure fast, maintainable websites'
                  },
                  {
                    icon: accessIcon,
                    subHeading: 'Accessible',
                    content: 'latest standards and conventions to promote accessibility and SEO'
                  }
                ]
              }
            />

            <Card
              color={'purple'}
              heading={'CSS'}
              entries={
                [
                  {
                    icon: designIcon,
                    subHeading: 'Design',
                    content: 'follows latest design trends to ensure beautiful, performant web sites'
                  },
                  {
                    icon: changeIcon,
                    subHeading: 'Maintainable',
                    content: 'reduced complexity to ease initial complexity and revisions'
                  }
                ]
              }
            />

            <Card
              color={'orange'}
              heading={'Javascript'}
              entries={
                [
                  {
                    icon: appIcon,
                    subHeading: 'Front-End',
                    content: 'Experienced with the react library and vanilla javascript'
                  },
                  {
                    icon: dbIcon,
                    subHeading: 'Back-End',
                    content: 'experienced in c# api’s, sql server, and IIS deployment'
                  }
                ]
              }
            />
          </div>
        </div>
    )
}

export default Home
