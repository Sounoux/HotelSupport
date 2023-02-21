import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoom, updateRoom } from '../../actions/roomActions';

const RoomDetail = ({ history }) => {
  const { id } = useParams();

  //Get the room details and fill it in the form
  const roomDetails = useSelector(state => state.roomDetails);

  const { room, loading } = roomDetails;

  const [name, setName] = useState(room && !loading && room.name);
  const [capacity, setCapacity] = useState(room && !loading && room.capacity);
  const [type, setType] = useState(room && !loading && room.type);
  const [vue, setVue] = useState(room && !loading && room.vue);
  const [prix, setPrix] = useState(room && room.prix);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      name,
      capacity,
      type,
      vue,
      prix
    };
    e.preventDefault();
    dispatch(updateRoom(id, data));
    history.push('/rooms');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {room ? (
            <>
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className='form-group'>
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
                    <select
                      value={type}
                      onChange={e => setVue(e.target.value)}
                      className='custom-select'>
                      <option defaultValue='Mer'>Mer</option>
                      <option value='Jardin'>Jardin</option>
                      <option value='Route'>Route</option>
                    </select>
                  </div>
                  <div className='form-group'>
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
                    <label htmlFor='exampleInputEmail1'>Author </label>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Name room'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>title</label>
                    <input
                      value={prix}
                      onChange={e => setPrix(e.target.value)}
                      type='number'
                      id='exampleInputPassword1'
                      placeholder='Room price'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Create Room
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;