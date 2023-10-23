import { Dispatch } from 'redux';
import { StoreReducerTypes } from '../../store';
import {
  GET_USER_UPLOADED_FAIL,
  GET_USER_UPLOADED_REQUEST,
  GET_USER_UPLOADED_SUCCESS,
  UPLOAD_HOUSE_FAIL,
  UPLOAD_HOUSE_REQUEST,
  UPLOAD_HOUSE_SUCCESS,
} from '../../constants/dashboard/house.constants';
import axios from 'axios';
import { SERVER_URL } from '../../base-route/baseUrl';
import {
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

      console.log({ postHouse: data });

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
      console.log({ userHouses: data });
    } catch (error: any) {
      dispatch({
        type: GET_USER_UPLOADED_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
