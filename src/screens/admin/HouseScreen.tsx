import React, { useState } from 'react';
import { DashboardNavbar } from '../../components/adminDashboard/dashboard-navbar';
import { DashboardSideBar } from '../../components/adminDashboard/dashboard-sidebar';
import { Footer } from '../../components/layout';
import Houses from '../../components/adminDashboard/Houses';

type Props = {};

const HouseScreen = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <DashboardNavbar setShow={setShow} />
      <section className="flex  ">
        <DashboardSideBar show={show} setShow={setShow} />
        <div
          className={`${
            show ? 'md:pl-[15rem]' : 'md:pl-[5rem]'
          } flex-1   pt-[6rem]  bg-[#F3F4F6] text-[#333] px-2 overflow-x-hidden`}
        >
          <Houses />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HouseScreen;
