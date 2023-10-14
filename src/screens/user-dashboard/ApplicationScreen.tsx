import React from 'react';
import UserDashboardNav from '../../components/user-dashboad/UserDashboardNav';
import { Footer } from '../../components/layout';
import Application from '../../components/user-dashboad/Application';

type Props = {};

const ApplicationScreen = (props: Props) => {
  return (
    <div>
      <UserDashboardNav />
      <Application />
      <Footer />
    </div>
  );
};

export default ApplicationScreen;
