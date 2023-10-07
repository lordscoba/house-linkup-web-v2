import { Dispatch } from 'redux';
import axios from 'axios';
import {
  AddLocalGovInterface,
  AddStateInterface,
  AddTownInterface,
  CreateNewRegionInterface,
  DeleteCountryInterface,
  DeleteLocalGovInterface,
  DeleteStateInterface,
  DeleteTownInterface,
  EditLgaInterface,
  EditStateInterface,
  EditTownInterface,
} from '../../../types/dashboard/location.types';
import { StoreReducerTypes } from '../../store';
import {
  ADD_LOCAL_GOV_FAIL,
  ADD_LOCAL_GOV_REQUEST,
  ADD_LOCAL_GOV_SUCCESS,
  ADD_STATE_FAIL,
  ADD_STATE_REQUEST,
  ADD_STATE_SUCCESS,
  ADD_TOWN_FAIL,
  ADD_TOWN_REQUEST,
  ADD_TOWN_SUCCESS,
  CREATE_REGION_FAIL,
  CREATE_REGION_REQUEST,
  CREATE_REGION_SUCCESS,
  DELETE_COUNTRY_FAIL,
  DELETE_COUNTRY_REQUEST,
  DELETE_COUNTRY_SUCCESS,
  DELETE_LOCAL_GOV_FAIL,
  DELETE_LOCAL_GOV_REQUEST,
  DELETE_LOCAL_GOV_SUCCESS,
  DELETE_STATE_FAIL,
  DELETE_STATE_REQUEST,
  DELETE_STATE_SUCCESS,
  DELETE_TOWN_FAIL,
  DELETE_TOWN_REQUEST,
  DELETE_TOWN_SUCCESS,
  EDIT_LGA_FAIL,
  EDIT_LGA_REQUEST,
  EDIT_LGA_SUCCESS,
  EDIT_STATE_FAIL,
  EDIT_STATE_REQUEST,
  EDIT_STATE_SUCCESS,
  EDIT_TOWN_FAIL,
  EDIT_TOWN_REQUEST,
  EDIT_TOWN_SUCCESS,
  GET_ALL_REGION_FAIL,
  GET_ALL_REGION_REQUEST,
  GET_ALL_REGION_SUCCESS,
} from '../../constants/dashboard/location.constants';
import { SERVER_URL } from '../../base-route/baseUrl';

export const createNewRegionAction =
  ({ region, state }: CreateNewRegionInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ createNewRegion }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: CREATE_REGION_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/create-new-region`,
        { region, state },
        config
      );

      // console.log({ demoteUser: data });

      dispatch({ type: CREATE_REGION_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: CREATE_REGION_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const fecthAllRegionsAction =
  () =>
  async (
    dispatch: Dispatch,
    getState: ({ fetchAllRegion }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_ALL_REGION_REQUEST });
      const { data } = await axios.get(`${SERVER_URL}/all-regions`);

      dispatch({ type: GET_ALL_REGION_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: GET_ALL_REGION_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const addStateAction =
  ({ countryId, state }: AddStateInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ addState }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: ADD_STATE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/add-state/${countryId}`,
        { state },
        config
      );

      dispatch({ type: ADD_STATE_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: ADD_STATE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const addLocalGovAction =
  ({ countryId, local_government_name, stateId }: AddLocalGovInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ addLocalGov }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: ADD_LOCAL_GOV_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/add-local-gov/${countryId}`,
        { stateId, local_government_name },
        config
      );

      dispatch({ type: ADD_LOCAL_GOV_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: ADD_LOCAL_GOV_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const addTownAction =
  ({ stateId, documentId, localGovId, town_name }: AddTownInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ addTown }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: ADD_TOWN_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/add-town?documentId=${documentId}&stateId=${stateId}&local_govId=${localGovId}`,
        { town_name },
        config
      );

      dispatch({ type: ADD_TOWN_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: ADD_TOWN_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteStateAction =
  ({ documentId, stateId }: DeleteStateInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteState }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_STATE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-state?documentId=${documentId}&stateId=${stateId}`
      );

      dispatch({ type: DELETE_STATE_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_STATE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteLocalGovAction =
  ({ documentId, stateId, localGovId }: DeleteLocalGovInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteLocalGov }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_LOCAL_GOV_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-local-gov?documentId=${documentId}&stateId=${stateId}&localGovId=${localGovId}`,
        config
      );

      dispatch({ type: DELETE_LOCAL_GOV_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_LOCAL_GOV_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteTownAction =
  ({ documentId, stateId, localGovId, townId }: DeleteTownInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteTown }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_TOWN_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-town?documentId=${documentId}&stateId=${stateId}&local_govId=${localGovId}&townId=${townId}`,
        config
      );

      dispatch({ type: DELETE_TOWN_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_TOWN_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteCountryAction =
  ({ documentId }: DeleteCountryInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteCountry }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_COUNTRY_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-region?documentId=${documentId}`,
        config
      );

      dispatch({ type: DELETE_COUNTRY_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_COUNTRY_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const editStateAction =
  ({ documentId, stateId, state_name }: EditStateInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ editState }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: EDIT_STATE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/update-state?documentId=${documentId}&stateId=${stateId}`,
        { state_name },
        config
      );

      dispatch({ type: EDIT_STATE_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: EDIT_STATE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const editLgaAction =
  ({ documentId, stateId, local_gov_name, localGovId }: EditLgaInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ editLocalGov }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: EDIT_LGA_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/update-local-gov?documentId=${documentId}&stateId=${stateId}&localGovId=${localGovId}`,
        { local_gov_name },
        config
      );

      dispatch({ type: EDIT_LGA_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: EDIT_LGA_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const editTownAction =
  ({ documentId, stateId, town_name, townId, localGovId }: EditTownInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ editTown }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: EDIT_TOWN_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/update-town?documentId=${documentId}&stateId=${stateId}&localGovId=${localGovId}&townId=${townId}`,
        { town_name },
        config
      );

      dispatch({ type: EDIT_TOWN_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: EDIT_TOWN_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
