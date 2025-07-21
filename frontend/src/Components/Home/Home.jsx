import React from 'react'
import './Home.css';
import img from '../../public/backlogo.jpg';

const Home = () => {
  return (
    <div id="home" className='home'>
      <div className='home-quote'>
        <h2> " <b style={{color: "#00b4d8"}}>Skip</b> the waiting room. Your <b style={{color: "#00b4d8"}}>health</b> deserves better."</h2>
        <img  src={img} className='home-img'/>
      </div >

      <div>
        DOC PROFILE
      </div>
    </div >
  )
}

export default Home
