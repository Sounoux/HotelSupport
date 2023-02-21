import {
  ROOM_DETAIL_FAIL,
  ROOM_DETAIL_REQUEST,
  ROOM_DETAIL_SUCCESS,
} from "../actionTypes";

const roomDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case ROOM_DETAIL_SUCCESS:
      return {
        room: action.payload,
        loading: false,
      };
    case ROOM_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default roomDetailReducer;
