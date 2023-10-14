import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  FetchedHouseArrayType,
  FetchedhouseResponseInterface,
} from '../../types/user-dashboard/user_dashboard_nav';

type Props = {};

const UserDashboard = (props: Props) => {
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [data, setData] = useState<FetchedHouseArrayType>([]);
  const [posterId, setPosterId] = useState('');

  const [sortBy, setSortBy] = useState('Price');
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

          <div className="mt-[28px] flex justify-between items-center">
            <div>
              <h4 className="text-[16px] md:text-[28px] font-[500] text-[#333]">
                Apartments in Akwa Ibom
              </h4>
              <p className="flex items-center gap-3 text-[#6B6F7B] font-[400]">
                <span>1248 results</span>{' '}
                <span className="block w-2 h-2 rounded-full bg-[#222]"></span>{' '}
                <span>Jul 14 - 21</span>
              </p>
            </div>

            {/* Roomates */}

            <div className="flex items-center gap-2">
              <span className="md:text-[20px] text-[14px] font-[400] text-[#333]">
                Roomates{' '}
              </span>
              <div
                onClick={() => setRememberMe((prev) => !prev)}
                className={`${
                  rememberMe
                    ? 'bg-[#69B99D] justify-end'
                    : 'bg-[#ECECEC] justify-start'
                } w-[40px] h-[20px] border border-[#C9C9C9]  rounded-[36.5px] flex items-center cursor-pointer`}
              >
                {' '}
                <p
                  className={`${
                    rememberMe ? 'bg-[#FFF]' : 'bg-[#757070]'
                  } w-[1rem] h-[1rem] rounded-[50px] border `}
                ></p>{' '}
              </div>
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
    <div className="mt-[38px] flex flex-wrap justify-center md:justify-between ">
      <div className="flex items-center justify-center md:gap-4 gap-2">
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

      <p className="mt-2 d:mt-0">
        Sort by:{' '}
        <span className="text-[20px] text-[#69B99D] font-[600]">
          {sortString}
        </span>
      </p>
    </div>
  );
};

interface SortInterface {
  sortBy: string;
  data: FetchedHouseArrayType;
  setData: (a: any) => void;
}

const SortedHouses = ({ sortBy, data, setData }: SortInterface) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<FetchedHouseArrayType>([]);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // console.log(data);

  const pagination = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${
            currentPage === i ? 'bg-[#69ffb2] text-[#fff]' : ''
          } border border-[grey] mr-2 rounded-md shadow-xl font-semibold px-6 text-[#222]`}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="mt-4 flex justify-center md:justify-end">
        {pageButtons}
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
        return a?.city.localeCompare(b?.city);
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
        {currentData?.length > 0 ? (
          currentData?.map(
            (item: FetchedhouseResponseInterface, index: any) => {
              return (
                <div
                  key={index}
                  className="my-[38px] bg-[#fff] shadow-2xl  py-[20px]  px-2 rounded-xl"
                >
                  <section className=" flex gap-3 flex-wrap justify-center  ">
                    <div className="w-full lg:w-[408px] h-[324px]  ">
                      <img
                        src={item?.front_image[0]?.url}
                        alt={item?.address}
                        className="w-full object-cover h-full"
                      />
                    </div>

                    <section className="w-full xl:w-[40%] h-[324px] relative  ">
                      <h2 className="text-[#222] capitalize font-bold text-center mb-3  text-[18px] ">
                        {item?.house_type}
                      </h2>
                      <div className=" flex-1 flex items-center gap-2 justify-center lg:justify-start ">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="16"
                            viewBox="0 0 12 16"
                            fill="none"
                          >
                            <path
                              d="M5.99998 0C2.69154 0 0 2.69723 0 6.01258C0 11.3438 5.39888 15.5396 5.62874 15.7157L6.00002 16L6.37106 15.7157C6.60092 15.5396 12 11.3438 12 6.01258C12 2.69719 9.30846 0 5.99998 0ZM5.99954 14.4343C4.81703 13.4145 1.22249 9.98674 1.22249 6.01258C1.22249 3.37267 3.36536 1.22505 5.99998 1.22505C8.63413 1.22505 10.7775 3.37271 10.7775 6.01258C10.7775 9.97823 7.18154 13.4129 5.99954 14.4343Z"
                              fill="#333333"
                            />
                            <path
                              d="M6.10578 9.00037C4.46435 9.00037 3.12891 7.66509 3.12891 6.02375C3.12891 4.38232 4.46431 3.04688 6.10578 3.04688C7.74721 3.04688 9.08261 4.38228 9.08261 6.02375C9.08261 7.66509 7.74721 9.00037 6.10578 9.00037ZM6.10578 4.02315C5.00264 4.02315 4.10514 4.92065 4.10514 6.02379C4.10514 7.12681 5.00264 8.02418 6.10578 8.02418C7.20888 8.02418 8.10638 7.12681 8.10638 6.02379C8.10638 4.92061 7.20892 4.02315 6.10578 4.02315Z"
                              fill="#333333"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="capitalize">
                            {item?.state}, {item?.city}{' '}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center lg:justify-start gap-3 flex-wrap my-2 italic text-[14px]">
                        <span>K = {item?.totalNum_ofKitchen}</span>
                        <span>T = {item?.totalNum_ofToilet}</span>
                        <span>P = {item?.totalNum_ofParlor}</span>
                        <span>R = {item?.totalNum_ofRooms}</span>
                        <span>BTh = {item?.totalNum_ofBathroom}</span>
                      </div>
                      <div className=" mt-[1.5rem]">
                        <h2 className="text-center font-bold text-[18px] tracking-wider">
                          Poster
                        </h2>
                        <p>
                          Name : <span>{item?.poster?.full_name}</span>
                        </p>
                        <p>
                          Email : <span>{item?.email}</span>
                        </p>
                        <p>
                          Address : <span>{item?.address}</span>
                        </p>
                      </div>
                      <div className="flex justify-between items-end mt-3  lg:absolute bottom-0 right-0 left-0">
                        <div>
                          <h4 className="font-bold uppercase">
                            Status : {item?.status}
                          </h4>
                        </div>
                        <div>
                          <p className="font-bold">
                            <span>&#36;</span>{' '}
                            <span>{Number(item?.price).toLocaleString()}</span>
                          </p>
                        </div>
                      </div>
                    </section>
                  </section>
                  <div className="flex gap-3 flex-wrap mt-2">
                    <span>Kichen = K</span>
                    <span>Toilet = T</span>
                    <span>Parlor = P</span>
                    <span>Room = R</span>
                    <span>BathRoom = BTh</span>
                  </div>
                </div>
              );
            }
          )
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
