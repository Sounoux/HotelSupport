import React from 'react';
import './home.css';
import pic from '../../assets/img/hotel2.jpg';
import pic2 from '../../assets/img/deco-chambre-hotel.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Container'>
      <img src={pic} className='card-img-top' alt='...' />
      <div className='Content'>
        <div className='SubContent'>
          <h1>Room Catolog</h1>
          <p>Choisissez la chambre qui vous convient</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
          <img src={pic2} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default Home;
