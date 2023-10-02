import { useEffect, useState } from 'react';
import { ArrowDown, Rbg } from '../../assets/icons';
import State from '../../select/State';
import Advantages from './Advantages';
import HowHouseLinkupWorks from './HowHouseLinkupWorks';
import Reviews from './Reviews';
import VideoAndSearch from '../layout/VideoAndSearch';

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroWithImage />
      <HeroCard />
      <Advantages />
      <HowHouseLinkupWorks />
      <Reviews />
      <VideoAndSearch />
    </div>
  );
};

export default Hero;

export const HeroWithImage = () => {
  return (
    <main className="">
      <div className=" w-full  ">
        <img
          src={Rbg}
          alt="Bg image"
          className="w-full h-[1100px]  object-cover"
        />
      </div>
      <section className="absolute xl:top-[117px] top-[120px] px-[22px] xl:px-0 w-full">
        <section className=" mt-[97px] text-center ">
          <h4 className="text-[54px] text-[#131313] font-semibold mb-[20px]">
            Find a home <br /> where you can relax
          </h4>
          <p className="text-[#131313] text-[1rem]">
            Search house for rent. Get Results from 8 Engines Instantly.
            Information 24/7. <br /> Web, Images & Videos. Trusted by Billions.
          </p>
        </section>
      </section>
    </main>
  );
};

const HeroCard = () => {
  const [index, setIndex] = useState<Number>(1);

  useEffect(() => {
    setIndex(1);
  }, []);
  return (
    <div className="mt-[-2rem] mb-5 relative w-[751px] xl:ml-[96px] ml-[54px]">
      <div className="bg-[#fff] py-3 w-[109px]">
        <button
          onClick={() => setIndex(1)}
          className={`${
            index === 1 ? 'text-[#69B99D]' : 'text-[#909090]'
          } w-[54px] font-semibold`}
        >
          Buy
        </button>
        <button
          onClick={() => setIndex(2)}
          className={`${
            index === 2 ? 'text-[#69B99D]' : 'text-[#909090]'
          } w-[54px] font-semibold`}
        >
          Rent
        </button>
      </div>
      <div className="block xl:flex xl:w-[951px] xl:flex-1 w-full items-start gap-[1rem] xl:px-[32px] bg-[#fefefe] py-4">
        <div className="w-[241px] xl:min-w-[151px]">
          <State location="Location" />
        </div>

        <HouseType />
        <PriceRange />

        <button
          type="button"
          className="w-[153px] text-[#fff] text-[1rem] font-semibold tracking-wider bg-[#69B99D] py-[18px] px-[48px] shadow-2xl"
        >
          Search
        </button>
      </div>
    </div>
  );
};

const HouseType = () => {
  const [selected, setSelected] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const handleClick = (e: string) => {
    setSelected(e);
    setShowDropDown(false);
  };

  return (
    <div className="mb-4 ">
      <section>
        <p>House Type</p>
        <p
          className="w-[241px] xl:min-w-[151px] h-8 border-none outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
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
                onClick={() => handleClick('Self Con')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Self Con</span>
              </div>
              <div
                // onClick={() => setSelected('Single Room')}
                onClick={() => handleClick('Single Room')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Single Room</span>
              </div>
              <div
                // onClick={() => setSelected('1 bedroom flat')}
                onClick={() => handleClick('1 bedroom flat')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>1 bedroom flat</span>
              </div>
              <div
                // onClick={() => setSelected('2 bedroom flat')}
                onClick={() => handleClick('2 bedroom flat')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>2 bedroom flat</span>
              </div>
              <div
                // onClick={() => setSelected('3 bedroom flat')}
                onClick={() => handleClick('3 bedroom flat')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>3 bedroom flat</span>
              </div>
              <div
                // onClick={() => setSelected('Others')}
                onClick={() => handleClick('Others')}
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
                onClick={() => handleClick('Shop')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Shop</span>
              </div>
              <div
                // onClick={() => setSelected('Office')}
                onClick={() => handleClick('Office')}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>Office</span>
              </div>
              <div
                // onClick={() => setSelected('Others')}
                onClick={() => handleClick('Others')}
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

const PriceRange = () => {
  // const [data, setData] = useState<PriceListData>([]);
  const [selected, setSelected] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const handleClick = (e: string) => {
    setSelected(e);
    setShowDropDown(false);
  };

  return (
    <div className="mb-4 ">
      <section>
        <p>House Type</p>
        <p
          className="w-[241px] xl:min-w-[151px] h-8 border-none outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
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
          <div className="mt-3 h-[8rem] overflow-y-auto pl-2">
            <p
              onClick={() => handleClick('$ 400 - 550')}
              className="cursor-pointer"
            >
              $ 200 - 350
            </p>
            <p
              onClick={() => handleClick('$ 400 - 550')}
              className="cursor-pointer"
            >
              $ 400 - 550
            </p>
            <p
              onClick={() => handleClick('$ 500 - 650')}
              className="cursor-pointer"
            >
              $ 500 - 650
            </p>
            <p
              onClick={() => handleClick('$ 700 - 850')}
              className="cursor-pointer"
            >
              $ 700 - 850
            </p>
            <p
              onClick={() => handleClick('$ 900 - 1150')}
              className="cursor-pointer"
            >
              $ 900 - 1150
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
};
