import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteHouseAction,
  deleteHouseImageAction,
} from '../redux/actions/dashboard/house.action';
import { StoreReducerTypes } from '../redux/store';
import { DELETE_HOUSE_IMAGE_RESET } from '../redux/constants/dashboard/house.constants';
import { Loader } from '../components/loader';

type Props = {
  show: boolean;
  setShow: (a: any) => void;

  token: string;
  houseId: string;
  imageId: string;
};

const DeleteHouseImageModal = ({
  show,
  setShow,
  houseId,
  token,
  imageId,
}: Props) => {
  const dispatch = useDispatch();
  const deleteHouseImage = useSelector(
    (state: StoreReducerTypes) => state?.deleteHouseImage
  );

  const handleDelete = () => {
    dispatch(deleteHouseImageAction({ houseId, token, imageId }) as any);
  };

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (deleteHouseImage?.success) {
      setShow(false);
      timeOut = setTimeout(() => {
        deleteHouseImage.serverResponse.message = '';
        dispatch({ type: DELETE_HOUSE_IMAGE_RESET });
      }, 2000);
    }

    if (deleteHouseImage?.error) {
      timeOut = setTimeout(() => {
        deleteHouseImage.serverError = '';
        dispatch({ type: DELETE_HOUSE_IMAGE_RESET });
      }, 2000);
    }

    return () => clearTimeout(timeOut);
  }, [deleteHouseImage]);

  return (
    <>
      {show ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[30rem] h-[250px] px-3 rounded-lg mt-8">
            <p
              onClick={() => setShow((prev: boolean) => !prev)}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>
            <section className="flex flex-col items-center justify-center mt-4">
              <p className="py-6 text-center">
                Are You sure you want to delete this image with
                <br /> ID :<span className="font-bold">{imageId}</span>
              </p>
              {deleteHouseImage?.loading ? <Loader variant="circular" /> : null}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShow((prev: boolean) => !prev)}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  YES
                </button>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DeleteHouseImageModal;
