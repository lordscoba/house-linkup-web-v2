import {
  forgotPasswordReducer,
  loginReducer,
  registerReducer,
  resetPasswordReducer,
  updateProfileReducer,
  userDetailsReducer,
} from './reducers/auth-reducers/auth.reducers';
import {
  deleteHouseImageReducer,
  deleteHouseReducer,
  editHouseImageReducer,
  getUserUploadedHouseReducer,
  updateHouseReducer,
  uploadHouseReducer,
} from './reducers/dashboard/house.reducers';

import {
  addLocalGovReducer,
  addStateReducer,
  addTownReducer,
  createRegionReducer,
  deleteCountryReducer,
  deleteLocalGovReducer,
  deleteStateReducer,
  deleteTownReducer,
  editLgaReducer,
  editStateReducer,
  editTownReducer,
  fetchAllRegionReducer,
} from './reducers/dashboard/location.reducers';
import {
  allUsersReducer,
  deleteUserReducer,
} from './reducers/dashboard/user.reducers';
import {
  activateUserReducer,
  blockUserReducer,
  changeProfilePictureReducer,
  deActivateuserReducer,
  demoteUserReducer,
  promoteUserReducer,
} from './reducers/user-profile-reducers/userProfile.reducer';

const {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
} = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');
const { default: thunk } = require('redux-thunk');

export type StoreReducerTypes = {
  registerUser: ReturnType<typeof registerReducer>;
  loginUser: ReturnType<typeof loginReducer>;
  userDetails: ReturnType<typeof userDetailsReducer>;
  updateProfile: ReturnType<typeof updateProfileReducer>;
  changeProfilePicture: ReturnType<typeof changeProfilePictureReducer>;
  resetPassword: ReturnType<typeof resetPasswordReducer>;
  forgotPassword: ReturnType<typeof forgotPasswordReducer>;
  // DASHBOARD --- USERS
  allUsers: ReturnType<typeof allUsersReducer>;
  deleteUser: ReturnType<typeof deleteUserReducer>;
  // getUser: ReturnType<typeof getUserReducer>;
  // dashboard
  activateUser: ReturnType<typeof activateUserReducer>;
  deActivateUser: ReturnType<typeof deActivateuserReducer>;
  blockUser: ReturnType<typeof blockUserReducer>;
  promoteUser: ReturnType<typeof promoteUserReducer>;
  demoteUser: ReturnType<typeof demoteUserReducer>;
  // LOCATION MANAGEMENT
  createNewRegion: ReturnType<typeof createRegionReducer>;
  fetchAllRegion: ReturnType<typeof fetchAllRegionReducer>;
  addState: ReturnType<typeof addStateReducer>;
  addLocalGov: ReturnType<typeof addLocalGovReducer>;
  addTown: ReturnType<typeof addTownReducer>;
  deleteState: ReturnType<typeof deleteStateReducer>;
  deleteLocalGov: ReturnType<typeof deleteLocalGovReducer>;
  deleteTown: ReturnType<typeof deleteTownReducer>;
  deleteCountry: ReturnType<typeof deleteCountryReducer>;
  editState: ReturnType<typeof editStateReducer>;
  editLocalGov: ReturnType<typeof editLgaReducer>;
  editTown: ReturnType<typeof editTownReducer>;
  // users dashboard
  uploadHouse: ReturnType<typeof uploadHouseReducer>;
  getUserUploads: ReturnType<typeof getUserUploadedHouseReducer>;
  updateHouse: ReturnType<typeof updateHouseReducer>;
  deleteHouse: ReturnType<typeof deleteHouseReducer>;
  editHouseImage: ReturnType<typeof editHouseImageReducer>;
  deleteHouseImage: ReturnType<typeof deleteHouseImageReducer>;
};

const reducer: StoreReducerTypes = combineReducers({
  loginUser: loginReducer,
  registerUser: registerReducer,
  userDetails: userDetailsReducer,
  updateProfile: updateProfileReducer,
  resetPassword: resetPasswordReducer,
  forgotPassword: forgotPasswordReducer,
  changeProfilePicture: changeProfilePictureReducer,
  // DASHBOARD--- USERS
  allUsers: allUsersReducer,
  deleteUser: deleteUserReducer,
  // dashboard
  activateUser: activateUserReducer,
  deActivateUser: deActivateuserReducer,
  blockUser: blockUserReducer,
  promoteUser: promoteUserReducer,
  demoteUser: demoteUserReducer,
  // LOCATION MANAGEMENT
  createNewRegion: createRegionReducer,
  fetchAllRegion: fetchAllRegionReducer,
  addState: addStateReducer,
  addLocalGov: addLocalGovReducer,
  addTown: addTownReducer,
  deleteState: deleteStateReducer,
  deleteLocalGov: deleteLocalGovReducer,
  deleteTown: deleteTownReducer,
  deleteCountry: deleteCountryReducer,
  editState: editStateReducer,
  editLocalGov: editLgaReducer,
  editTown: editTownReducer,
  // users dashboard
  uploadHouse: uploadHouseReducer,
  getUserUploads: getUserUploadedHouseReducer,
  updateHouse: updateHouseReducer,
  deleteHouse: deleteHouseReducer,
  editHouseImage: editHouseImageReducer,
  deleteHouseImage: deleteHouseImageReducer,
});

const initialState: any = {
  loginUser:
    typeof window !== 'undefined' && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage.getItem('loginUser') as any)
      : null,
};

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
