import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AdminDashboardInterface,
  LocalGovInterface,
  RegionArray,
  StateInterface,
} from '../types/select';
import { ArrowDown } from '../assets/icons';

type Props = {};

const LocalGovSelect = (props: Props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState<RegionArray>([]);
  const [selected, setSelected] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  // const Region = useSelector(
  //   (state: StoreReducerTypes) => state.fetchAllRegion
  // );

  // const stateFromRedux = Region.serverResponse;

  // useEffect(() => {
  //   setState(stateFromRedux);
  // }, [Region]);

  // useEffect(() => {
  //   dispatch(fecthAllRegionsAction() as any);
  // }, []);
  return (
    <div className="">
      {state?.length > 0
        ? state.map((x: AdminDashboardInterface, index: any) => {
            return (
              <div>
                <label
                  htmlFor={`location`}
                  className="mb-2 text-[17px] font-[600]"
                >
                  LGA
                </label>
                <div className="border px-4 py-2 rounded-md">
                  <p
                    className="w-full   outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
                    onClick={() => setShowDropDown((prev) => !prev)}
                  >
                    <input
                      type="text"
                      value={selected}
                      onChange={(e) => e.target.value}
                      placeholder="Select LGA "
                      className="border-none outline-none"
                    />

                    <img
                      src={ArrowDown}
                      alt="arrow icon"
                      width={18}
                      height={18}
                      className="text-end ml-auto"
                    />
                  </p>

                  {showDropDown && (
                    <>
                      <div className="h-[10rem] overflow-y-auto ">
                        {x?.states?.map((d: StateInterface, index: any) => {
                          return (
                            <div
                              key={index}
                              onClick={() => setShowDropDown(false)}
                              className="mb-6"
                            >
                              <h4 className=" uppercase mb-2">
                                {d?.state} State
                              </h4>

                              <div>
                                {d?.local_government?.map(
                                  (l: LocalGovInterface, index: any) => {
                                    return (
                                      <div key={index}>
                                        <p
                                          onClick={() =>
                                            setSelected(
                                              l?.local_government_name
                                            )
                                          }
                                          className="cursor-pointer"
                                        >
                                          {l?.local_government_name
                                            ? l?.local_government_name
                                            : 'No LGA Yet'}
                                        </p>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default LocalGovSelect;
