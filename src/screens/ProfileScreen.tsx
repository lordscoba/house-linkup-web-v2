import React, { useEffect, useRef, useState } from 'react';
import { Footer, Nav } from '../components/layout';
import { userDetailsAction } from '../redux/actions/user-profile/userProfile.actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../redux/store';

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <div>
      {' '}
      <Nav />
      <Profile />
      <Footer />{' '}
    </div>
  );
};

export default ProfileScreen;

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const fileInputRef = useRef('') as any;

  const dataFromStorage =
    typeof !undefined && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage?.getItem('loginUser') as any)
      : null;

  const userId = dataFromStorage?.userDoc?._id;

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );
  const updateProfile = useSelector(
    (state: StoreReducerTypes) => state.updateProfile
  );

  useEffect(() => {
    dispatch(userDetailsAction({ _id: userId }) as any);
  }, []);

  useEffect(() => {
    dispatch(userDetailsAction({ _id: userId }) as any);
  }, [updateProfile]);

  return (
    <div className="flex flex-col items-center justify-center pt-[4rem]">
      <section className="relative">
        <div className="w-[144px] h-[144px] border-2 rounded-full p-1 uppercase flex items-center justify-center ">
          {userDetails?.success ? (
            <>
              {userDetails?.serverResponse?.image?.length > 0 ? (
                <img
                  src={userDetails?.serverResponse?.image[0]?.url}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <p className="text-[#69B99D] text-[4rem]">
                  {' '}
                  {userDetails?.serverResponse?.full_name.slice(0, 1)}
                </p>
              )}
            </>
          ) : (
            <p className="text-[#69B99D] text-[4rem]">
              {' '}
              {dataFromStorage?.userDoc?.full_name.slice(0, 1)}
            </p>
          )}
        </div>
      </section>
      <div>
        <h2 className="uppercase mt-2 font-bold">
          {userDetails?.serverResponse?.full_name
            ? userDetails?.serverResponse?.full_name
            : dataFromStorage?.userDoc?.full_name}
        </h2>
        {/* <button className="w-full border mt-1 py-1 px-6 rounded-lg bg-[#723d3d] text-[#fff]">
          Log Out
        </button> */}
      </div>
      <section className="mt-[2rem] w-full xl:w-[30rem] max-w-[30rem] px-[32px]">
        <h2 className="border-b border-[#69B99D] pb-1 font-bold my-6">
          Email:{' '}
          <span className="font-normal">
            {userDetails?.serverResponse?.email
              ? userDetails?.serverResponse?.email
              : dataFromStorage?.userDoc?.email}
          </span>
        </h2>
        <h2 className="border-b border-[#69B99D] pb-1 font-bold my-6">
          Username:{' '}
          <span className="font-normal">
            {userDetails?.serverResponse?.username
              ? userDetails?.serverResponse?.username
              : dataFromStorage?.userDoc?.username || 'Add Location'}
          </span>
        </h2>
        <h2 className="border-b border-[#69B99D] pb-1 font-bold my-6">
          Location:{' '}
          <span className="font-normal">
            {userDetails?.serverResponse?.location
              ? userDetails?.serverResponse?.location
              : dataFromStorage?.userDoc?.location || 'Add Location'}
          </span>
        </h2>

        <h2 className="border-b border-[#69B99D] pb-1 font-bold my-6">
          Phone Number:{' '}
          <span className="font-normal">
            {userDetails?.serverResponse?.phone_number
              ? userDetails?.serverResponse?.phone_number
              : dataFromStorage?.userDoc?.phone_number || 'Add Phone Number'}
          </span>
        </h2>

        <button
          type="button"
          onClick={() =>
            navigate(`/update-profile/${dataFromStorage?.userDoc?._id}`)
          }
          className="w-full py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
        >
          Update Profile
        </button>
      </section>
    </div>
  );
};
