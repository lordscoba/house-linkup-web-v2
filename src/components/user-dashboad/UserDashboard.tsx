import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HouseUploadInterface,
  HouseUploadType,
} from '../../types/user-dashboard/user_dashboard_nav';
import { getUserUploadedHouseAction } from '../../redux/actions/dashboard/house.action';
import { StoreReducerTypes } from '../../redux/store';
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

type Props = {};

const UserDashboard = (props: Props) => {
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [data, setData] = useState<HouseUploadType>([]);
  const [posterId, setPosterId] = useState('');

  const [sortBy, setSortBy] = useState('Price');

  const storedData = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') as any)
    : null;

  const token = storedData?.token;

  const userUploads = useSelector(
    (state: StoreReducerTypes) => state?.getUserUploads
  );

  const uploadHouse = useSelector(
    (state: StoreReducerTypes) => state?.uploadHouse
  );

  useEffect(() => {
    dispatch(getUserUploadedHouseAction({ token }) as any);
  }, []);

  useEffect(() => {
    dispatch(getUserUploadedHouseAction({ token }) as any);
  }, [uploadHouse]);

  useEffect(() => {
    setData(userUploads?.serverResponse?.mapArray);
  }, [userUploads]);

  return (
    <div className=" md:px-[2rem] px-2">
      <section className="md:px-[1rem] mt-[24px] flex flex-1 gap-8">
        {/* FIRST SECTION */}
        <section className=" w-full lg:w-[55%]">
          <div className="flex   flex-wrap justify-between bg-[rgba(105,185,157,0.17)] md:px-[31px] px-2 py-[1rem] ">
            <div className="flex items-center justify-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M8 34.34L9.18 33.16L10.34 32H40V8H8V34.34ZM36 28H21L25 24H36V28ZM12 23.06L23.76 11.3C24.16 10.9 24.78 10.9 25.18 11.3L28.72 14.84C29.12 15.24 29.12 15.86 28.72 16.26L16.94 28H12V23.06Z"
                    fill="#69B99D"
                  />
                  <path
                    d="M40 4H8C5.8 4 4.02 5.8 4.02 8L4 44L12 36H40C42.2 36 44 34.2 44 32V8C44 5.8 42.2 4 40 4ZM40 32H10.34L9.16 33.18L8 34.34V8H40V32ZM21 28H36V24H25L21 28ZM28.72 16.26C29.12 15.86 29.12 15.24 28.72 14.84L25.18 11.3C24.78 10.9 24.16 10.9 23.76 11.3L12 23.06V28H16.94L28.72 16.26Z"
                    fill="#69B99D"
                  />
                </svg>
              </div>
              <article>
                <h4 className="md:text-[20px] text-[1rem] text-[#000] font-[500]">
                  Review Tenant Application
                </h4>
                <p className="text-[15px]">
                  Let's review your tenancy application{' '}
                </p>
              </article>
            </div>
            <div className="text-center mt-4 md:mt-0 m-auto">
              <button
                type="button"
                className="px-4 py-2 bg-[#fff] text-[#8fda8f] rounded-[50px] border"
              >
                Review my application
              </button>
            </div>
          </div>

          <SortableButton setSortString={setSortBy} sortString={sortBy} />
          <SortedHouses sortBy={sortBy} data={data} setData={setData} />
        </section>
        {/* MAP SECTION */}
        <section className="hidden lg:block border-2 w-[43%] h-[45rem]">
          <h2>Map</h2>
        </section>
      </section>
    </div>
  );
};

export default UserDashboard;

interface SortButtonInterface {
  sortString: string;
  setSortString: (a: any) => void;
}

