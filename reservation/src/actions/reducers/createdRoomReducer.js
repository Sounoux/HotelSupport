import {
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
} from "../actionTypes";

const createdRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ROOM_REQUEST:
      return {
        loading: true,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        room: action.payload,
        loading: false,
      };
    case CREATE_ROOM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createdRoomReducer;
