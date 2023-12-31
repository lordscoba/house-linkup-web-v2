import React from 'react';
import UserDashboardNav from '../../components/user-dashboad/UserDashboardNav';
import { Footer } from '../../components/layout';
import { UserDashboard } from '../../components/user-dashboad';

type Props = {};

const UserDashboardScreen = (props: Props) => {
  return (
    <div>
      <UserDashboardNav />
      <UserDashboard />
      <Footer />
    </div>
  );
};

export default UserDashboardScreen;