const SortableButton = ({ setSortString, sortString }: SortButtonInterface) => {
  const priceButtonClick = (e: any) => {
    const btnValue = e.target.innerText;
    setSortString(btnValue);
  };
  const apartmentButtonClick = (e: any) => {
    const btnValue = e.target.innerText;
    setSortString(btnValue);
  };
  const floorButtonClick = (e: any) => {
    const btnValue = e.target.innerText;
    setSortString(btnValue);
  };

  return (
    <div className="mt-[38px] flex flex-wrap gap-3 justify-center items-center md:justify-between ">
      <div className="flex items-center justify-center md:gap-4 gap-2 flex-wrap">
        <div className="flex items-center  gap-1 border rounded-md md:px-3 px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M12.5 7C13.3284 7 14 6.32843 14 5.5C14 4.67157 13.3284 4 12.5 4C11.6716 4 11 4.67157 11 5.5C11 6.32843 11.6716 7 12.5 7Z"
              stroke="#6B6F7B"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M17 1.9091C17 1.40691 16.5931 1 16.0909 1C16.0342 1 10.6815 1.00073 10.6815 1.00073C10.1979 1.00073 9.73495 0.975272 9.46659 1.24364L1.20154 9.50846C0.932819 9.77683 0.932819 10.2125 1.20154 10.4808L7.51933 16.7987C7.78769 17.0671 8.22332 17.0671 8.49168 16.7987L16.7564 8.53354C17.0247 8.26554 16.9993 7.81353 16.9993 7.31898C16.9993 7.31898 17 1.96583 17 1.9091Z"
              stroke="#6B6F7B"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>

          <button
            type="button"
            onClick={priceButtonClick}
            className="md:text-[1rem] text-[14px] font-semibold"
          >
            Price
          </button>
        </div>
        <div className="flex items-center gap-1 border rounded-md md:px-3 px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
          >
            <path
              d="M1.12109 1V17H10.1992V4.06667L1.12109 1Z"
              stroke="#6B6F7B"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="2.59766"
              y="5"
              width="2.19889"
              height="2.5"
              rx="0.25"
              stroke="#6B6F7B"
              stroke-width="0.5"
            />
            <rect
              x="2.59766"
              y="9"
              width="2.19889"
              height="2.5"
              rx="0.25"
              stroke="#6B6F7B"
              stroke-width="0.5"
            />
            <rect
              x="2.59766"
              y="13"
              width="2.19889"
              height="2.5"
              rx="0.25"
              stroke="#6B6F7B"
              stroke-width="0.5"
            />
            <rect
              x="6.52344"
              y="5"
              width="2.19889"
              height="2.5"
              rx="0.25"
              stroke="#6B6F7B"
              stroke-width="0.5"
            />
            <rect
              x="6.52344"
              y="9"
              width="2.19889"
              height="2.5"
              rx="0.25"
              stroke="#6B6F7B"
              stroke-width="0.5"
            />
            <rect
              x="6.52344"
              y="13"
              width="2.19889"
              height="2.5"
              rx="0.25"
              stroke="#6B6F7B"
              stroke-width="0.5"
            />
          </svg>
          <button
            type="button"
            onClick={apartmentButtonClick}
            className="md:text-[1rem] text-[14px] font-semibold"
          >
            Apartment
          </button>
        </div>
        <div className="flex items-center gap-1 border rounded-md md:px-3 px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M15.1275 11.9439H12.9965C12.1202 11.9439 11.966 11.3143 11.9442 10.9983V8.91684C11.9442 8.04136 11.204 7.96629 10.9896 7.96272H10.5015V7.96244H8.92346C8.04138 7.96244 7.96741 7.20849 7.96301 7.01189V4.99639C7.96301 4.1363 7.34049 3.99909 7.04958 3.9815H6.54914H4.97249C3.98096 3.9815 3.98151 3.06669 3.98151 3.06669V0.835894C3.96392 0.570553 3.82616 0 2.95919 0H0.892005C0.0921314 0 0.00579229 0.582651 0.000292985 0.795474V14.9116C0.000292985 14.9116 -0.0459011 15.8957 1.02179 15.8957H14.8424C15.7071 15.8957 15.8919 15.409 15.9252 15.1129V13.0127C15.9252 12.1661 15.4341 11.978 15.1275 11.9439ZM14.9183 14.1681C14.913 14.3579 14.8256 14.9039 13.96 14.9039H1.96217C1.27173 14.9039 1.10208 14.5066 1.06743 14.2292V13.9688V13.0331V12.1986V11.7113V9.81873V8.94434V8.43593V7.80544V4.99859V4.83581V1.85849C1.06743 1.13808 1.51618 1.00995 1.75155 0.991524H2.3188C2.48543 0.998949 3.01996 1.09684 3.01996 2.04904V3.42854C3.02244 3.64466 3.09778 4.83031 4.47453 4.83554H5.91232C6.13752 4.84296 6.86452 4.94057 6.86452 5.90845V7.42049C6.88515 7.84448 7.0867 8.94407 8.6133 8.94407H9.73461C9.73461 8.94407 10.7693 8.93829 10.7693 10.0728V11.4053V11.4237C10.7721 11.6035 10.8501 13.043 12.6712 13.0328H13.9234C14.125 13.0375 14.9169 13.107 14.9185 13.9325V14.1681H14.9183Z"
              fill="#6B6F7B"
            />
          </svg>
          <button
            type="button"
            onClick={floorButtonClick}
            className="md:text-[1rem] text-[14px] font-semibold"
          >
            Floor
          </button>
        </div>
        <div className="flex items-center gap-1 border rounded-md px-3 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
          >
            <path
              d="M7.45452 15.8036C8.93416 15.8036 10.1336 14.6041 10.1336 13.1244C10.1336 11.6448 8.93416 10.4453 7.45452 10.4453C5.97488 10.4453 4.77539 11.6448 4.77539 13.1244C4.77539 14.6041 5.97488 15.8036 7.45452 15.8036Z"
              stroke="#6B6F7B"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.7757 13.1211H1"
              stroke="#6B6F7B"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9874 13.1211H10.3457"
              stroke="#6B6F7B"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5326 6.45591C12.0123 6.45591 13.2118 5.25643 13.2118 3.77678C13.2118 2.29714 12.0123 1.09766 10.5326 1.09766C9.053 1.09766 7.85352 2.29714 7.85352 3.77678C7.85352 5.25643 9.053 6.45591 10.5326 6.45591Z"
              stroke="#6B6F7B"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.2246 3.77734H17.0003"
              stroke="#6B6F7B"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 3.77734H7.64175"
              stroke="#6B6F7B"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <button className="md:text-[1rem] text-[14px] font-semibold">
            More
          </button>
        </div>
      </div>

      <p className="mt-2 d:mt-0  flex items-center">
        Sort by :{' '}
        <span className="md:text-[16px] text-[.8rem] text-[#69B99D] font-[600] tracking-wider">
          {sortString}
        </span>
      </p>
    </div>
  );
};

