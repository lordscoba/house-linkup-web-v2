import axios from 'axios';
import {
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from '../../constants/auth/auth.constants';
import { StoreReducerTypes } from '../../store';
import { Dispatch } from 'redux';
import { SERVER_URL } from '../../base-route/baseUrl';

import {
  ChangeProfileInterface,
  UpdateProfileInterface,
  UserDetailsInterface,
} from '../../../types/userProfileTypes';
import {
  ACTIVATE_USER_FAIL,
  ACTIVATE_USER_REQUEST,
  ACTIVATE_USER_SUCCESS,
  BLOCK_USER_FAIL,
  BLOCK_USER_REQUEST,
  BLOCK_USER_SUCCESS,
  CHANGE_PROFILE_PICTURE_FAIL,
  CHANGE_PROFILE_PICTURE_REQUEST,
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
} from '../../constants/user-profile/userProfile.constants';
import {
  DeleteUserInterface,
  IdInterface,
} from '../../../types/dashboard/users.types';
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from '../../constants/dashboard/user.constants';

export const updateProfileAction =
  ({ email, location, phone_number, username, id }: UpdateProfileInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ changeProfilePicture }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      let FD = new FormData();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          //   'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/update-profile/${id}`,
        { email, location, phone_number, username },
        config
      );

      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const changeProfilePictureAction =
  ({ image, userId }: ChangeProfileInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ updateProfile }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: CHANGE_PROFILE_PICTURE_REQUEST });

      let FD = new FormData();

      FD.append('image', image);
      FD.append('userId', userId);

      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/update-profile-pic`,
        FD,
        config
      );

      dispatch({ type: CHANGE_PROFILE_PICTURE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: CHANGE_PROFILE_PICTURE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const userDetailsAction =
  ({ _id }: UserDetailsInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ userDetails }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });

      const { data } = await axios.get(`${SERVER_URL}/user-details/${_id}`);

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteUserAction =
  ({ _id }: DeleteUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });

      const { data } = await axios.delete(`${SERVER_URL}/delete-user/${_id}`);

      // console.log({ delete: data });
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const activateUserAction =
  ({ id }: IdInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ activateUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: ACTIVATE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          //   'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/activate-user/${id}`,
        config
      );

      // console.log({ activate: data });

      dispatch({ type: ACTIVATE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ACTIVATE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deActivateuserAction =
  ({ id }: IdInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deActivateUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DE_ACTIVATE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/deactivate-user/${id}`,
        config
      );

      // console.log({ deactivate: data });

      dispatch({ type: DE_ACTIVATE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DE_ACTIVATE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const blockuserAction =
  ({ id }: IdInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ blockUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: BLOCK_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/block-user/${id}`,
        config
      );

      // console.log({ blockUser: data });

      dispatch({ type: BLOCK_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: BLOCK_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const promoteUserAction =
  ({ id }: IdInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ promoteUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: PROMOTE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/promote-user/${id}`,
        config
      );

      // console.log({ promoteUser: data });

      dispatch({ type: PROMOTE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: PROMOTE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const demoteUserAction =
  ({ id }: IdInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ demoteUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DEMOTE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/demote-user/${id}`,
        config
      );

      // console.log({ demoteUser: data });

      dispatch({ type: DEMOTE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DEMOTE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
