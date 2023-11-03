import React, { useState, useEffect } from 'react';
import { DashboardNavbar } from '../../components/adminDashboard/dashboard-navbar';
import { DashboardSideBar } from '../../components/adminDashboard/dashboard-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { HouseUploadType } from '../../types/user-dashboard/user_dashboard_nav';
import { fetchHouseAction } from '../../redux/actions/dashboard/house.action';
import { StoreReducerTypes } from '../../redux/store';
import { MdSearch } from 'react-icons/md';
import FlexibleInput from '../../components/home/FlexibleInput';
import {
  FetchHouseServerResponseInterface,
  FetchedHouseArray,
} from '../../types/dashboard/house.types';

type Props = {};

const UploadersPropertyScreen = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);

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
          <UserUploads />
        </div>
      </section>
    </div>
  );
};

export default UploadersPropertyScreen;

const UserUploads = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [houseData, setHouseData] = useState<HouseUploadType>([]);
  const [houseArray, setHouseArray] = useState<FetchedHouseArray>([]);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchedHouses = useSelector(
    (state: StoreReducerTypes) => state?.fetchHouse
  );

  const id = useLocation()?.pathname?.split('/')[4];

  useEffect(() => {
    dispatch(fetchHouseAction() as any);
  }, []);

  useEffect(() => {
    const houses = fetchedHouses?.serverResponse?.Houses;
    if (houses) {
      const findData = fetchedHouses?.serverResponse?.Houses?.filter(
        (x: any) => x?.poster?._id === id
      );

      setHouseArray(findData);
    }
  }, [fetchedHouses]);
  return (
    <div>
      <div className="  border rounded-[50px] pl-2 w-full  max-w-[26rem] flex items-center m-auto gap-2 bg-[#fff] my-8">
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
      <div>
        <p className="text-[grey] text-[1rem] text-center">
          Note: You can filter by status(eg: buy, rent) or by poster name
        </p>
      </div>
      <ServerResponse data={houseArray} searchTerm={searchQuery} />
    </div>
  );
};

interface ServerResponseInterface {
  data: FetchedHouseArray;
  searchTerm: string;
}

const ServerResponse = ({ data, searchTerm }: ServerResponseInterface) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ fit: data });
  }, [data]);
  return (
    <div className="w-full max-w-[1200px] m-auto  flex flex-wrap justify-center items-center gap-3 px-2  my-4">
      {data
        ?.filter((item: FetchHouseServerResponseInterface) => {
          return (
            (searchTerm?.toLocaleLowerCase() === '' && item) ||
            (item?.poster?.full_name?.toLowerCase() &&
              item?.poster?.full_name?.includes(
                searchTerm.toLocaleLowerCase()
              )) ||
            (item?.status?.toLocaleLowerCase() &&
              item?.status
                ?.toLocaleLowerCase()
                ?.includes(searchTerm?.toLocaleLowerCase()))
          );
        })
        .map((x: FetchHouseServerResponseInterface, index: any) => {
          return (
            <div key={index} className="border ">
              <div className="w-full max-w-[24rem] md:w-[24rem]  h-[16rem] ">
                <img
                  src={x?.image?.[0]?.url}
                  alt=""
                  className="border w-full h-full object-cover"
                />
              </div>
              <p className="uppercase my-2 font-bold px-2">{x?.status}</p>
              <section className="flex items-center gap-3">
                <div className="my-3 px-2">
                  {x?.poster?.image?.length !== 0 ? (
                    <img
                      src={x?.poster?.image[0]?.url}
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
                      className="w-[60px] h-[60px] border-2 border-[#222] rounded-full p-2 fill-[grey]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="capitalize">{x?.poster?.full_name}</p>
                  <p>{x?.poster?.email}</p>
                  <p>{x?.poster?.phone_number}</p>
                </div>
              </section>
              <div className="text-right pr-2 py-2">
                <button
                  onClick={() =>
                    navigate(`/admin/dashboard/view-house-details/${x?._id}`)
                  }
                  className="border md:px-8 py-2 px-3 bg-[#6726A8] text-[#fff]"
                >
                  view details
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
