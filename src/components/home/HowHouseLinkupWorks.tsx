import React, { useEffect, useState } from 'react';
import { Furnitur } from '../../assets/images';

type Props = {};

const HowHouseLinkupWorks = (props: Props) => {
  return (
    <div className="mt-[121px] overflowX-hidden">
      <h2 className="text-[#131313] text-center font-semibold text-[38px] mb-[24px]">
        How HouseLinkUp works
      </h2>
      <p className="text-center text-[#191919] md:text-[24px] text-[17px] max-w-[539px]  xl:w-[539px] px-[22px] xl:px-0 m-auto">
        Properties to rent. Find rental property listed directly from private
        landlords and letting agents from all over.
      </p>
      <SectionWithImage />
    </div>
  );
};

export default HowHouseLinkupWorks;

const SectionWithImage = () => {
  const [curIndex, setCurIndex] = useState<Number>(0);
  const list = [
    {
      text: 'Search',
      key: 1,
    },
    {
      text: 'Choose',
      key: 2,
    },
    {
      text: 'Contact',
      key: 3,
    },
    {
      text: 'Book',
      key: 4,
    },
  ];

  useEffect(() => {
    setCurIndex(0);
  }, []);
  return (
    <section className="block xl:flex justify-between items-center xl:pl-[71px] xl:pr-[89px] px-[22px] mt-[64px]">
      <div className="flex justify-center gap-3 xl:block ">
        {list?.map((item: { text: string; key: Number }, index: any) => {
          return (
            <div
              key={index}
              className="flex items-center gap-4 mb-[48px] cursor-pointer"
            >
              <p
                className={`${
                  index === curIndex ? 'bg-[#69B99D] ' : 'bg-[#979797]'
                } w-[35px] h-[35px] hidden xl:flex items-center justify-center text-[#fff] rounded-full`}
              >
                {Number(item?.key)}
              </p>
              <p
                onClick={() => setCurIndex(index)}
                className={`${
                  index === curIndex ? 'text-[#191919]' : 'text-[#979797]'
                } md:text-[24px] text-[16px]  font-semibold xl:border-none border border-[#979797] px-[12px] xl:px-0 rounded-md`}
              >
                {item?.text}
              </p>
            </div>
          );
        })}
      </div>
      <div className=" max-w-[900px] m-auto">
        <img src={Furnitur} alt="furniture" width={900} height={570} />
        <p className="xl:w-[573px] md:w-[573px] w-full xl:py-[40px] py-[30px] pl-[31px] pr-[14px] text-[24px] text-[#fff] bg-[#69B99D] xl:mt-[-2rem] md:mt-[-2rem]  relative">
          Find rental property listed directly <br /> landlords and letting
          agents from all over.
        </p>
      </div>
    </section>
  );
};
