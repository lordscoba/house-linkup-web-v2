import React, { useEffect, useState } from 'react';

import { DashboardNavbar } from '../../components/adminDashboard/dashboard-navbar';
import { Footer } from '../../components/layout';
import { DashboardSideBar } from '../../components/adminDashboard/dashboard-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../redux/store';
import { getAllUsersAction } from '../../redux/actions/dashboard/users.action';
import CustomPagination from '../../components/pagination/Pagination-3';
import { MdSearch } from 'react-icons/md';
import FlexibleInput from '../../components/home/FlexibleInput';
import {
  TableDataArray,
  TableDataInterface,
  TableInterface,
  UploaderDetailsArray,
  UploaderDetailsInterface,
} from '../../types/dashboard/users.types';
import { deleteUserAction } from '../../redux/actions/user-profile/userProfile.actions';
import { EditIcon, RedDeleteIcon } from '../../assets/icons';
import DeleteModal from '../../modals/DeleteModal';
import ViewUserDetailsModal from '../../modals/View-user-details-modal';
import EditUserProfile from '../../modals/EditUserProfileModal';
import { fetchHouseAction } from '../../redux/actions/dashboard/house.action';
import { useNavigate } from 'react-router-dom';
import { FetchedHouseArray } from '../../types/dashboard/house.types';
import PromoteToPosterModal from '../../modals/PromoteAndDemotePosterModal';

const AdminDashboardScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [totalUploads, setTotalUploads] = useState<number>(0);
  const [uploaderList, setUploaderList] = useState<UploaderDetailsArray>(
    []
  ) as any;
  const [totalUploaders, setTotalUploaders] = useState<number>(0);
  const [totalHousesUploaded, setTotalHousesUploaded] = useState<number>(0);
  const [totalRegisteredUsers, setTotalRegisteredUsers] = useState<number>(0);
  // const [houseArray, setHouseArray] = useState<FetchedHouseArray>([]);
  const [posterSearchQuery, setPosterSearchQuery] = useState<string>('');
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [uploader_Pages, setUploader_pages] = useState(0);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pages, setPages] = useState(0) as any;
  const [tableList, setTableList] = useState<TableDataArray>([]) as any;
  // const [show, setShow] = useState<boolean>(false);

  const profile_picture = useSelector(
    (state: StoreReducerTypes) => state?.changeProfilePicture
  );

  const all_users = useSelector((state: StoreReducerTypes) => state?.allUsers);
  const serverResponse = all_users?.serverResponse?.Users;
  const totalPages = all_users?.serverResponse?.totalPages;

  const storedData = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') as any)
    : null;

  const token = storedData?.token;

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    dispatch(getAllUsersAction({ pageNumber }) as any);
  };
  const handleUploaderPageChange = (page: number) => {
    setCurrentPageNumber(page);
  };
  const fetchedHouses = useSelector(
    (state: StoreReducerTypes) => state?.fetchHouse
  );

  const uploadHouse = useSelector(
    (state: StoreReducerTypes) => state?.uploadHouse
  );

  const update_profile = useSelector(
    (state: StoreReducerTypes) => state?.updateProfile
  );

  const delete_user = useSelector(
    (state: StoreReducerTypes) => state?.deleteUser
  );

  const activate_user = useSelector(
    (state: StoreReducerTypes) => state?.activateUser
  );
  const promote_user = useSelector(
    (state: StoreReducerTypes) => state?.promoteUser
  );
  const deActivate_user = useSelector(
    (state: StoreReducerTypes) => state?.deActivateUser
  );
  const block_user = useSelector(
    (state: StoreReducerTypes) => state?.blockUser
  );
  const demote_user = useSelector(
    (state: StoreReducerTypes) => state?.demoteUser
  );
  const new_user = useSelector(
    (state: StoreReducerTypes) => state?.registerUser
  );
  const promoteUserToPoster = useSelector(
    (state: StoreReducerTypes) => state?.promoteUserToPoster
  );
  const demotePosterToUser = useSelector(
    (state: StoreReducerTypes) => state?.demotePosterToUser
  );

  const showRegisterModal = () => {
    setShow(true);
  };
  useEffect(() => {
    dispatch(getAllUsersAction({ pageNumber }) as any);
  }, [pageNumber]);

  useEffect(() => {
    dispatch(getAllUsersAction({ pageNumber }) as any);
  }, []);

  useEffect(() => {
    dispatch(getAllUsersAction({ pageNumber }) as any);
  }, [
    profile_picture,
    update_profile,
    delete_user,
    activate_user,
    promote_user,
    deActivate_user,
    block_user,
    demote_user,
    new_user,
    promoteUserToPoster,
    demotePosterToUser,
  ]);

  useEffect(() => {
    if (serverResponse) {
      const countUsers = all_users?.serverResponse?.totalUsers;
      setTotalRegisteredUsers(countUsers);
    }
    setTableList(serverResponse);
    setPages(Number(totalPages));
  }, [all_users]);

  useEffect(() => {
    dispatch(fetchHouseAction() as any);
  }, []);

  useEffect(() => {
    dispatch(fetchHouseAction() as any);
  }, [uploadHouse]);

  useEffect(() => {
    const totalUploadedHouse = fetchedHouses?.serverResponse?.total_uploads;
    const totalUploaders = fetchedHouses?.serverResponse;

    if (totalUploaders) {
      const num = fetchedHouses?.serverResponse.uploaders?.length;
      const uploaders = fetchedHouses?.serverResponse.uploaders;
      // const uploaders = fetchedHouses?.serverResponse.uploaderDetails;
      // pagination
      const itemsPerPage = 10;
      const indexOfLastItem = currentPageNumber * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = uploaders?.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.floor(num / itemsPerPage);
      setTotalUploaders(num);
      setUploaderList(currentItems);
      setUploader_pages(totalPages);
      setTotalHousesUploaded(totalUploadedHouse);
    }
    // const houses = fetchedHouses?.serverResponse?.Houses;
    // setHouseArray(houses);
  }, [fetchedHouses, currentPageNumber]);

  return (
    <div>
      <DashboardNavbar setShow={setShow} />
      <section className="flex   ">
        <DashboardSideBar show={show} setShow={setShow} />
        <div
          className={`${
            show ? 'md:pl-[15rem]' : 'md:pl-[5rem]'
          } flex-1   pt-[6rem]  bg-[#F3F4F6] text-[#333] px-2 overflow-x-hidden`}
        >
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <Card data={totalRegisteredUsers} heading="Registered Users" />
            <Card data={totalHousesUploaded} heading="Total Uploads" />
            <Card data={totalUploaders} heading="Total Uploaders" />
          </div>

          <UserList
            handlePageChange={handlePageChange}
            pageNumber={pageNumber}
            pages={pages}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setTableList={setTableList}
            tableList={tableList}
          />

          <UploadersList
            handlePageChange={handleUploaderPageChange}
            pageNumber={currentPageNumber}
            pages={uploader_Pages}
            searchQuery={posterSearchQuery}
            setSearchQuery={setPosterSearchQuery}
            tableList={uploaderList}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminDashboardScreen;

const DashBoard = () => {
  return <div className="px-4"></div>;
};

interface CardInterface {
  heading: string;
  data: number;
}
const Card = ({ data, heading }: CardInterface) => {
  return (
    <div className="w-[207px] lg:w-[635px] max-w-[335px] border-4 h-[12rem] md:h-[14rem] flex items-center justify-center flex-col gap-3 rounded-lg">
      <h2 className="font-bold lg:text-[1.2rem] text-[1rem]">{heading}</h2>
      <p className="font-bold lg:text-[1.2rem] text-[1rem]">
        {data?.toLocaleString()}
      </p>
    </div>
  );
};

interface UserInterface {
  searchQuery: string;
  setSearchQuery: (a: any) => void;
  tableList: [];
  setTableList: (a: any) => void;
  pages: number;
  handlePageChange: (a: any) => void;
  pageNumber: number;
}

const UserList = ({
  searchQuery,
  setSearchQuery,
  tableList,
  setTableList,
  handlePageChange,
  pageNumber,
  pages,
}: UserInterface) => {
  return (
    <>
      <div>
        <h2 className="text-center font-bold md:text-[2rem] text-[1.2rem]">
          Users List
        </h2>

        <div className=" mt-2 border rounded-[50px] pl-2 w-full  max-w-[26rem] flex items-center m-auto gap-2 bg-[#fff]">
          <span className="text-2xl">
            <MdSearch />
          </span>

          <FlexibleInput
            type="text"
            placeholder="Enter text"
            value={searchQuery}
            onChange={setSearchQuery}
            className="flex-1 py-2 pl-2 rounded-[50px] text-[#222] outline-none"
          />
        </div>

        <section className="bg-[#fff] p-[1rem] rounded-lg mt-10 overflow-x-auto overflow-y-auto md:h-auto w-full hide-scrollbar   ">
          <div className=" w-[22rem] md:w-[31rem] lg:w-[35rem]  xl:w-full">
            <table className=" w-full bg-[#fff] rounded-lg ">
              <thead className="bg-[#fff] text-[#333]">
                <tr className="">
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap text-start pl-14 ">
                    User
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap text-start">
                    Email
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    Position
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    View
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    Promote
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    Status
                  </th>

                  {/* actions */}

                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    Demote Poster
                  </th>
                </tr>
              </thead>

              {tableList
                ?.filter((item: TableDataInterface) => {
                  return searchQuery?.toLocaleLowerCase() === ''
                    ? item
                    : item?.full_name
                        ?.toLowerCase()
                        ?.includes(searchQuery?.toLowerCase());
                })
                .map((item: TableInterface, index: any) => {
                  return (
                    <TableData
                      key={index}
                      active={item?.active}
                      blocked={item?.blocked}
                      de_activated={item?.de_activated}
                      email={item?.email}
                      full_name={item?.full_name}
                      image={item?.image}
                      // position={item?.position}
                      createdAt={item?.createdAt}
                      location={item?.location}
                      // _id={item?._id}
                      index={index}
                      list={tableList}
                      setList={setTableList}
                      role={item?.role}
                      _id={item?._id}
                      username={item?.username}
                      phone_number={item?.phone_number}
                    />
                  );
                })}
            </table>
          </div>
        </section>
      </div>

      <CustomPagination
        totalPages={pages}
        onChangePage={handlePageChange}
        currentPage={pageNumber}
      />
    </>
  );
};

const TableData = ({
  active,
  blocked,
  de_activated,
  email,
  full_name,
  image,
  createdAt,
  location,
  index,
  _id,
  list,
  role,
  username,
  phone_number,
  setList,
}: TableDataInterface) => {
  const dispatch = useDispatch();
  const [deleteUser, setDeleteUser] = useState<boolean>(false);
  const [showViewUserDetails, setShowViewUserDetails] =
    useState<boolean>(false);
  const [showEditUserProfile, setShowEditUserProfile] =
    useState<boolean>(false);
  const [userId, setUserId] = useState('');

  const [showPromoteToPosterModal, setShowPromoteToPosterModal] =
    useState<boolean>(false);

  const [action, setAction] = useState('');

  const storedData = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') as any)
    : null;

  const token = storedData?.token;

  const openDeleteUser = () => {
    setDeleteUser(true);
  };

  const handleDelete = () => {
    const filter = list?.filter((item, i) => i !== index);
    setList(filter);
    const clickedUser = list[index];
    const _id = clickedUser?._id;
    dispatch(deleteUserAction({ _id, token }) as any);
    setDeleteUser((prev: boolean) => !prev);

    // console.log({ index, _id, clickedUser });
  };

  const openViewUserDetails = () => {
    const findUser = list?.find((x) => x?._id === _id);
    if (findUser) {
      setUserId(findUser?._id);
    }
    setShowViewUserDetails(true);
  };

  const openEditUserModal = () => {
    const findUser = list?.find((x) => x?._id === _id);
    if (findUser) {
      setUserId(findUser?._id);
    }

    setShowEditUserProfile(true);
  };

  const openPromoteToPosterModal = () => {
    const findUser = list?.find((x) => x?._id === _id);
    if (findUser) {
      setUserId(findUser?._id);
    }
    setAction('promote');
    setShowPromoteToPosterModal(true);
  };

  const demotePosterToUser = () => {
    const findUser = list?.find((x) => x?._id === _id);
    if (findUser) {
      setUserId(findUser?._id);
    }
    setAction('demote');
    setShowPromoteToPosterModal(true);
  };

  return (
    <>
      <tbody className="">
        {' '}
        <tr>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap">
            <p className="flex items-center gap-2">
              {image?.length > 0 ? (
                <img
                  src={image?.[0]?.url}
                  alt=""
                  className="w-[60px] h-[60px] object-cover rounded-full"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[60px] h-[60px] border-2 rounded-full p-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              )}

              <p>
                <span className="capitalize">{full_name}</span> <br />
                <span>{location ? location : 'Not Specified Yet'}</span>
              </p>
            </p>
          </td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap">{email}</td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap">{role}</td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap  ">
            <span
              onClick={openViewUserDetails}
              className="cursor-pointer hover:bg-[#bcecbc] px-4 py-1 rounded-[50px]"
            >
              view
            </span>
          </td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap  ">
            <span
              onClick={openPromoteToPosterModal}
              className="cursor-pointer hover:bg-[#bcecbc] px-4 py-1 rounded-[50px]"
            >
              {role === 'SuperAdmin' || role === 'Admin'
                ? '-----'
                : role === 'Poster'
                ? '-----'
                : 'To Poster'}
            </span>
          </td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap">
            {active ? (
              <span className="bg-[#D9F4DD] text-[green] px-6 py-1 rounded-[50px]">
                Active
              </span>
            ) : null}
            {blocked ? (
              <span className="bg-[#FFDBDB] text-[#FF3C0F] px-4 py-1 rounded-[50px]">
                Blocked
              </span>
            ) : null}
            {de_activated ? (
              <span className="bg-[#FEEEDB] text-[#FAA47E] px-3 py-1 rounded-[50px]">
                Deactivated
              </span>
            ) : null}
          </td>
          <td className="px-4 py-2 text-[black] whitespace-nowrap ">
            <span
              onClick={demotePosterToUser}
              className="cursor-pointer hover:bg-[#bcecbc] px-4 py-1 rounded-[50px]"
            >
              {role === 'SuperAdmin' || role === 'Admin'
                ? '-----'
                : role === 'Poster'
                ? ' Demote Poster'
                : '-----'}
            </span>
          </td>
          {/* <td className="px-4 py-2 text-[black] whitespace-nowrap ">
            <img
              onClick={openEditUserModal}
              src={EditIcon}
              alt="Edit icon"
              className="w-6 h-6 cursor-pointer"
            />
          </td> */}
          {/* <td className="px-4 py-4 text-[black] whitespace-nowrap  ">
            {' '}
            <img
              onClick={openDeleteUser}
              src={RedDeleteIcon}
              alt="delete icon"
              className="w-6 h-6 cursor-pointer"
            />
          </td> */}
        </tr>
      </tbody>

      <DeleteModal
        setShow={setDeleteUser}
        show={deleteUser}
        text="User"
        full_name={full_name}
        deleteFunc={handleDelete}
      />

      <ViewUserDetailsModal
        imageUrl={image}
        isActive={active}
        isBlock={blocked}
        isDeActivate={de_activated}
        open={showViewUserDetails}
        role={role}
        setOpen={setShowViewUserDetails}
        userEmail={email}
        userId={userId}
        userName={username}
        user_fullName={full_name}
        user_location={location}
        user_number={phone_number}
        token={token}
      />

      <EditUserProfile
        imageUrl={image}
        open={showEditUserProfile}
        setOpen={setShowEditUserProfile}
        userEmail={email}
        userId={userId}
        userName={username}
        user_fullName={full_name}
        user_location={location}
        user_number={phone_number}
      />
      <PromoteToPosterModal
        full_name={full_name}
        setShow={setShowPromoteToPosterModal}
        show={showPromoteToPosterModal}
        token={token}
        userId={userId}
        action={action}
      />
    </>
  );
};

interface UploadersInterface {
  searchQuery: string;
  setSearchQuery: (a: any) => void;
  tableList: [];
  pages: number;
  handlePageChange: (a: any) => void;
  pageNumber: number;
}

const UploadersList = ({
  handlePageChange,
  pageNumber,
  pages,
  searchQuery,
  setSearchQuery,
  tableList,
}: UploadersInterface) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-8">
        <h2 className="text-center font-bold md:text-[2rem] text-[1.2rem]">
          Uploaders' List
        </h2>

        <div className=" mt-2 border rounded-[50px] pl-2 w-full  max-w-[26rem] flex items-center m-auto gap-2 bg-[#fff]">
          <span className="text-2xl">
            <MdSearch />
          </span>

          <FlexibleInput
            type="text"
            placeholder="Enter text"
            value={searchQuery}
            onChange={setSearchQuery}
            className="flex-1 py-2 pl-2 rounded-[50px] text-[#222] outline-none"
          />
        </div>
      </div>{' '}
      {tableList?.length > 0 ? (
        <section className="bg-[#fff] p-[1rem] rounded-lg mt-10 overflow-x-auto overflow-y-auto md:h-auto w-full hide-scrollbar   ">
          <div className=" w-full md:w-[31rem] lg:w-[35rem]  xl:w-[70rem] ">
            <table className=" w-full bg-[#fff] rounded-lg ">
              <thead className="bg-[#fff] text-[#333]">
                <tr className="">
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap text-start pl-14 ">
                    Uploader
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap text-start">
                    Email
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    Position
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    Total Uploads
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    View Uploads
                  </th>
                </tr>
              </thead>

              {tableList
                ?.filter((item: UploaderDetailsInterface) => {
                  return searchQuery?.toLocaleLowerCase() === ''
                    ? item
                    : item?.userDetails?.full_name
                        ?.toLowerCase()
                        ?.includes(searchQuery?.toLowerCase());
                })
                .map((x: UploaderDetailsInterface, index: any) => {
                  return (
                    <tbody className="" key={index}>
                      {' '}
                      <tr>
                        <td className="px-4 py-2 text-[black]  whitespace-nowrap">
                          <p className="flex items-center gap-2">
                            {x?.userDetails?.image?.length > 0 ? (
                              <img
                                src={x?.userDetails?.image?.[0]?.url}
                                alt=""
                                className="w-[60px] h-[60px] object-cover rounded-full"
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-[60px] h-[60px] border-2 rounded-full p-2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                              </svg>
                            )}

                            <p>
                              <span className="capitalize">
                                {x?.userDetails?.full_name}
                              </span>{' '}
                              <br />
                              <span>
                                {x?.userDetails?.location
                                  ? x?.userDetails?.location
                                  : 'Not Specified Yet'}
                              </span>
                            </p>
                          </p>
                        </td>
                        <td className="px-4 py-4 text-[black] whitespace-nowrap">
                          {x?.userDetails?.email}
                        </td>
                        <td className="px-4 py-4 text-[black] whitespace-nowrap">
                          {x?.userDetails?.role}
                        </td>
                        <td className="px-4 py-4 text-[black] font-semibold whitespace-nowrap text-center">
                          {x?.count}
                        </td>
                        <td className="px-4 py-4 text-[black] whitespace-nowrap  ">
                          <span
                            onClick={() =>
                              navigate(
                                `/admin/dashboard/uploaders-uploads/${x?._id}`
                              )
                            }
                            className="cursor-pointer hover:bg-[#bcecbc] px-4 py-1 rounded-[50px]"
                          >
                            view
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </section>
      ) : null}
      <CustomPagination
        totalPages={pages}
        onChangePage={handlePageChange}
        currentPage={pageNumber}
      />
    </>
  );
};
