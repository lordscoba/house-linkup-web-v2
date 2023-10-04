import React from 'react';

type Props = {
  country?: string;
  state?: string;
  local_gov_name?: string;
  town_name?: string;
  show: boolean;
  stateId?: string;
  full_name: string;
  countryId?: string;
  localGovId?: string;
  setShow: (a: any) => void;
  deleteFunc?: (a: any) => void;
  text: string;
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
}: Props) => {
  return (
    <>
      {show ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[30rem] h-[250px] px-6 rounded-lg mt-8">
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

              <p className="py-6">
                Are You sure you want to delete{' '}
                <span className="font-bold">
                  {country ? (
                    <h4>{country} Country</h4>
                  ) : state ? (
                    <h4>{state} State</h4>
                  ) : local_gov_name ? (
                    <div>{local_gov_name} LGA</div>
                  ) : town_name ? (
                    <div>{town_name} Town</div>
                  ) : full_name ? (
                    <span>{full_name}</span>
                  ) : (
                    text
                  )}
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
                  onClick={deleteFunc}
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
