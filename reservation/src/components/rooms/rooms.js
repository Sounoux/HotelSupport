import React, { useEffect } from 'react';
import './rooms.css';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../assets/img/suite1.jpg';
import pic2 from '../../assets/img/chambre.jpg';
import pic3 from '../../assets/img/chambreDeluxe.jpg';
import { Link } from 'react-router-dom';
import { fetchRooms, deleteRoom } from '../../actions/roomActions';
import Loading from '../loading/loading';

const Rooms = ({ history }) => {
  //Fetch rooms
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  const roomslist = useSelector(state => state.roomsList);
  const { rooms, loading } = roomslist;
  // End of fetch rooms

  //Delete room handler
  const handlerDeleteRoom = id => {
    dispatch(deleteRoom(id));
    history.push('/rooms');
  };
  return (
    <div>
      {loading && <Loading />}
      {rooms !== undefined && rooms.length === 0 ? (
        'No'
      ) : (
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Numéro de la chambre</th>
                  <th scope='col'>Images</th>
                  <th scope='col'>Type de la chambre</th>
                  <th scope='col'>Vue de la chambre</th>
                  <th scope='col'>Capacité maximale</th>
                  <th scope='col'>Réserver</th>
                </tr>
              </thead>
              <tbody>
                {rooms &&
                  rooms.map(room => {
                    return (
                      <tr className='table-dark' key={room._id}>
                        <th scope='row'>{room.name}</th>
                        {room.type === 'Suite' ?
                        ( <td><img src={pic} alt='suite' /></td> )
                        : room.type === 'Standard'  ? 
                        ( <td><img src={pic2} alt='chambre' /></td>) 
                        :  ( <td><img src={pic3} alt='deluxe' /></td>) 
                        }
                        <td>{room.type}</td>
                        <td>{room.vue}</td>
                        <td>{room.capacity}</td>
                        <td>
                        <Link to={`/reservation/${room && room._id}`}>
                            <button type="button">
                                          Reserver !
                            </button>
                        </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;