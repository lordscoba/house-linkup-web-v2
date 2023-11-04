import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FetchHouseServerResponseInterface,
  FetchedHouseArray,
} from '../../types/dashboard/house.types';
import { StoreReducerTypes } from '../../redux/store';
import { fetchHouseAction } from '../../redux/actions/dashboard/house.action';
import { MdSearch } from 'react-icons/md';
import FlexibleInput from '../home/FlexibleInput';
import CustomPagination from '../pagination/Pagination-3';

type Props = {};

const Property = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pages, setPages] = useState(0) as any;

  const [totalUploads, setTotalUploads] = useState<number>(0);
  const [totalUploaders, setTotalUploaders] = useState<number>(0);

  const [houseArray, setHouseArray] = useState<FetchedHouseArray>([]);

  const handlePageChange = (page: number) => {
    setPageNumber(page);
  };

  const storedData = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') as any)
    : null;

  const token = storedData?.token;

  const fetchedHouses = useSelector(
    (state: StoreReducerTypes) => state?.fetchHouse
  );

  const uploadHouse = useSelector(
    (state: StoreReducerTypes) => state?.uploadHouse
  );

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
      setTotalUploaders(num);
    }
    const houses = fetchedHouses?.serverResponse?.Houses;
    setHouseArray(houses);
    setTotalUploads(totalUploadedHouse);
    // console.log({ houses });
  }, [fetchedHouses]);

  useEffect(() => {
    const h = fetchedHouses?.serverResponse?.Houses;
    if (h) {
      const itemPerPage = 10;
      const indexOfLastItem = itemPerPage * pageNumber;
      const indexOfFirstItem = indexOfLastItem - itemPerPage;
      const d = h.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.floor(h?.length / itemPerPage);
      setHouseArray(d);
      setPages(totalPages);
    }
  }, [fetchedHouses, pageNumber]);
  return (
    <section className="hide-scrollbar bg-[#f7f5f5] py-6">
      <div className="w-full max-w-[33rem] m-auto  flex justify-center items-center gap-4 ">
        <h2>Total Properties : {totalUploads}</h2>
      </div>
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
      <CustomPagination
        totalPages={pages}
        onChangePage={handlePageChange}
        currentPage={pageNumber}
      />
    </section>
  );
};

export default Property;

export interface ServerResponseInterface {
  data: FetchedHouseArray;
  searchTerm: string;
}

const ServerResponse = ({ data, searchTerm }: ServerResponseInterface) => {
  const navigate = useNavigate();
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
                  src={x?.image[0]?.url}
                  alt=""
                  className="border w-full h-full object-cover"
                />
              </div>
              <p className="uppercase my-2 font-bold px-2"> {x?.status}</p>
              <p className="font-bold ">ID : {x?._id}</p>
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
                  onClick={() => navigate(`/property-details/${x?._id}`)}
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
