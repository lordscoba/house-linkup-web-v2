import {
  ResponseType,
  initialStateRequest,
} from '../../../types/reduxResponse.types';
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  RESET_DELETE__USERS,
  RESET_GET_ALL_USERS,
} from '../../constants/dashboard/user.constants';

export const allUsersReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_GET_ALL_USERS:
      return state;

    default:
      return state;
  }
};

export const deleteUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_DELETE__USERS:
      return state;
    default:
      return state;
  }
};
