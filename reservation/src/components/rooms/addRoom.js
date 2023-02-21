import React, { useState } from 'react';
import './addRoom.css';
import { createRoom } from '../../actions/roomActions';
import { useDispatch, useSelector } from 'react-redux';
  
  const AddRoom = ({ history }) => {
    const [capacity, setCapacity] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [vue, setVue] = useState('');
    const [prix, setPrix] = useState('');
  
    //Get the user id from store
  
    const userLogin = useSelector(state => state.userLogin);
  
    const { userInfo } = userLogin;
    console.log(userInfo._id);
    //dispatch action
    const dispatch = useDispatch();
  
    const formSubmitHandler = e => {
      const data = {
        name,
        capacity,
        type,
        vue,
        prix,
        reservation: userInfo && userInfo._id,
      };
      e.preventDefault();
      dispatch(createRoom(data));
      history.push('/rooms');
    };
    console.log(name);
    return (
      <div className='row container-height'>
        <div className='col-lg-6 col-md-6 m-auto'>
          <div className='container'>
          <h1 className='text-center'>Ajouter une chambre</h1>
            <form onSubmit={formSubmitHandler}>
                      <fieldset>
                  <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Type de chambre : </label>
                    <select
                      value={type}
                      onChange={e => setType(e.target.value)}
                      className='custom-select'>
                      <option defaultValue='Standard'>Standard</option>
                      <option value='Deluxe'>Deluxe</option>
                      <option value='Suite'>Suite</option>
                    </select>
                  </div>
                  <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Vue de la chambre : </label>
                    <select
                      value={vue}
                      onChange={e => setVue(e.target.value)}
                      className='custom-select'>
                      <option defaultValue='Mer'>Mer</option>
                      <option value='Jardin'>Jardin</option>
                      <option value='Route'>Route</option>
                    </select>
                  </div>
                  <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Capacité maximale de la chambre : </label>
                    <select
                      value={capacity}
                      onChange={e => setCapacity(e.target.value)}
                      className='custom-select'>
                      <option defaultValue='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Numéro de la chambre : </label>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type='number'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Name room'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>Prix de la chambre : </label>
                    <input
                      value={prix}
                      onChange={e => setPrix(e.target.value)}
                      type='number'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Room price'
                    />
                  </div>
                        <button type='submit' className='btn btn-warning m-auto'>
                          Create Room
                        </button>
                      </fieldset>
                    </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddRoom;