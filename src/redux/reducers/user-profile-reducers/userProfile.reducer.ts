import {
  ResponseType,
  initialStateRequest,
} from '../../../types/reduxResponse.types';
import {
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from '../../constants/auth/auth.constants';
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from '../../constants/dashboard/user.constants';
import {
  ACTIVATE_USER_FAIL,
  ACTIVATE_USER_REQUEST,
  ACTIVATE_USER_SUCCESS,
  BLOCK_USER_FAIL,
  BLOCK_USER_REQUEST,
  BLOCK_USER_SUCCESS,
  CHANGE_PROFILE_PICTURE_FAIL,
  CHANGE_PROFILE_PICTURE_REQUEST,
  CHANGE_PROFILE_PICTURE_RESET,
  CHANGE_PROFILE_PICTURE_SUCCESS,
  DEMOTE_USER_FAIL,
  DEMOTE_USER_REQUEST,
  DEMOTE_USER_SUCCESS,
  DE_ACTIVATE_USER_FAIL,
  DE_ACTIVATE_USER_REQUEST,
  DE_ACTIVATE_USER_SUCCESS,
  PROMOTE_USER_FAIL,
  PROMOTE_USER_REQUEST,
  PROMOTE_USER_SUCCESS,
  RESET_ACTIVATE_USER,
  RESET_BLOCK_USER,
  RESET_DELETE_USER,
  RESET_DEMOTE_USER,
  RESET_DE_ACTIVATE_USER,
  RESET_PROMOTE_USER,
  RESET_USER_DETAILS,
} from '../../constants/user-profile/userProfile.constants';

export const updateProfileReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPDATE_PROFILE_FAIL:
      // console.log('error');
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPDATE_PROFILE_RESET:
      return state;

    default:
      return state;
  }
};

export const changeProfilePictureReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case CHANGE_PROFILE_PICTURE_REQUEST:
      return { ...state, loading: true };

    case CHANGE_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case CHANGE_PROFILE_PICTURE_FAIL:
      // console.log('error');
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case CHANGE_PROFILE_PICTURE_RESET:
      return state;

    default:
      return state;
  }
};

export const userDetailsReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_USER_DETAILS:
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
    case RESET_DELETE_USER:
      return state;

    default:
      return state;
  }
};

export const activateUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case ACTIVATE_USER_REQUEST:
      return { ...state, loading: true };
    case ACTIVATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case ACTIVATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_ACTIVATE_USER:
      return initialStateRequest;

    default:
      return state;
  }
};

export const deActivateuserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DE_ACTIVATE_USER_REQUEST:
      return { ...state, loading: true };
    case DE_ACTIVATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DE_ACTIVATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_DE_ACTIVATE_USER:
      return initialStateRequest;
    default:
      return state;
  }
};

export const blockUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case BLOCK_USER_REQUEST:
      return { ...state, loading: true };
    case BLOCK_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case BLOCK_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_BLOCK_USER:
      return initialStateRequest;

    default:
      return state;
  }
};

export const promoteUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case PROMOTE_USER_REQUEST:
      return { ...state, loading: true };
    case PROMOTE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case PROMOTE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_PROMOTE_USER:
      return initialStateRequest;

    default:
      return state;
  }
};

export const demoteUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DEMOTE_USER_REQUEST:
      return { ...state, loading: true };
    case DEMOTE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DEMOTE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_DEMOTE_USER:
      return initialStateRequest;

    default:
      return state;
  }
};
