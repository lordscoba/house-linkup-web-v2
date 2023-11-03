import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../redux/store';
import {
  demotePosterToUserAction,
  promoteUserToPosterAction,
} from '../redux/actions/user-profile/userProfile.actions';

type Props = {
  setShow: (a: any) => void;
  show: boolean;
  full_name: string;
  userId: string;
  token: string;
  action: string;
};

const PromoteToPosterModal = ({
  setShow,
  show,
  full_name,
  userId,
  token,
  action,
}: Props) => {
  const dispatch = useDispatch();
  // const all_users = useSelector((state: StoreReducerTypes) => state?.allUsers);
  const promote = useSelector(
    (state: StoreReducerTypes) => state?.promoteUserToPoster
  );

  const handleModalClosed = () => {
    setShow(false);
  };

  const promoteToPoster = () => {
    if (action === 'promote') {
      dispatch(promoteUserToPosterAction({ userId, token }) as any);
    }

    dispatch(demotePosterToUserAction({ userId, token }) as any);

    setShow(false);
  };

  // useEffect(() => {
  //   console.log({ token, userId });
  // }, [promote]);
  return (
    <div>
      {show && (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[40rem] h-[300px] px-6 rounded-lg">
            <p
              onClick={handleModalClosed}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>
            <div className="py-6">
              <p className="text-[1.1rem]">
                You are about to{' '}
                <span> {action === 'promote' ? 'promote' : 'demote'} </span>{' '}
                <span className="font-bold capitalize">{full_name}</span> to
                <span className="font-bold capitalize">
                  {' '}
                  <span> {action === 'promote' ? 'Poster' : 'User'} </span>{' '}
                  position{' '}
                </span>{' '}
                . Do you want to proceed with this process?
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => setShow((prev: boolean) => !prev)}
                className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={promoteToPoster}
                // onClick={deleteCountry}
                className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
              >
                YES
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PromoteToPosterModal;
