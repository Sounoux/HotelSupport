import React, { useEffect } from 'react';
import './profile.css';
import pic from '../../assets/img/roompic.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/userActions';
import { fetchRooms, deleteRoom } from '../../actions/roomActions';
import Loading from '../loading/loading';
import { Link } from 'react-router-dom';

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(fetchRooms());
  }, [dispatch, history]);
  //Check if user is login otherwise redirect
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo === null) history.push('/login');
  }, [userInfo, history]);

  const roomslist = useSelector(state => state.roomsList);
  const { rooms, loading } = roomslist;
  //Get user Profile
  const userProfile = useSelector(state => state.userProfile);
  const { user } = userProfile;

  //Delete room handler
  const handlerDeleteRoom = id => {
    dispatch(deleteRoom(id));
    history.push('/rooms');
  };

  const renderTable = () => {
    if (userInfo.name=="admin"){
    if (rooms) {
      return (
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Numéro de la chambre</th>
              <th scope='col'>Type de la chambre</th>
              <th scope='col'>Supprimer</th>
              <th scope='col'>Modifier</th>
            </tr>
          </thead>
          <tbody>
            
            {rooms.map(room => {
                    return (
                      <tr className='table-dark' key={room._id}>
                        <th scope='row'>{room.name}</th>
                        <td>{room.type}</td>
                        <td>
                          <i
                            onClick={() => handlerDeleteRoom(room._id)}
                            className='fas fa-trash '
                            style={{ color: 'red', cursor: 'progress' }}></i>
                        </td>
                        <td>
                          <Link to={`/room/${room && room._id}`}>
                            <i
                              className='far fa-edit'
                              style={{
                                color: 'yellow',
                                cursor: 'progress',
                              }}></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </table>
      );
      
    } else {
      return (
        <>
          <h1>You don't have any room created.</h1>
          <Link>Start Creating</Link>
        </>
      );
    }
  }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col mt-5'>
          {loading && !user ? (
            <Loading />
          ) : (
            <div className='card m-auto ' style={{ width: '50%' }}>
              <img src={pic} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{user && user.email}</h5>
                <p className='card-text'>{user && user.name}</p>
                <Link to='/user-update' className='btn btn-primary'>
                  Update your profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        <div className='col'>{renderTable()}</div>
      </div>
    </div>
  );
};

export default Profile;