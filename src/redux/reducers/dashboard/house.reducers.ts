import {
  ResponseType,
  initialStateRequest,
} from '../../../types/reduxResponse.types';
import {
  GET_USER_UPLOADED_HOUSE_FAIL,
  GET_USER_UPLOADED_HOUSE_REQUEST,
  GET_USER_UPLOADED_HOUSE_SUCCESS,
  UPLOAD_HOUSE_FAIL,
  UPLOAD_HOUSE_REQUEST,
  UPLOAD_HOUSE_RESET,
  UPLOAD_HOUSE_SUCCESS,
} from '../../constants/dashboard/house.constants';

export const uploadHouseReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPLOAD_HOUSE_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPLOAD_HOUSE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const getUserUploadedHouseReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case GET_USER_UPLOADED_HOUSE_REQUEST:
      return { ...state, loading: true };
    case GET_USER_UPLOADED_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case GET_USER_UPLOADED_HOUSE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};
