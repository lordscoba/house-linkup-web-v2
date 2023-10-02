import React from 'react';
import { HeroNewPlaceBg } from '../../assets/images';
// import Search from '../reusableComponents/Search';

type Props = {};

const VideoAndSearch = (props: Props) => {
  return (
    <div className="px-[32px] xl:px-0 mt-[78px] ">
      <div className=" w-full xl:w-[1220px] max-w-[1220px] h-[320px] xl:h-[680px] m-auto">
        <video
          src="/video-2.mp4"
          loop
          controls={true}
          muted
          className="w-full h-full object-cover"
        />
        <p className="w-full xl:w-[381px] md:w-[381px] py-[34px] px-[58px] md:text-[28px] text-[20px] medium text-[#fff] bg-[#69B99D] ml-auto relative xl:mt-[-6rem] md:mt-[-6rem] xl:mr-8 md:mr-8 mt-4 ">
          Explore all <br /> your needs at a glance
        </p>
      </div>

      <Search />
    </div>
  );
};

export default VideoAndSearch;

const Search = () => {
  return (
    <>
      <div className="xl:mt-[189px] mt-[260px] xl:w-[1220px] h-[200px] xl:h-auto w-full m-auto relative">
        <img
          src={HeroNewPlaceBg}
          alt="bg image"
          className="w-full h-full object-cover"
        />
        <div className="block xl:flex   justify-between items-center absolute xl:top-[50%] xl:bottom-[50%] top-[20%] bottom-[20%] right-0 left-0 xl:pl-[62px] xl:pr-[24px] px-4">
          <p className="text-center xl:text-start md:text-[28px] text-[20px] text-[#fff] font-bold">
            Ready to find your <br /> New Place?
          </p>
          <div className="w-full xl:max-w-[631px] lg:max-w-[613px] md:max-w-[631px] md:py-[6px] py-[3px] mt-[12px] xl:mt-0 px-[11px] bg-[#fff] flex justify-between rounded-[15px] m-auto">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full border-none outline-none focus:border-none focus:outline-none"
            />
            <button className="xl:py-[18px] py-[12px] px-[24px] xl:px-[48px] bg-[#69B99D] text-[#fff] rounded-[10px]">
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
