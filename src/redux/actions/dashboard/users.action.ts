import React from 'react';

import { Dispatch } from 'redux';

import axios from 'axios';
import { StoreReducerTypes } from '../../store';
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from '../../constants/dashboard/user.constants';
import { SERVER_URL } from '../../base-route/baseUrl';
import {
  DeleteUserInterface,
  PageInterface,
} from '../../../types/dashboard/users.types';

export const getAllUsersAction =
  () =>
  async (
    dispatch: Dispatch,
    getState: ({ allUsers }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_ALL_USERS_REQUEST });

      const { data } = await axios.get(`${SERVER_URL}/all-users`);

      // console.log({ allusers: data });
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: GET_ALL_USERS_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteUserAction =
  ({ _id, token }: DeleteUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

          //   'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-user/${_id}`,
        config
      );

      // console.log({ delete: data });
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
