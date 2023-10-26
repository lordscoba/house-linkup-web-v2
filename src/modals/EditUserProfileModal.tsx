import React, { useRef, useState, useEffect } from 'react';
import { ImageInterface } from '../types/dashboard/users.types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeProfilePictureAction,
  updateProfileAction,
  userDetailsAction,
} from '../redux/actions/user-profile/userProfile.actions';
import { StoreReducerTypes } from '../redux/store';
import { UPDATE_PROFILE_RESET } from '../redux/constants/auth/auth.constants';
import Message from '../components/message/Message';
import { Loader } from '../components/loader';

type Props = {
  open: boolean;
  setOpen: (a: any) => void;
  // data: [];
  userId: string;
  userName: string;
  userEmail: string;
  user_number: string;
  user_location: string;
  user_fullName: string;
  imageUrl: Array<ImageInterface>;
};

const EditUserProfile = ({
  open,
  setOpen,
  userId,
  userEmail,
  user_fullName,
  user_location,
  user_number,
  userName,
  imageUrl,
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef('') as any;

  const [image, setImage] = useState('') as any;
  const [email, setEmail] = useState(userEmail || '');
  const [location, setLocation] = useState(user_location || '');
  const [phoneNumber, setPhoneNumber] = useState(user_number || '');
  const [username, setUsername] = useState(userName || '');

  const profile_picture = useSelector(
    (state: StoreReducerTypes) => state?.changeProfilePicture
  );
  const updatedImage = profile_picture?.serverResponse?.User?.image[0]?.url;

  const update_profile = useSelector(
    (state: StoreReducerTypes) => state?.updateProfile
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    setImage(file);
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateProfileAction({
        email,
        id: userId,
        location,
        phone_number: phoneNumber,
        username,
      }) as any
    );
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(changeProfilePictureAction({ image, userId }) as any);
  }, [image]);

  return (
    <>
      {' '}
      {open ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[40rem] h-[800px] px-6 rounded-lg">
            <p
              onClick={handleCloseModal}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>
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
                  ) : imageUrl?.length > 0 ? (
                    <img
                      src={
                        imageUrl[0]?.url
                          ? imageUrl[0]?.url
                          : updatedImage
                          ? updatedImage
                          : // : userDetails
                            // ? userDetails?.serverResponse?.image?.[0]?.url
                            ''
                      }
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
                  {/* {userDetails?.serverResponse?.full_name
                  ? userDetails?.serverResponse?.full_name
                  : null} */}
                  {user_fullName}
                </h2>
              </div>

              <section className="mt-[2rem] w-full xl:w-[30rem] max-w-[30rem] px-[32px]">
                <div>
                  {update_profile?.loading ? (
                    <Loader variant="circular" />
                  ) : null}

                  {update_profile?.success ? (
                    <Message type="success">
                      {update_profile?.serverResponse?.message}
                    </Message>
                  ) : null}

                  {update_profile?.error ? (
                    <Message type="danger">
                      {update_profile?.serverError}
                    </Message>
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
          </div>
        </section>
      ) : null}
    </>
  );
};

export default EditUserProfile;
