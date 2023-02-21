import {
  FETCH_ROOM_FAIL,
  FETCH_ROOM_REQUEST,
  FETCH_ROOM_SUCCESS,
} from "../actionTypes";

const roomsListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROOM_REQUEST:
      return {
        loading: true,
      };
    case FETCH_ROOM_SUCCESS:
      return {
        rooms: action.payload,
        loading: false,
      };
    case FETCH_ROOM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default roomsListReducer;
