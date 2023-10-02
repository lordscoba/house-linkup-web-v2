import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdHome, MdOutlineLocationOn } from 'react-icons/md';
import { dropDown } from '../../assets/icons';
import { Link } from 'react-router-dom';
type Props = {
  show: boolean;
  setShow: any;
};

export const DashboardSideBar = ({ show, setShow }: Props) => {
  return (
    <div
      className={`${
        show
          ? ' w-full max-w-[15rem]  border-2 rounded-lg shadow-2xl px-4 animate__animated animate__slideInLeft'
          : ' md:w-full md:max-w-[5rem] animate__animated animate__fadeIn'
      } h-screen overflow-y-auto hide-scrollbar pt-[6.5rem]   fixed bg-[#fff]  text-[grey] `}
    >
      <div className="hidden md:flex flex-col text-[#222] gap-3">
        {show ? (
          <>
            <TextAndDropDown
              icon={<MdHome />}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={<FaUsers />}
              icon_2={dropDown}
              text="Users"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={<MdOutlineLocationOn />}
              icon_2={dropDown}
              text="Location"
              dropDownText="Location"
              link="/dashboard/location"
            />
          </>
        ) : (
          <>
            <SideBarIcon text={'Home'} link={'/dashboard'} icon={<MdHome />} />
            <SideBarIcon
              text={'Users'}
              link={'/dashboard/all-users'}
              icon={<FaUsers />}
            />
            <SideBarIcon
              text={'Dashboard'}
              link={'/dashboard/location'}
              icon={<MdOutlineLocationOn />}
            />
          </>
        )}
      </div>
      <div className="md:hidden">
        {show ? (
          <>
            <TextAndDropDown
              icon={<MdHome />}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={<FaUsers />}
              icon_2={dropDown}
              text="Users"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={<MdOutlineLocationOn />}
              icon_2={dropDown}
              text="Location"
              dropDownText="Location"
              link="/dashboard/location"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

const SideBarIcon = ({ link, text, icon }: any) => {
  return (
    <div className="px-4 flex ">
      <div className="hidden">{text}</div>
      <Link className="text-2xl" to={link}>
        {icon}
      </Link>
    </div>
  );
};

interface TextAnDropDownInterface {
  icon: string | any;
  icon_2: string | any;
  text: string;
  dropDownText: string;
  link: string;
}

const TextAndDropDown = ({
  icon,
  icon_2,
  text,
  dropDownText,
  link,
}: TextAnDropDownInterface) => {
  const [rotate, setRotate] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setRotate((prev) => !prev)}
        className={`${
          rotate ? 'text-[purple]' : 'text-[grey]'
        } flex items-center justify-between mb-6`}
      >
        <div className="flex items-center gap-4 cursor-pointer">
          <span className="text-2xl">{icon}</span>
          <h2>{text}</h2>
        </div>

        <img
          src={icon_2}
          alt="icon"
          className={`${
            rotate ? 'rotate-[90deg] text-[purple] fill-[purple]' : ''
          } w-6 h-6 object-cover cursor-pointer`}
        />
      </div>
      {rotate ? (
        <Link
          to={link}
          className="block mb-4 text-center cursor-pointer text-[#4BA586]"
        >
          {dropDownText}
        </Link>
      ) : null}
    </>
  );
};
