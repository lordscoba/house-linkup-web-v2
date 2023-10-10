import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLocalGovAction,
  addStateAction,
  addTownAction,
} from '../redux/actions/dashboard/location.action';
import { StoreReducerTypes } from '../redux/store';

type Props = {
  Region: string;
  countryId: string;
  local_gov_name?: string;
  show: boolean;
  setShow: (a: any) => void;
  stateId?: string | any;
  localGovId?: string;
  location: string;
  index?: any;
  screen: string;
  // handleSubmit: () => void;
};

const AddLocationModal = ({
  Region,
  countryId,
  localGovId,
  local_gov_name,
  setShow,
  show,
  stateId,
  location,
  index,
  screen,
}: Props) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!text) return;
    if (screen == 'LGA') {
      dispatch(
        addLocalGovAction({
          countryId,
          local_government_name: text,
          stateId,
        }) as any
      );
    }

    if (screen === 'Town') {
      dispatch(
        addTownAction({
          documentId: countryId,
          localGovId,
          stateId,
          town_name: text,
        }) as any
      );
    }

    if (screen === 'state') {
      dispatch(addStateAction({ countryId, state: text }) as any);
    }
    setShow(false);
  };

  return (
    <>
      <>
        {show ? (
          <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
            <div className="bg-[#fff] w-full md:w-[30rem] h-[350px] px-6 rounded-lg mt-8">
              <p
                onClick={() => setShow((prev: boolean) => !prev)}
                className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
              >
                <span className="text-[1rem] text-[#fff]">X</span>
              </p>
              <section className="flex flex-col items-center justify-center mt-4">
                <h4 className="text-[#222] text-[1.1rem]">
                  Region / Country : {Region}
                </h4>
                <form className=" w-full my-6">
                  <div>
                    <label htmlFor="state"> Edit {location} :</label>

                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={text}
                      onChange={(e: any) => setText(e.target.value)}
                      placeholder={`Add ${location}`}
                      className="py-2 border w-full px-2 my-2"
                    />
                  </div>
                </form>

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
                    onClick={handleSubmit}
                    className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                  >
                    Submit
                  </button>
                </div>
              </section>
            </div>
          </section>
        ) : null}
      </>
    </>
  );
};

export default AddLocationModal;
