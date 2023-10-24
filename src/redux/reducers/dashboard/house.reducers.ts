import {
  ResponseType,
  initialStateRequest,
} from '../../../types/reduxResponse.types';
import {
  DELETE_HOUSE_FAIL,
  DELETE_HOUSE_IMAGE_FAIL,
  DELETE_HOUSE_IMAGE_REQUEST,
  DELETE_HOUSE_IMAGE_RESET,
  DELETE_HOUSE_IMAGE_SUCCESS,
  DELETE_HOUSE_REQUEST,
  DELETE_HOUSE_RESET,
  DELETE_HOUSE_SUCCESS,
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_RESET,
  FETCH_HOUSE_SUCCESS,
  GET_USER_UPLOADED_FAIL,
  GET_USER_UPLOADED_REQUEST,
  GET_USER_UPLOADED_SUCCESS,
  UPDATE_HOUSE_FAIL,
  UPDATE_HOUSE_IMAGE_FAIL,
  UPDATE_HOUSE_IMAGE_REQUEST,
  UPDATE_HOUSE_IMAGE_RESET,
  UPDATE_HOUSE_IMAGE_SUCCESS,
  UPDATE_HOUSE_REQUEST,
  UPDATE_HOUSE_RESET,
  UPDATE_HOUSE_SUCCESS,
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
    case GET_USER_UPLOADED_REQUEST:
      return { ...state, loading: true };
    case GET_USER_UPLOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case GET_USER_UPLOADED_FAIL:
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

export const updateHouseReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPDATE_HOUSE_REQUEST:
      return { ...state, loading: true };
    case UPDATE_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPDATE_HOUSE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPDATE_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const deleteHouseReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DELETE_HOUSE_REQUEST:
      return { ...state, loading: true };
    case DELETE_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DELETE_HOUSE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case DELETE_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const editHouseImageReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPDATE_HOUSE_IMAGE_REQUEST:
      return { ...state, loading: true };
    case UPDATE_HOUSE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPDATE_HOUSE_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPDATE_HOUSE_IMAGE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const deleteHouseImageReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DELETE_HOUSE_IMAGE_REQUEST:
      return { ...state, loading: true };
    case DELETE_HOUSE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DELETE_HOUSE_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case DELETE_HOUSE_IMAGE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const fetchHouseReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case FETCH_HOUSE_REQUEST:
      return { ...state, loading: true };
    case FETCH_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case FETCH_HOUSE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case FETCH_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};