interface SortInterface {
  sortBy: string;
  data: HouseUploadType;
  setData: (a: any) => void;
}

const SortedHouses = ({ sortBy, data, setData }: SortInterface) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<HouseUploadType>([]);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pagination = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${
            currentPage === i ? 'bg-[#69ffb2] text-[#fff]' : ''
          } border border-[grey]  rounded-md shadow-xl font-semibold px-6 text-[#222] `}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="overflow-x-auto">
        <p className="mt-4 flex gap-2 justify-center flex-wrap md:justify-end w-full max-w-[570px] m-auto">
          {pageButtons}
        </p>
      </div>
    );
  };

  const sort = () => {
    if (sortBy === 'Price') {
      const sortedItems = [...data].sort((a, b) => {
        return a.price - b.price;
      });
      setData(sortedItems);
    }

    if (sortBy === 'Apartment') {
      const sortedItems = [...data].sort((a, b) => {
        return a?.state.localeCompare(b?.state);
      });
      setData(sortedItems);
    }
  };

  useEffect(() => {
    sort();
  }, [sortBy]);

  useEffect(() => {
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentData(currentItems);
  }, [data, currentPage]);
  return (
    <div className="mb-2 m-auto  w-full max-w-[754px]   ">
      <section>
        {currentData ? (
          <ViewUploadedHouse data={currentData} />
        ) : (
          <>
            <section className="h-[8rem] mb-2  w-full max-w-[754px] border flex items-center justify-center m-auto ">
              <p className="text-[1rem] lg:text-[18px] font-semibold">
                No House Uploaded Yet
              </p>
            </section>
          </>
        )}

        <p>{pagination()}</p>
      </section>
    </div>
  );
};

interface UploadedPropertyInterface {
  data: HouseUploadType;
}

