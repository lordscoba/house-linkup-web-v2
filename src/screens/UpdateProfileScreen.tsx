import React, { useEffect, useRef, useState } from 'react';
import { Footer, Nav } from '../components/layout';
import {
  changeProfilePictureAction,
  updateProfileAction,
  userDetailsAction,
} from '../redux/actions/user-profile/userProfile.actions';
import { UPDATE_PROFILE_RESET } from '../redux/constants/auth/auth.constants';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/loader';
import Message from '../components/message/Message';
import { CHANGE_PROFILE_PICTURE_RESET } from '../redux/constants/user-profile/userProfile.constants';

type Props = {};

const UpdateProfileScreen = (props: Props) => {
  return (
    <div>
      {' '}
      <Nav />
      <UpdateProfile />
      <Footer />{' '}
    </div>
  );
};

export default UpdateProfileScreen;

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef('') as any;

  const dataFromStorage =
    typeof !undefined && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage?.getItem('loginUser') as any)
      : null;

  const userId = dataFromStorage?.userDoc?._id;

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );

  const [image, setImage] = useState(null) as any;
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [isImage, setIsImage] = useState<boolean>(false);

  const updateProfile = useSelector(
    (state: StoreReducerTypes) => state.updateProfile
  );

  const profile_picture = useSelector(
    (state: StoreReducerTypes) => state?.changeProfilePicture
  );

  // console.log({ r: updateProfile?.serverResponse?.getUser?.image[0]?.url });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setImage(file);
      setIsImage(true);
    }
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateProfileAction({
        email,
        location,
        phone_number: phoneNumber,
        id: userId,
        username,
      }) as any
    );
    // dispatch({ type: UPDATE_PROFILE_RESET });
  };

  useEffect(() => {
    const email = userDetails?.serverResponse?.email;
    const location = userDetails?.serverResponse?.location;
    const phoneNumber = userDetails?.serverResponse?.phone_number;
    const username = userDetails?.serverResponse?.username;
    setEmail(email);
    setLocation(location);
    setPhoneNumber(phoneNumber);
    setUsername(username);
  }, []);

  useEffect(() => {
    dispatch(userDetailsAction({ _id: userId }) as any);
  }, []);

  useEffect(() => {
    dispatch(userDetailsAction({ _id: userId }) as any);
  }, [updateProfile, updateProfile]);

  useEffect(() => {
    if (isImage) {
      console.log({ ima: 'dispatching' });
      dispatch(changeProfilePictureAction({ image, userId }) as any);
    }
  }, [isImage]);

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (updateProfile?.success) {
      timeOut = setTimeout(() => {
        updateProfile.serverResponse.message = '';
        dispatch({ type: UPDATE_PROFILE_RESET });
      }, 2000);
    }

    if (updateProfile?.error) {
      timeOut = setTimeout(() => {
        updateProfile.serverError = '';
        dispatch({ type: UPDATE_PROFILE_RESET });
      }, 2000);
    }

    return () => clearTimeout(timeOut);
  }, [updateProfile]);

  useEffect(() => {
    setImage('');
    setIsImage(false);
    dispatch({ type: CHANGE_PROFILE_PICTURE_RESET });
  }, [profile_picture?.success]);

  return (
    <div className="flex flex-col items-center justify-center pt-[4rem]">
      <section className="relative">
        <div className="w-[144px] h-[144px] border-2 rounded-full p-1 uppercase flex items-center justify-center ">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          ) : userDetails?.serverResponse?.image?.length > 0 ? (
            <img
              src={userDetails?.serverResponse?.image?.[0]?.url}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-full h-full border-2 rounded-full p-2 fill-[grey]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          )}
        </div>
        <svg
          onClick={handleLabelClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute right-0 top-[60%] cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      </section>
      <div>
        <h2 className="uppercase mt-2 font-bold">
          {userDetails?.serverResponse?.full_name
            ? userDetails?.serverResponse?.full_name
            : null}
        </h2>
      </div>
      <button
        onClick={() => navigate('/')}
        type="button"
        className="px-6 py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
      >
        Go Home
      </button>

      <section className="mt-[2rem] w-full xl:w-[30rem] max-w-[30rem] px-[32px]">
        <div>
          {updateProfile?.loading ? <Loader variant="circular" /> : null}

          {updateProfile?.success ? (
            <Message type="success">
              {updateProfile?.serverResponse?.message}
            </Message>
          ) : null}

          {updateProfile?.error ? (
            <Message type="danger">{updateProfile?.serverError}</Message>
          ) : null}
        </div>
        <form onSubmit={handleProfileUpdate}>
          <h2 className=" font-bold my-1">Email: </h2>
          <div className="font-normal">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter Email"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>
          <h2 className=" font-bold my-1">Username: </h2>
          <div className="font-normal">
            <input
              type="location"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              id="location"
              placeholder="Enter Username"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>

          <h2 className=" font-bold my-1">Location: </h2>
          <div className="font-normal">
            <input
              type="location"
              value={location}
              onChange={(e: any) => setLocation(e.target.value)}
              id="location"
              placeholder="Enter Location"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>
          <h2 className=" font-bold my-1">Phone Number: </h2>
          <div className="font-normal">
            <input
              type="tel"
              name="phone_number"
              value={phoneNumber}
              onChange={(e: any) => setPhoneNumber(e.target.value)}
              id="phone_number"
              placeholder="Enter Phone Number"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
          >
            Update Profile
          </button>
        </form>
      </section>
    </div>
  );
};
