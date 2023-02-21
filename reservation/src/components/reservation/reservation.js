import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-date-picker'
import { registerReservation } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
  
  const Reservation = ({ history }) => {
    const { id } = useParams();
    const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [adresse, setadresse] = useState('');
  const [ville, setville] = useState('');
  const [pays, setpays] = useState('');
  const [codePostale, setcodePostale] = useState('');
  const [startDate, setStartDate] = useState(new Date("2022/04/11"));
  const [endDate, setEndDate] = useState(new Date("2022/04/11"));


    //dispatch action
    const dispatch = useDispatch();
  
    const formSubmitHandler = e => {
      const data = {
        nom,
        prenom, 
        email, 
        phone, 
        adresse, 
        ville, 
        pays, 
        codePostale, 
        startDate, 
        endDate,
        room: id
      };
      e.preventDefault();
      dispatch(registerReservation(data));
      history.push('/rooms');
    };

    

  return (
    <div className='row container-height'>
        <div className='col-lg-6 col-md-6 m-auto'>
          <div className='container'>
          <h1 className='text-center'>Réservation</h1>
          <form onSubmit={formSubmitHandler}>
          <fieldset>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        value={startDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        value={endDate}
      />
      <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Nom</label>
                <input
                  value={nom}
                  onChange={e => setnom(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer Nom'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Prénom</label>
                <input
                  value={prenom}
                  onChange={e => setprenom(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer prenom'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email</label>
                <input
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>N° de téléphone</label>
                <input
                  value={phone}
                  onChange={e => setphone(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer n° de telephone'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Adresse</label>
                <input
                  value={adresse}
                  onChange={e => setadresse(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer adresse'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Ville</label>
                <input
                  value={ville}
                  onChange={e => setville(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer ville'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Pays</label>
                <input
                  value={pays}
                  onChange={e => setpays(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer pays'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Code Postale</label>
                <input
                  value={codePostale}
                  onChange={e => setcodePostale(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Entrer code postale'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Réserver
              </button>
      </fieldset>
      </form>
    </div>
        </div>
      </div>
  );
  };
  
  export default Reservation;