import { createBrowserRouter } from 'react-router-dom';
import {
  AboutScreen,
  ContactScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  PropertyScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ServiceScreen,
} from './screens';
import ErrorScreen from './screens/ErrorScreen';
import {
  AdminDashboardScreen,
  HouseScreen,
  LocalGovernmentScreen,
  LocationScreen,
  TownScreen,
  UpdateHouseScreen,
  UploadHouseScreen,
  UsersScreen,
  ViewHouseDetailsScreen,
} from './screens/admin';
import {
  ApplicationScreen,
  SingleHouseScreen,
  UpdateScreen,
  UserDashboardScreen,
} from './screens/user-dashboard';

const App = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/about',
    element: <AboutScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/property',
    element: <PropertyScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/services',
    element: <ServiceScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/contact-us',
    element: <ContactScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/sign-up',
    element: <RegisterScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/login',
    element: <LoginScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/reset-password/:id',
    element: <ResetPasswordScreen />,
    errorElement: <ErrorScreen />,
  },

  // Admin Links
  {
    path: '/admin/dashboard',
    element: <AdminDashboardScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/all-users',
    element: <UsersScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/location',
    element: <LocationScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/local-gov/:id/:index',
    element: <LocalGovernmentScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/town/:id/:index',
    element: <TownScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/houses',
    element: <HouseScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/upload-house',
    element: <UploadHouseScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/view-house-details/:id',
    element: <ViewHouseDetailsScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/admin/dashboard/update-house/:id',
    element: <UpdateHouseScreen />,
    errorElement: <ErrorScreen />,
  },
  // USER DASHBOARD LINKS
  {
    path: '/dashboard/user',
    element: <UserDashboardScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/dashboard/user/application',
    element: <ApplicationScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/dashboard/user/house/:id',
    element: <SingleHouseScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/dashboard/user/update/:id',
    element: <UpdateScreen />,
    errorElement: <ErrorScreen />,
  },
]);

export default App;
