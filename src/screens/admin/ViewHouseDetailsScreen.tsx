import React, { useEffect, useState } from 'react';
import { DashboardNavbar } from '../../components/adminDashboard/dashboard-navbar';
import { DashboardSideBar } from '../../components/adminDashboard/dashboard-sidebar';
import { Footer } from '../../components/layout';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HouseUploadInterface,
  HouseUploadType,
} from '../../types/user-dashboard/user_dashboard_nav';
import {
  fetchHouseAction,
  getUserUploadedHouseAction,
} from '../../redux/actions/dashboard/house.action';
import { ImageInterface } from '../../types/dashboard/users.types';
import DeleteHouseImageModal from '../../modals/DeleteHouseImageModal';
import EditHouseImageModal from '../../modals/EditHouseImageModal';
import DeleteModal from '../../modals/DeleteModal';

type Props = {};

const ViewHouseDetailsScreen = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <DashboardNavbar setShow={setShow} />
      <section className="flex  ">
        <DashboardSideBar show={show} setShow={setShow} />
        <div
          className={`${
            show ? 'md:pl-[15rem]' : 'md:pl-[5rem]'
          } flex-1   pt-[6rem]  bg-[#F3F4F6] text-[#333] px-2 overflow-x-hidden`}
        >
          <HouseDetails />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ViewHouseDetailsScreen;

const HouseDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [houseData, setHouseData] = useState<HouseUploadType>([]);
  const [showButton, setShowButton] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showDelModal, setShowDelModal] = useState<boolean>(false);

  const [showDelImageModal, setShowDelImageModal] = useState<boolean>(false);
  const [imageId, setImageId] = useState('');

  const [imageUrl, setImageUrl] = useState('');
  const [showEditImageModal, setShowEditImageModal] = useState<boolean>(false);

  const storedData = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') as any)
    : null;

  const token = storedData?.token;
  const fetchedHouses = useSelector(
    (state: StoreReducerTypes) => state?.fetchHouse
  );

  const editHouseImage = useSelector(
    (state: StoreReducerTypes) => state?.editHouseImage
  );

  const deleteHouseImage = useSelector(
    (state: StoreReducerTypes) => state?.deleteHouseImage
  );
  const deleteHouse = useSelector(
    (state: StoreReducerTypes) => state?.deleteHouse
  );

  const id = useLocation()?.pathname?.split('/')[4];

  const getId = (array: [] | any, index: any) => {
    const d = array[index]?._id;
    setImageId(d);
  };
  const getImageUrl = (array: [] | any, index: any) => {
    getId(array, index);
    const d = array[index]?.url;
    setImageUrl(d);
    setShowEditImageModal(true);
  };

  const showDeleteImageModal = (array: [] | any, index: any) => {
    getId(array, index);
    setShowDelImageModal(true);
  };

  useEffect(() => {
    dispatch(fetchHouseAction({ token }) as any);
  }, []);

  useEffect(() => {
    const findData = fetchedHouses?.serverResponse?.Houses?.find(
      (x: any) => x?._id === id
    );

    setHouseData([findData]);
  }, [fetchedHouses]);

  useEffect(() => {
    dispatch(fetchHouseAction({ token }) as any);
  }, [editHouseImage, deleteHouseImage, deleteHouse]);
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
                        className="w-full h-full  object-contain "
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
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="  w-60 h-40  whitespace-nowrap relative"
                              >
                                <img
                                  src={a?.url}
                                  alt=""
                                  className={` w-full h-full object-contain `}
                                />

                                {hoveredIndex === i ? (
                                  <div className=" absolute top-[50%] bottom-[50%] right-6 ">
                                    <div className="my-1">
                                      <button
                                        onClick={() => getImageUrl(x?.image, i)}
                                        className={`${
                                          hoveredIndex === i
                                            ? 'translate-x-0 transform  bg-blue-500 text-white  px-4 rounded-md transition-transform ease-in-out duration-3000'
                                            : 'translate-x-[-100]'
                                        }  `}
                                      >
                                        Edit
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        onClick={() =>
                                          showDeleteImageModal(x?.image, i)
                                        }
                                        className={`${
                                          hoveredIndex === i
                                            ? 'translate-x-0 transform  bg-blue-500 text-white  px-4 rounded-md transition-transform ease-in-out duration-3000'
                                            : 'translate-x-[-100]'
                                        }  `}
                                      >
                                        Del
                                      </button>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                              <DeleteHouseImageModal
                                imageId={imageId}
                                setShow={setShowDelImageModal}
                                show={showDelImageModal}
                                houseId={id}
                                token={token}
                              />
                              <EditHouseImageModal
                                _id={imageId}
                                img_url={imageUrl}
                                setShow={setShowEditImageModal}
                                show={showEditImageModal}
                                token={token}
                                houseId={id}
                              />
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
                  <div className="w-full flex justify-center my-12 px-[22px] gap-2 ">
                    <button
                      type="button"
                      onClick={() => {
                        navigate(`/admin/dashboard/update-house/${x?._id}`);
                        window.scrollTo({
                          top: 26,
                          behavior: 'smooth',
                        });
                      }}
                      className="md:w-[12rem] w-[8rem] border rounded-md bg-[#4BA586] text-[#fff] translate-x-0 transform py-2   px-4 transition-transform ease-in-out duration-3000 "
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowDelModal(true)}
                      className="md:w-[12rem] w-[8rem] border rounded-md bg-[#d183ae] text-[#fff] translate-x-0 transform py-2   px-4 transition-transform ease-in-out duration-3000 "
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <DeleteModal
                  setShow={setShowDelModal}
                  show={showDelModal}
                  houseId={x?._id}
                  house_type={x?.house_type}
                  screen="admin"
                  token={token}
                />
              </>
            );
          })
        : null}
    </div>
  );
};