const ViewUploadedHouse = ({ data }: UploadedPropertyInterface) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataIndex, setDataIndex] = useState<number>(0);

  const handleDelete = (index: number) => {};
  let imageArrays;

  const handleNext = (documentIndex: any) => {
    setDataIndex((prev) => Number(prev) + 1);

    let findData: any = data?.find((x) => x?._id === documentIndex);

    if (findData) {
      imageArrays = findData?.image;
      let dataLastIndex: number = findData?.image?.length - 1;
      if (dataIndex >= dataLastIndex) {
        setDataIndex(0);
      }

      if (dataIndex < 0) {
        setDataIndex(dataLastIndex);
      }
    }
  };

  return (
    <div className="w-full max-w-[1130px] m-auto  md:px-0  rounded-md">
      {data?.length > 0
        ? data?.map((x: HouseUploadInterface, index: any) => {
            return (
              <div
                key={index}
                className="flex flex-wrap justify-center border my-4 rounded-lg py-2 gap-8"
              >
                <div className="flex gap-2 w-full max-w-[380px] flex-wrap justify-center my-3  rounded-lg relative">
                  {/* {x?.image ? (
                    x?.image.map((a: any, i: any) => {
                      return (
                        <div key={i} className="    ">
                          <img
                            src={a?.url}
                            alt=""
                            className={`${
                              i === dataIndex ? 'block' : 'hidden'
                            } w-full h-full object-contain`}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <p>No Image Uploaded</p>
                  )} */}

                  {x?.image[0]?.url ? (
                    <img
                      src={x?.image[0]?.url}
                      alt=""
                      className="w-full h-full  object-contain "
                    />
                  ) : (
                    <p className="font-bold flex justify-center items-center text-[1rem]">
                      No Image Uploaded
                    </p>
                  )}

                  {/* <div className="flex justify-between items-center w-full absolute  top-[50%] bottom-[50%]">
                    <div className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer">
                      <LiaLessThanSolid className="fill-[#fff]" />
                    </div>
                    <div
                      className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer"
                      onClick={() => handleNext(x?._id)}
                    >
                      <LiaGreaterThanSolid className="fill-[#fff]" />
                    </div>
                  </div> */}
                </div>

                {/* HOUSE DETAILS */}
                <div className=" w-full  max-w-[340px] border-2 rounded-lg pl-2 md:h-[360px] ">
                  <h2 className="text-center text-[#000] max-w-max m-auto px-4 uppercase font-bold">
                    {x?.status}
                  </h2>
                  <h2 className="font-normal">
                    House Type :{' '}
                    <span className="font-[600] capitalize">
                      {x?.house_type}
                    </span>
                  </h2>
                  <p className="font-normal">
                    State :{' '}
                    <span className="font-[600] capitalize">{x?.state}</span>,
                    LGA :{' '}
                    <span className="font-[600] capitalize">
                      {x?.local_government}
                    </span>{' '}
                    , Town :{' '}
                    <span className="font-[600] capitalize">{x?.town}</span>
                  </p>
                  <h2 className="text-center font-[600] my-3 border-b-2 border-[#4BA586] max-w-max m-auto uppercase">
                    Interior Details
                  </h2>
                  <p className="flex gap-3 flex-wrap text-[.8rem]">
                    <span>Kitchen = {x?.totalNum_ofKitchen}</span>
                    <span>Parlor = {x?.totalNum_ofParlor}</span>
                    <span>Toilet = {x?.totalNum_ofToilet}</span>
                    <span>BathRoom = {x?.totalNum_ofBathroom}</span>
                    <span>Rooms = {x?.totalNum_ofRooms}</span>
                  </p>
                  <div className="mt-3">
                    <h2 className="text-center font-[600] my-3 border-b-2 border-[#4BA586] max-w-max m-auto uppercase">
                      Agent
                    </h2>
                    <p className="font-[600]">
                      Email:{' '}
                      <span className="font-normal">
                        nwankwoernest2020@gmail.com
                      </span>
                    </p>
                    <p className="font-[600]">
                      Phone Number:{' '}
                      <span className="font-normal">09078987654</span>{' '}
                    </p>
                  </div>
                  <p className="text-end font-bold pr-2">
                    {' '}
                    Price : #{Number(x?.price).toLocaleString()}
                  </p>
                </div>
                <div className="w-full flex justify-center ">
                  <button
                    type="button"
                    onClick={() => navigate(`/dashboard/user/house/${x?._id}`)}
                    className="w-[18rem] border rounded-md bg-[#4BA586] text-[#fff]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
