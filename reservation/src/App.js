import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import Profile from './components/profile/profile';
import Rooms from './components/rooms/rooms';
import AddRoom from './components/rooms/addRoom';
import UpdateProfile from './components/updateProfile/updateProfile';
import RoomDetail from './components/rooms/roomDetail';
import Reservation from './components/reservation/reservation';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/addroom' component={AddRoom} />
        <Route exact path='/user-update' component={UpdateProfile} />
        <Route exact path='/room/:id' component={RoomDetail} />
        <Route exact path='/reservation/:id' component={Reservation} />
      </BrowserRouter>
    </>
  );
};

export default App;
