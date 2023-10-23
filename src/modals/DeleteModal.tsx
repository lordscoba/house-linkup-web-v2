import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteLocalGovAction,
  deleteStateAction,
  deleteTownAction,
} from '../redux/actions/dashboard/location.action';
import { RESET_DELETE_LOCAL_GOV } from '../redux/constants/dashboard/location.constants';

type Props = {
  _id?: string;
  house_type?: string;
  country?: string;
  state?: string;
  local_gov_name?: string;
  town_name?: string;
  show: boolean;
  stateId?: string;
  full_name?: string;
  countryId?: string;
  localGovId?: string;
  setShow: (a: any) => void;
  deleteFunc?: (a: any) => void;
  text?: string;
  screen?: string;
  townId?: string;
};

const DeleteModal = ({
  setShow,
  show,
  text,
  country,
  countryId,
  deleteFunc,
  localGovId,
  state,
  stateId,
  local_gov_name,
  town_name,
  full_name,
  screen,
  townId,
  _id,
  house_type,
}: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (screen === 'lga') {
      dispatch(
        deleteLocalGovAction({
          documentId: countryId,
          localGovId,
          stateId,
        }) as any
      );
      dispatch({ type: RESET_DELETE_LOCAL_GOV });
    }

    if (screen === 'town') {
      dispatch(
        deleteTownAction({
          documentId: countryId,
          localGovId,
          stateId,
          townId,
        }) as any
      );
    }

    if (screen === 'state') {
      dispatch(deleteStateAction({ documentId: countryId, stateId }) as any);
    }
    setShow(false);
  };
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
              {country || state ? (
                <p className="text-[#222] text-[1.1rem] font-medium">
                  {' '}
                  Region / Country : {country}
                </p>
              ) : null}

              <p className="py-6 text-center">
                Are You sure you want to delete{' '}
                {house_type ? `this house : ${house_type}` : ''}
                <span className="font-bold">
                  {country ? (
                    <h4>
                      {country} {text}
                    </h4>
                  ) : state ? (
                    <h4>
                      {state} {text}
                    </h4>
                  ) : local_gov_name ? (
                    <div>
                      {local_gov_name} {text}
                    </div>
                  ) : town_name ? (
                    <div>
                      {town_name} {text}
                    </div>
                  ) : full_name ? (
                    <span>{full_name}</span>
                  ) : null}
                </span>{' '}
              </p>

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
                  // onClick={deleteCountry}
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

export default DeleteModal;
