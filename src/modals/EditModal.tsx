import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FlexibleInput from '../components/home/FlexibleInput';
import {
  editLgaAction,
  editStateAction,
  editTownAction,
} from '../redux/actions/dashboard/location.action';

type Props = {
  Region: string;
  countryId: string;
  town_name?: string | any;
  local_gov_name?: string | any;
  show: boolean;
  setShow: (a: any) => void;
  stateId?: string;
  localGovId?: string;
  townId?: string;
  location: string;
  screen: string;
  state_name?: string | any;
};

const EditModal = ({
  Region,
  countryId,
  setShow,
  show,
  town_name,
  stateId,
  localGovId,
  townId,
  location,
  screen,
  local_gov_name,
  state_name,
}: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!(countryId && text)) return;
    if (screen === 'town') {
      dispatch(
        editTownAction({
          documentId: countryId,
          localGovId,
          stateId,
          town_name: text,
          townId,
        }) as any
      );
    }

    if (screen === 'state') {
      dispatch(
        editStateAction({
          documentId: countryId,
          state_name: text,
          stateId,
        }) as any
      );
    }

    if (screen === 'lga') {
      dispatch(
        editLgaAction({
          documentId: countryId,
          local_gov_name: text,
          localGovId,
          stateId,
        }) as any
      );
    }

    setShow(false);
  };

  useEffect(() => {
    if (screen === 'town') {
      setText(town_name);
    }
    if (screen === 'lga') {
      setText(local_gov_name);
    }
    if (screen === 'state') {
      setText(state_name);
    }
  }, [show]);

  return (
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
                  <label htmlFor="state"> Edit Town </label>

                  <FlexibleInput
                    type="text"
                    value={text}
                    onChange={setText}
                    placeholder={`Edit ${location}`}
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
  );
};

export default EditModal;
