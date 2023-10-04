import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserAction,
  getAllUsersAction,
} from '../../../redux/actions/dashboard/users.action';
import { StoreReducerTypes } from '../../../redux/store';
import {
  TableDataInterface,
  TableInterface,
} from '../../../types/dashboard/users.types';
import Pagination from '../../Pagination';
import { EditIcon, RedDeleteIcon } from '../../../assets/icons';
import DeleteModal from '../../../modals/DeleteModal';
import ViewUserDetailsModal from '../../../modals/ViewUserDetailsModal';
import EditUserProfile from '../../../modals/EditUserProfile';
import RegistrationModal from '../../../modals/RegistrationModal';
import FlexibleInput from '../../home/FlexibleInput';

type Props = {};

const Users = (props: Props) => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pages, setPages] = useState(0) as any;
  const [tableList, setTableList] = useState([]);
  const [show, setShow] = useState<boolean>(false);

  const profile_picture = useSelector(
    (state: StoreReducerTypes) => state?.changeProfilePicture
  );

  const all_users = useSelector((state: StoreReducerTypes) => state?.allUsers);
  const serverResponse = all_users?.serverResponse?.Users;
  const totalPages = all_users?.serverResponse?.totalPages;

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    dispatch(getAllUsersAction({ pageNumber }) as any);
  };

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
  ]);

  useEffect(() => {
    setTableList(serverResponse);
    setPages(Number(totalPages));
  }, [all_users]);

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
        <div className="mt-4 flex justify-end px-4  ">
          <button
            type="button"
            onClick={showRegisterModal}
            className="border px-8 py-2 bg-[#6726A8] text-[#fff] rounded-lg"
          >
            Create New User
          </button>
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
                    View Details
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    Status
                  </th>

                  {/* actions */}

                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    edit
                  </th>
                  <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                    delete
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
          <Pagination totalPages={pages} onPageChange={handlePageChange} />
        </section>
      </div>
      <RegistrationModal setShow={setShow} show={show} />
    </>
  );
};

export default Users;

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

  const openDeleteUser = () => {
    const user = list[index];
    setDeleteUser(true);
  };

  const handleDelete = () => {
    const filter = list?.filter((item, i) => i !== index);
    setList(filter);
    const clickedUser: any = list[index];
    const _id = clickedUser?._id;
    dispatch(deleteUserAction({ _id }) as any);
    setDeleteUser((prev: boolean) => !prev);

    // console.log({ index, _id, clickedUser });
  };

  const openViewUserDetails = () => {
    const user = list[index];
    setShowViewUserDetails(true);
  };

  const openEditUserModal = () => {
    setShowEditUserProfile(true);
    const user = list[index];
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
            <img
              onClick={openEditUserModal}
              src={EditIcon}
              alt="Edit icon"
              className="w-6 h-6 cursor-pointer"
            />
          </td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap  ">
            {' '}
            <img
              onClick={openDeleteUser}
              src={RedDeleteIcon}
              alt="delete icon"
              className="w-6 h-6 cursor-pointer"
            />
          </td>
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
        userId={_id}
        userName={username}
        user_fullName={full_name}
        user_location={location}
        user_number={phone_number}
      />

      <EditUserProfile
        imageUrl={image}
        open={showEditUserProfile}
        setOpen={setShowEditUserProfile}
        userEmail={email}
        userId={_id}
        userName={username}
        user_fullName={full_name}
        user_location={location}
        user_number={phone_number}
      />
    </>
  );
};
