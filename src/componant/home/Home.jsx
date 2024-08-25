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
              <h3>Hi I am</h3>
              <h1>Tushar Ahmed</h1>
              <p>I'm a Frontend Developer/Backend Developer</p>
            </div>
            <div className="banner__social">
              <div><FaThreads /></div>
              <div><FaGithub /></div>
              <div><FaLinkedin /></div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home