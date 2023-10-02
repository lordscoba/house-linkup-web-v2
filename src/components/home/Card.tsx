import React from 'react';

type Props = {
  icon: string;
  header: string;
  body: string;
  bg: string;
};

const Card = ({ body, header, icon, bg }: Props) => {
  //index === 1 ? 'bg-[#F8DAC5]' : 'bg-[#D2F7C6]'
  return (
    <div
      className={` bg-[#fff]
  max-w-[397px] h-[396px]  border rounded-[12px] text-center pt-[42px] pb-[68px] px-[32px] mb-4 xl:mb-0`}
    >
      <div
        className={`$ bg-[${bg}] rounded-full p-3 max-w-max m-auto mb-[29px]`}
      >
        <img src={icon} alt={header} width={44} height={44} />
      </div>
      <h2 className="text-[26px] text-[#131313] mb-[1rem] font-semibold">
        {header}
      </h2>
      <p className=" text-[#979797] text-[24px]">{body}</p>
    </div>
  );
};

export default Card;
