import React, { useState } from 'react';
import { ArrowDown } from '../assets/icons';

type Props = {
  heading?: string;
  height?: number;
  addBorder?: boolean;
};

const HouseTypes = ({ heading, height, addBorder }: Props) => {
  const [selected, setSelected] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const handleClick = (e: any) => {
    setSelected(e);
    setShowDropDown(false);
  };

  return (
    <div className="mb-4 ">
      <section>
        <p>{heading ? heading : ''}</p>

        <p
          className={`h-${height} ${
            addBorder ? 'w-full border py-2 px-4 rounded-md' : null
          } w-[241px] xl:min-w-[151px]   flex justify-between items-center text-[#443e3e] text-[14px]`}
          onClick={() => setShowDropDown((prev) => !prev)}
        >
          <input
            type="text"
            value={selected}
            onChange={(e) => e.target.value}
            placeholder="Select house type "
            className="border-none outline-none"
          />

          <img
            src={ArrowDown}
            alt="arrow icon"
            width={18}
            height={18}
            className="text-end ml-auto cursor-pointer"
          />
        </p>

        {showDropDown ? (
          <div className="  mt-3 h-[8rem] overflow-y-auto pl-2 ">
            <section className="mb-4">
              <h4 className="font-semibold  text-[#333] pl-3 uppercase mb-2">
                Residential Units
              </h4>

              <div
                // onClick={() => setSelected('Self Con')}
                onClick={(e: any) => {
                  handleClick('Self Con');
                }}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Self Con</span>
              </div>
              <div
                // onClick={() => setSelected('Single Room')}
                onClick={(e: any) => handleClick('Single Room')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Single Room</span>
              </div>
              <div
                // onClick={() => setSelected('1 bedroom flat')}
                onClick={(e: any) => handleClick('1 bedroom flat')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>1 bedroom flat</span>
              </div>
              <div
                // onClick={() => setSelected('2 bedroom flat')}
                onClick={(e: any) => handleClick('2 bedroom flat')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>2 bedroom flat</span>
              </div>
              <div
                // onClick={() => setSelected('3 bedroom flat')}
                onClick={(e: any) => handleClick('3 bedroom flat')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>3 bedroom flat</span>
              </div>
              <div
                // onClick={() => setSelected('Others')}
                onClick={(e: any) => handleClick('Others')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Others</span>
              </div>
            </section>
            <section>
              <h4 className="font-semibold  text-[#333] pl-3 uppercase mb-2">
                Commercials
              </h4>

              <div
                // onClick={() => setSelected('Shop')}
                onClick={(e: any) => handleClick('Shop')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Shop</span>
              </div>
              <div
                // onClick={() => setSelected('Office')}
                onClick={(e: any) => handleClick('Office')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Office</span>
              </div>
              <div
                // onClick={() => setSelected('Others')}
                onClick={(e: any) => handleClick('Others')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Others</span>
              </div>
            </section>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default HouseTypes;
