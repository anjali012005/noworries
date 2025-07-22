import './Home.css';
import img from '../../public/backlogo.jpg';
import doc from '../../public/doc.jpg'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="home" className='home'>
      <div className='home-quote'>
        <h2> " <b style={{ color: "#00b4d8" }}>Skip</b> the waiting room. Your <b style={{ color: "#00b4d8" }}>health</b> deserves better."</h2>
        <img src={img} className='home-img' />
      </div >

      <h1 className='doc-heading'>Your Doc's Are Here...</h1>
      <div className='home-doc'>
        <div className='doc-img-container'>
          <div className='doc-img-div'><img src={doc} className='doc-img' alt='doc-img' />
          </div>

          <div className="doc-btn" ><Button onClick={() => navigate('/book')} variant="outline-primary">Book</Button>
          </div>

        </div>

        <div className='doc-info-container'>
          <h2>Dr. Vivek Yadav - Cardiologist</h2>
          <h3>Sunrise Children's Clinic</h3>
          <h3>MBBS,MD,DM</h3>
          <p>7+ YOE</p>
          <p>Availability:- Mon-Fri, 10AM - 1PM</p>
          <p>Fee- ₹500</p>
        </div>
      </div>
    </div >
  )
}

export default Home
