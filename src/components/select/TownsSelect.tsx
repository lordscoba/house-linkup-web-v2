import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreReducerTypes } from '../../redux/store';
import { ArrowDown } from '../../assets/icons';
import {
  AdminDashboardInterface,
  LocalGovInterface,
  RegionArray,
  StateInterface,
  TownsInterface,
} from '../../types/select';
import { fecthAllRegionsAction } from '../../redux/actions/dashboard/location.action';

type Props = {
  townValue?: string;
};

const TownsSelect = ({ townValue }: Props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState<RegionArray>([]);
  const [selected, setSelected] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );

  const stateFromRedux = Region.serverResponse;

  useEffect(() => {
    setState(stateFromRedux);
  }, [Region]);

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
  }, []);

  useEffect(() => {
    townValue = selected;
  }, [selected]);
  return (
    <div className="">
      {state?.length > 0
        ? state.map((x: AdminDashboardInterface, index: any) => {
            return (
              <div key={index}>
                <label
                  htmlFor={`location`}
                  className="mb-2 text-[17px] font-[600]"
                >
                  Towns
                </label>
                <div className="border px-4 py-2 rounded-md">
                  <p
                    className="w-full border-none rounded-lg outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
                    onClick={() => setShowDropDown((prev) => !prev)}
                  >
                    <input
                      type="text"
                      value={selected}
                      onChange={(e) => e.target.value}
                      placeholder="Select Town "
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
                            >
                              <div>
                                {d?.local_government?.map(
                                  (l: LocalGovInterface, index: any) => {
                                    return (
                                      <div key={index} className="mb-6">
                                        <h4 className=" uppercase">
                                          {l?.local_government_name} LGA
                                        </h4>

                                        <div>
                                          {l.towns?.map(
                                            (t: TownsInterface, index: any) => {
                                              return (
                                                <div key={index}>
                                                  <p
                                                    onClick={() =>
                                                      setSelected(t?.town_name)
                                                    }
                                                    className="cursor-pointer"
                                                  >
                                                    {t?.town_name}
                                                  </p>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
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

export default TownsSelect;
