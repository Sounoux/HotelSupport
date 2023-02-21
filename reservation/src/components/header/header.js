import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  //logout handler

  const logoutHandler = () => {
    dispatch(logoutUser());
    history.push('/');
  };
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Hotel Support
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            {userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/rooms'>
                    Rooms
                  </Link>
                </li>
                {userInfo.name=="admin" ? (
              <li className='nav-item'>
              <Link className='nav-link' to='/addroom'>
                Add room
              </Link>
            </li>
            ) : (
              ''
            )}
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/login'
                    onClick={() => dispatch(logoutUser())}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
              </>
            )}

            {userInfo ? (
              <li className='nav-item'>
              <Link className='nav-link' to='/profile'>
              {userInfo.name}
              </Link>
            </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;