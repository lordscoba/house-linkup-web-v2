import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../assets/icons';
import { MdMenu } from 'react-icons/md';
import Header from './header';

type Props = {
  setShow: (e: any) => void;
};

export const DashboardNavbar = ({ setShow }: Props) => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-wrap items-center gap-4 border bg-[#fff] text-[#333] fixed left-0 right-0 py-2 z-50">
      <div className=" flex flex-wrap items-center gap-4">
        <img
          onClick={() => navigate('/')}
          src={Logo}
          alt=""
          className="cursor-pointer object-contain w-16"
        />
        <h2
          onClick={() => navigate('/')}
          className="text-[24px] font-semibold text-[#4BA586] cursor-pointer"
        >
          HouseLinkUp
        </h2>
      </div>
      <div
        className=" cursor-pointer text-3xl"
        onClick={() => {
          setShow((prev: boolean) => !prev);
        }}
      >
        <MdMenu />
      </div>
      <Header />
    </section>
  );
};
