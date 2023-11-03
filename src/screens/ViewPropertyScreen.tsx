import React, { useState, useEffect } from 'react';
import { Footer, Nav } from '../components/layout';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HouseUploadInterface,
  HouseUploadType,
} from '../types/user-dashboard/user_dashboard_nav';
import { fetchHouseAction } from '../redux/actions/dashboard/house.action';
import { StoreReducerTypes } from '../redux/store';
import DeleteModal from '../modals/DeleteModal';
import {
  FetchHouseServerResponseInterface,
  FetchedHouseArray,
  ImageInterface,
} from '../types/dashboard/house.types';

type Props = {};

const ViewPropertyScreen = (props: Props) => {
  return (
    <div>
      <Nav />
      <PropertyDetails />
      <Footer />
    </div>
  );
};

export default ViewPropertyScreen;

const PropertyDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [houseData, setHouseData] = useState<HouseUploadType>([]);
  const [filteredHouses, setFilteredHouses] = useState<FetchedHouseArray>([]);
  const [showDelModal, setShowDelModal] = useState<boolean>(false);

  const id = useLocation()?.pathname?.split('/')[2];

  const fetchedHouses = useSelector(
    (state: StoreReducerTypes) => state?.fetchHouse
  );

  useEffect(() => {
    dispatch(fetchHouseAction() as any);
  }, []);

  useEffect(() => {
    const findData = fetchedHouses?.serverResponse?.Houses?.find(
      (x: any) => x?._id === id
    );
    if (findData) {
      const posterId = findData?.poster?._id;
      if (posterId) {
        const filter = fetchedHouses?.serverResponse?.Houses?.filter(
          (x: any) => x?.poster?._id === posterId
        );
        setFilteredHouses(filter);
      }
      setHouseData([findData]);
    }
  }, [fetchedHouses, id]);

  const handleButtonClick = (id: string) => {
    window.scrollTo({
      top: 26,
      behavior: 'smooth',
    });
    navigate(`/property-details/${id}`);
  };

  return (
    <div className="w-full max-w-[1200px] m-auto ">
      {houseData?.length > 0
        ? houseData?.map((x: HouseUploadInterface, index: any) => {
            return (
              <>
                <div key={index}>
                  <h2 className="text-center md:text-[1.5rem] text-[1.2rem] font-bold uppercase my-6">
                    {x?.house_type}
                  </h2>
                  <div className="max-w-[450px] w-full h-90 m-auto px-1">
                    {x?.image[0]?.url ? (
                      <img
                        src={x?.image[0]?.url}
                        alt=""
                        className="w-full h-full object-cover "
                      />
                    ) : (
                      <p className="font-bold flex justify-center items-center text-[1rem]">
                        No Image Uploaded
                      </p>
                    )}
                  </div>
                  <h4 className="text-center my-6  md:text-[1.5rem] text-[1.2rem] font-bold uppercase">
                    Other Images
                  </h4>
                  <div className=" overflow-x-auto">
                    <div className="flex justify-center items-center gap-2 w-[800px] m-auto px-4 ">
                      {x?.image ? (
                        x?.image.map((a: ImageInterface, i: any) => {
                          return (
                            <>
                              <div
                                key={i}
                                className="  w-60 h-40  whitespace-nowrap relative"
                              >
                                <img
                                  src={a?.url}
                                  alt=""
                                  className={` w-full h-full object-cover `}
                                />
                              </div>
                            </>
                          );
                        })
                      ) : (
                        <p>No Image Uploaded</p>
                      )}
                    </div>
                  </div>
                  <h2 className="text-center my-6  md:text-[1.5rem] text-[1.2rem] font-bold uppercase">
                    House Details
                  </h2>
                  <section className="px-4">
                    <div className=" w-full  max-w-[550px] border-2 rounded-lg pl-2 md:h-[320px] m-auto ">
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
                        <span className="font-[600] capitalize">
                          {x?.state}
                        </span>
                        , LGA :{' '}
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
                  </section>
                  <div>
                    <h2 className="text-center my-6  md:text-[1.5rem] text-[1.2rem] font-bold uppercase">
                      Other Uploads By This Agent
                    </h2>
                    <div className="w-full max-w-[1200px] m-auto  flex flex-wrap justify-center items-center gap-3 px-2  my-4">
                      {filteredHouses?.map(
                        (
                          item: FetchHouseServerResponseInterface,
                          index: any
                        ) => {
                          return (
                            <div key={index} className="border ">
                              <div className="w-full max-w-[24rem] md:w-[24rem]  h-[16rem] ">
                                <img
                                  src={item?.image[0]?.url}
                                  alt=""
                                  className="border w-full h-full object-cover"
                                />
                              </div>
                              <p className="uppercase my-2 font-bold px-2">
                                {x?.status}
                              </p>
                              <section className="flex items-center gap-3">
                                <div className="my-3 px-2">
                                  {item?.poster?.image?.length !== 0 ? (
                                    <img
                                      src={item?.poster?.image[0]?.url}
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
                                  <p className="capitalize">
                                    {item?.poster?.full_name}
                                  </p>
                                  <p>{item?.poster?.email}</p>
                                  <p>{item?.poster?.phone_number}</p>
                                </div>
                              </section>
                              <div className="text-right pr-2 py-2">
                                <button
                                  onClick={() =>
                                    // navigate(`/property-details/${item?._id}`)
                                    handleButtonClick(item?._id)
                                  }
                                  className="border md:px-8 py-2 px-3 bg-[#6726A8] text-[#fff]"
                                >
                                  view details
                                </button>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })
        : null}
    </div>
  );
};
