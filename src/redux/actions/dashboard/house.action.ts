import { Dispatch } from 'redux';
import { StoreReducerTypes } from '../../store';
import {
  DELETE_HOUSE_FAIL,
  DELETE_HOUSE_IMAGE_FAIL,
  DELETE_HOUSE_IMAGE_REQUEST,
  DELETE_HOUSE_IMAGE_SUCCESS,
  DELETE_HOUSE_REQUEST,
  DELETE_HOUSE_SUCCESS,
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  GET_USER_UPLOADED_FAIL,
  GET_USER_UPLOADED_REQUEST,
  GET_USER_UPLOADED_SUCCESS,
  UPDATE_HOUSE_FAIL,
  UPDATE_HOUSE_IMAGE_FAIL,
  UPDATE_HOUSE_IMAGE_REQUEST,
  UPDATE_HOUSE_IMAGE_SUCCESS,
  UPDATE_HOUSE_REQUEST,
  UPDATE_HOUSE_SUCCESS,
  UPLOAD_HOUSE_FAIL,
  UPLOAD_HOUSE_REQUEST,
  UPLOAD_HOUSE_SUCCESS,
} from '../../constants/dashboard/house.constants';
import axios from 'axios';
import { SERVER_URL } from '../../base-route/baseUrl';
import {
  DeleteHouseImageInterface,
  DeleteHouseInterface,
  FetchHouseInterface,
  UpdateHouseImageInterface,
  UpdateHouseInterface,
  UploadHouseInterface,
  UserHouseUploadsInterface,
} from '../../../types/dashboard/house.types';

export const uploadHouseUserAction =
  ({
    address,
    town,
    description,
    email,
    image,
    full_Name,
    house_type,
    local_government,
    price,
    state,
    status,
    totalNum_ofBathroom,
    totalNum_ofKitchen,
    totalNum_ofParlor,
    totalNum_ofRooms,
    totalNum_ofToilet,
    token,
  }: UploadHouseInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ uploadHouse }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPLOAD_HOUSE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const FD = new FormData();
      // image.forEach((img: string, index: any) => {
      //   FD.append(`image${index}`, img);
      // });

      for (let i = 0; i < image.length; i++) {
        FD.append(`image`, image[i][0]);
      }
      // FD.append('image', image);
      FD.append('address', address);
      FD.append('town', town);
      FD.append('description', description);
      FD.append('poster_email', email);
      FD.append(' full_Name', full_Name);
      FD.append('house_type', house_type);
      FD.append('local_government', local_government);
      //   FD.append('poster', poster);
      FD.append('price', price);
      FD.append('state', state);
      FD.append('status', status);
      FD.append('totalNum_ofBathroom', totalNum_ofBathroom);
      FD.append('totalNum_ofKitchen', totalNum_ofKitchen);
      FD.append('totalNum_ofParlor', totalNum_ofParlor);
      FD.append('totalNum_ofRooms', totalNum_ofRooms);
      FD.append('totalNum_ofToilet', totalNum_ofToilet);
      // FD.append('token', token);

      const { data } = await axios.post(
        `${SERVER_URL}/upload-property`,
        FD,
        config
      );

      dispatch({ type: UPLOAD_HOUSE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: UPLOAD_HOUSE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const getUserUploadedHouseAction =
  ({ token }: UserHouseUploadsInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ getUserUploads }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_USER_UPLOADED_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `${SERVER_URL}/get-user-uploads`,
        config
      );
      dispatch({ type: GET_USER_UPLOADED_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: GET_USER_UPLOADED_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const updateHouseAction =
  ({
    token,
    houseId,
    description,
    house_type,
    local_government,
    price,
    state,
    totalNum_ofBathroom,
    totalNum_ofKitchen,
    totalNum_ofParlor,
    totalNum_ofRooms,
    totalNum_ofToilet,
    town,
  }: UpdateHouseInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ updateHouse }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPDATE_HOUSE_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/update-house/${houseId}`,
        {
          description,
          house_type,
          local_government,
          price,
          state,
          totalNum_ofBathroom,
          totalNum_ofKitchen,
          totalNum_ofParlor,
          totalNum_ofRooms,
          totalNum_ofToilet,
          town,
        },
        config
      );
      dispatch({ type: UPDATE_HOUSE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: UPDATE_HOUSE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteHouseAction =
  ({ token, houseId }: DeleteHouseInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteHouse }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_HOUSE_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-house?houseId=${houseId}`,
        config
      );
      dispatch({ type: DELETE_HOUSE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_HOUSE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const editHouseImageAction =
  ({ token, houseId, image, imageId }: UpdateHouseImageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ editHouseImage }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPDATE_HOUSE_IMAGE_REQUEST });

      const FD = new FormData();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      FD.append('houseId', houseId);
      FD.append('image', image);
      FD.append('imageId', imageId);

      const { data } = await axios.put(
        `${SERVER_URL}/update-house-image`,
        FD,
        config
      );
      dispatch({ type: UPDATE_HOUSE_IMAGE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: UPDATE_HOUSE_IMAGE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteHouseImageAction =
  ({ token, houseId, imageId }: DeleteHouseImageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteHouseImage }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_HOUSE_IMAGE_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-house-image?houseId=${houseId}&imageId=${imageId}`,
        config
      );
      dispatch({ type: DELETE_HOUSE_IMAGE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_HOUSE_IMAGE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const fetchHouseAction =
  ({ token }: FetchHouseInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ fetchHouse }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: FETCH_HOUSE_REQUEST });

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `${SERVER_URL}/fetch-all-houses`,
        config
      );
      dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: FETCH_HOUSE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
