import axios from 'axios';
import {
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  FETCH_ROOM_FAIL,
  FETCH_ROOM_REQUEST,
  FETCH_ROOM_SUCCESS,
  DELETE_ROOM_FAIL,
  DELETE_ROOM_SUCCESS,
  DELETE_ROOM_REQUEST,
  ROOM_DETAIL_SUCCESS,
  ROOM_DETAIL_FAIL,
  ROOM_DETAIL_REQUEST,
  ROOM_UPDATE_SUCCESS,
  ROOM_UPDATE_REQUEST,
  ROOM_UPDATE_FAIL,
} from './actionTypes';

//Create room

export const createRoom = roomData => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_ROOM_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('/api/rooms', roomData, config);

      dispatch({
        type: CREATE_ROOM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ROOM_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch all rooms

export const fetchRooms = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_ROOM_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get('/api/rooms', config);

      dispatch({
        type: FETCH_ROOM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ROOM_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//delete a room

export const deleteRoom = id => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_ROOM_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.delete(`/api/rooms/${id}`, config);
      dispatch({
        type: DELETE_ROOM_SUCCESS,
        payload: data,
      });

      dispatch({
        type: FETCH_ROOM_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ROOM_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch a signle room
export const fetchRoom = (id, roomData) => {
  return async dispatch => {
    try {
      dispatch({
        type: ROOM_DETAIL_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`/api/rooms/${id}`, roomData, config);

      dispatch({
        type: ROOM_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ROOM_DETAIL_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//UPDATE ROOM

export const updateRoom = (id, roomData) => {
  return async dispatch => {
    try {
      dispatch({
        type: ROOM_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(`/api/rooms/${id}`, roomData, config);
      dispatch({
        type: ROOM_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ROOM_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};