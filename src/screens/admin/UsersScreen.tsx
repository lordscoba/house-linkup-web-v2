import React, { useState } from 'react';
import { DashboardNavbar } from '../../components/adminDashboard/dashboard-navbar';
import { DashboardSideBar } from '../../components/adminDashboard/dashboard-sidebar';
import Users from '../../components/adminDashboard/users/Users';
import { Footer } from '../../components/layout';

type Props = {};

const UsersScreen = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="hide-scrollbar">
      <DashboardNavbar setShow={setShow} />
      <section className="flex   ">
        <DashboardSideBar show={show} setShow={setShow} />
        <div
          className={`${
            show ? 'md:pl-[15rem]' : 'md:pl-[5rem]'
          } flex-1  pt-[6rem] bg-[#F3F4F6] text-[#333] overflow-x-hidden`}
        >
          <Users />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UsersScreen;
