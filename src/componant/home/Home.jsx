import React from 'react'
import './Home.css'
import ban_profile from '../images/image 17.png'
import { FaGithub, FaLinkedin, FaThreads } from 'react-icons/fa6'
const Home = () => {
  return (
    <>
    <section id='banner'>
      <div className="container">
        <div className="banner__wrapper">
            <div className="banner__item">
              <h1>Hi Iam</h1>
              <h2>Tushar Ahmed</h2>
              <p>I'm a Frontend Developer/Backend Developer</p>
            <div className="banner__social">
              <div><FaThreads /></div>
              <div><FaGithub /></div>
              <div><FaLinkedin /></div>
            </div>
            </div>
            <div className="extra"></div>
            <div className="banner__img">
              <img src={ban_profile} alt="" />
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home