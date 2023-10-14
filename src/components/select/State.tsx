import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../redux/store';
import { ArrowDown } from '../../assets/icons';
import {
  AdminDashboardInterface,
  RegionArray,
  StateInterface,
} from '../../types/select';
import { fecthAllRegionsAction } from '../../redux/actions/dashboard/location.action';

type Props = {
  location: string;
  stateValue?: string;
};

const State = ({ location, stateValue }: Props) => {
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
    stateValue = selected;
  }, [selected]);

  return (
    <div className="w-full ">
      {state?.length > 0
        ? state.map((x: AdminDashboardInterface, index: any) => {
            return (
              <div className="">
                <label
                  htmlFor={`${location}`}
                  className="mb-2 text-[17px] font-[600]"
                >
                  {location}
                </label>
                <div className="border px-4 py-2 rounded-md">
                  <p
                    className="w-full  border-none outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
                    onClick={() => setShowDropDown((prev) => !prev)}
                  >
                    <input
                      type="text"
                      value={selected}
                      onChange={(e) => e.target.value}
                      placeholder={`Select ${location}`}
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
                </div>

                {showDropDown && (
                  <>
                    <div className="h-[10rem] overflow-y-auto ">
                      {x?.states?.map((d: StateInterface, index: any) => {
                        return (
                          <div
                            key={index}
                            onClick={() => setShowDropDown(false)}
                          >
                            <p
                              onClick={() => setSelected(d?.state)}
                              className="cursor-pointer"
                            >
                              {d?.state}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default State;
