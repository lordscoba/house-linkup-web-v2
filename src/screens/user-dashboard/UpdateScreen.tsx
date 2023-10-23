import React, { useEffect, useState, useCallback } from 'react';
import UserDashboardNav from '../../components/user-dashboad/UserDashboardNav';
import { Footer } from '../../components/layout';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../redux/store';
import {
  getUserUploadedHouseAction,
  uploadHouseUserAction,
} from '../../redux/actions/dashboard/house.action';
import { fecthAllRegionsAction } from '../../redux/actions/dashboard/location.action';
import { UPLOAD_HOUSE_RESET } from '../../redux/constants/dashboard/house.constants';
import { Loader } from '../../components/loader';
import Message from '../../components/message/Message';
import SelectWithSearch from '../../components/select/SelectWithSearch';
import { ArrowDown } from '../../assets/icons';
import { useLocation } from 'react-router-dom';
import FlexibleInput from '../../components/home/FlexibleInput';

type Props = {};

const UpdateScreen = (props: Props) => {
  return (
    <div>
      <UserDashboardNav />
      <UpdateComponent />
      <Footer />
    </div>
  );
};

export default UpdateScreen;

const UpdateComponent = () => {
  type Props = {
    setData: Function;
  };

  const dispatch = useDispatch();
  //   const [imageArray, setImageArray] = useState([]) as any;
  //   const [image, setImage] = useState<string[]>([]) as any;

  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [numOfParlor, setNumOfParlor] = useState(0);
  const [numOfKitchen, setNumOfKitchen] = useState(0);
  const [numOfToilet, setNumOfToilet] = useState(0);
  const [numOfRooms, setNumOfRooms] = useState(0);
  const [numOfBathRoom, setNumOfBathRoom] = useState(0);
  const [price, setPrice] = useState(0);

  const id = useLocation()?.pathname?.split('/')[4];

  const [selectedTown, setSelectedTown] = useState('');
  const [townArray, setTownArry] = useState([]) as any;
  const [selectedLga, setSelectedLga] = useState('');
  const [lgaArray, setLgaArry] = useState([]) as any;

  const [selectedState, setSelectedState] = useState('');
  const [stateArray, setStateArry] = useState([]);

  const [selectedHomeType, setSelectedHomeType] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const [state, setState] = useState('');
  const [editState, setEditState] = useState<boolean>(false);

  const [lga, setLga] = useState('');
  const [editLga, setEditLga] = useState<boolean>(false);

  const [town, setTown] = useState('');
  const [editTown, setEditTown] = useState<boolean>(false);

  const [houseType, setHouseType] = useState('');
  const [editHouseType, setEditHouseType] = useState<boolean>(false);

  const [house_status, setHouse_status] = useState('');
  const [editHouseStatus, setEditHouseStatus] = useState<boolean>(false);

  const storedData = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') as any)
    : null;

  const token = storedData?.token;

  const handleClick = (e: any) => {
    setSelectedHomeType(e);
    setShowDropDown(false);
  };

  const handleTownSelectChange = (selectedValue: string) => {
    setSelectedTown(selectedValue);
  };
  const handleLgaSelectChange = (selectedValue: string) => {
    setSelectedLga(selectedValue);
  };
  const handleStateSelectChange = (selectedValue: string) => {
    // selectedValue = state;
    setSelectedState(selectedValue);
  };

  useCallback(() => {
    handleStateSelectChange(state);
  }, [state]);

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const uploadHouse = useSelector(
    (state: StoreReducerTypes) => state?.uploadHouse
  );
  const userUploads = useSelector(
    (state: StoreReducerTypes) => state?.getUserUploads
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //   const arrays = {
    //     image: imageArray,
    //     full_name: fullName,
    //     poster_email: email,
    //     address,
    //     house_type: selectedHomeType,
    //     state: selectedState,
    //     local_government: selectedLga,
    //     town: selectedTown,
    //     totalNum_ofParlor: numOfParlor,
    //     totalNum_ofKitchen: numOfKitchen,
    //     totalNum_ofRooms: numOfRooms,
    //     totalNum_ofToilet: numOfToilet,
    //     totalNum_ofBathroom: numOfBathRoom,
    //     status,
    //     price,
    //   };
    //   setData([arrays]);
    window.scrollTo({
      top: 26,
      behavior: 'smooth',
    });

    // dispatch(
    //   uploadHouseUserAction({
    //     address,
    //     description,
    //     email,
    //     full_Name: fullName,
    //     house_type: selectedHomeType,
    //     image,
    //     local_government: selectedLga,
    //     price,
    //     state: selectedState,
    //     status,
    //     token,
    //     totalNum_ofParlor: numOfParlor,
    //     totalNum_ofKitchen: numOfKitchen,
    //     totalNum_ofRooms: numOfRooms,
    //     totalNum_ofToilet: numOfToilet,
    //     totalNum_ofBathroom: numOfBathRoom,
    //     town: selectedTown,
    //   }) as any
    // );

    // dispatch({ type: UPLOAD_HOUSE_RESET });
  };

  // USEEFFECT

  useEffect(() => {
    dispatch(getUserUploadedHouseAction({ token }) as any);
  }, []);

  useEffect(() => {
    const findData = userUploads?.serverResponse?.mapArray?.find(
      (x: any) => x?._id === id
    );

    if (findData) {
      setSelectedState(findData?.state);
      setState(findData?.state);
      setLga(findData?.local_government);
      setTown(findData?.town);
      setHouseType(findData?.house_type);
      setPrice(findData?.price);
      setHouse_status(findData?.status);
      setNumOfBathRoom(findData?.totalNum_ofBathroom);
      setNumOfKitchen(findData?.totalNum_ofKitchen);
      setNumOfParlor(findData?.totalNum_ofParlor);
      setNumOfRooms(findData?.totalNum_ofRooms);
      setNumOfToilet(findData?.totalNum_ofToilet);
      setDescription(findData?.description);
    }

    console.log({ id: findData });
  }, [userUploads]);

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
  }, []);

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (uploadHouse?.success) {
      timeOut = setTimeout(() => {
        uploadHouse.serverResponse.message = '';
        dispatch({ type: UPLOAD_HOUSE_RESET });
      }, 5000);
    }

    if (uploadHouse?.error) {
      timeOut = setTimeout(() => {
        uploadHouse.serverError = '';
        dispatch({ type: UPLOAD_HOUSE_RESET });
      }, 3000);
    }

    return () => clearTimeout(timeOut);
  }, [uploadHouse]);

  useEffect(() => {
    const state = Region
      ? Region?.serverResponse[0]?.states?.map((x: any) => x?.state)
      : [];

    if (state) {
      const lga = Region?.serverResponse[0]?.states?.map(
        (x: any) => x?.local_government
      );
      const lgaArr = [].concat(...lga);
      const mapLga = lgaArr?.map((x: any) => x?.local_government_name);

      const towns: any = lgaArr?.map((t: any) => t?.towns);
      const townsArray = [].concat(...towns);
      const mapTowns = townsArray?.map((dist: any) => dist?.town_name);
      setTownArry(mapTowns);
      setLgaArry(mapLga);
      // console.log({ mapLga });
    }

    setStateArry(state);
  }, [Region]);

  return (
    <section className="w-full max-w-[1130px] py-[23px] m-auto xl:px-0 hide-scrollbar">
      {uploadHouse?.loading ? <Loader variant="circular" /> : null}
      {uploadHouse?.success ? (
        <Message type="success">{uploadHouse?.serverResponse?.message}</Message>
      ) : null}
      {uploadHouse?.error ? (
        <Message type="danger"> {uploadHouse?.serverError}</Message>
      ) : null}
      <form
        onSubmit={handleFormSubmit}
        className="w-full xl:w-[1130px] m-auto bg-[#fff] rounded-lg lg:px-[63px] px-2  py-[42px]    mb-[5rem] border"
      >
        <section className="">
          {/* <section>
            <h2 className="text-center text-[16px] lg:text-[22px] font-semibold mb-3">
              {' '}
              Poster's Details
            </h2>

            <section className="flex gap-[20px] flex-wrap ">
              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="fullName" className="text-[17px] font-[600]">
                  {' '}
                  Full Name <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    id="Fullname"
                    value={fullName}
                    onChange={(e: any) => setFullname(e.target.value)}
                    placeholder="Enter Full Name"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="email" className="text-[17px] font-[600]">
                  Email <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="email"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="address" className="text-[17px] font-[600]">
                  Address <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e: any) => setaddress(e.target.value)}
                    placeholder="email"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
            </section>
          </section>
          <br /> */}

          <section>
            <h2 className="text-center text-[16px] lg:text-[22px] font-semibold mb-3">
              {' '}
              Update House Details
            </h2>

            <section className="flex gap-[20px] flex-wrap">
              <div className="lg:w-[318px] w-full mb-4">
                {!editState ? (
                  <div className="lg:w-[318px] w-full mb-4">
                    <label
                      htmlFor="house-type"
                      className="text-[17px] font-[600]"
                    >
                      {' '}
                      State <span className="text-[red] text-[1.2rem] ">*</span>
                    </label>
                    <div className="flex justify-between items-center border rounded-lg pr-3 cursor-pointer">
                      <FlexibleInput
                        className="text-[14px] px-4 py-2  block"
                        onChange={setState}
                        type="text"
                        value={state}
                      />
                      <span
                        onClick={() => setEditState(true)}
                        className="border bg-blue-500 text-white px-2 rounded-md"
                      >
                        edit
                      </span>
                    </div>
                  </div>
                ) : (
                  <SelectWithSearch
                    onSelect={handleStateSelectChange}
                    options={stateArray}
                    placeholder="Select"
                    label="State"
                  />
                )}
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <div className="lg:w-[318px] w-full mb-4">
                  {!editLga ? (
                    <div className="lg:w-[318px] w-full mb-4">
                      <label
                        htmlFor="house-type"
                        className="text-[17px] font-[600]"
                      >
                        {' '}
                        LGA <span className="text-[red] text-[1.2rem] ">*</span>
                      </label>
                      <div className="flex justify-between items-center border rounded-lg pr-3 cursor-pointer">
                        <FlexibleInput
                          className="text-[14px] px-4 py-2  block"
                          onChange={setLga}
                          type="text"
                          value={lga}
                        />
                        <span
                          onClick={() => setEditLga(true)}
                          className="border bg-blue-500 text-white px-2 rounded-md"
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  ) : (
                    <SelectWithSearch
                      onSelect={handleLgaSelectChange}
                      options={lgaArray}
                      placeholder="Select"
                      label="LGA"
                    />
                  )}
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <div className="lg:w-[318px] w-full mb-4">
                  {!editTown ? (
                    <div className="lg:w-[318px] w-full mb-4">
                      <label
                        htmlFor="house-type"
                        className="text-[17px] font-[600]"
                      >
                        {' '}
                        Town{' '}
                        <span className="text-[red] text-[1.2rem] ">*</span>
                      </label>
                      <div className="flex justify-between items-center border rounded-lg pr-3 cursor-pointer">
                        <FlexibleInput
                          className="text-[14px] px-4 py-2  block"
                          onChange={setTown}
                          type="text"
                          value={town}
                        />
                        <span
                          onClick={() => setEditTown(true)}
                          className="border bg-blue-500 text-white px-2 rounded-md"
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  ) : (
                    <SelectWithSearch
                      onSelect={handleTownSelectChange}
                      options={townArray}
                      placeholder="Select"
                      label="Town"
                    />
                  )}
                </div>
              </div>
              {/* HOME TYPE */}

              <div className="lg:w-[318px] w-full mb-4">
                {editHouseType ? (
                  <div>
                    {' '}
                    <label
                      htmlFor="house-type"
                      className="text-[17px] font-[600]"
                    >
                      {' '}
                      House Type{' '}
                      <span className="text-[red] text-[1.2rem] ">*</span>
                    </label>
                    <div className="mb-4 ">
                      <section>
                        <p
                          className={` border w-full   outline-none flex justify-between items-center text-[#443e3e] text-[14px] px-4 py-2 rounded-md cursor-pointer`}
                          onClick={() => setShowDropDown((prev) => !prev)}
                        >
                          <input
                            type="text"
                            value={selectedHomeType}
                            onChange={(e) => e.target.value}
                            placeholder="Select house type "
                            className="border-none outline-none"
                          />

                          <img
                            src={ArrowDown}
                            alt="arrow icon"
                            width={18}
                            height={18}
                            className="text-end ml-auto cursor-pointer"
                          />
                        </p>

                        {showDropDown ? (
                          <div className="  mt-3 h-[8rem] overflow-y-auto pl-2 ">
                            <section className="mb-4">
                              <h4 className="font-semibold  text-[#333] pl-3 uppercase mb-2">
                                Residential Units
                              </h4>

                              <div
                                onClick={(e: any) => {
                                  handleClick('Self Con');
                                }}
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>Self Con</span>
                              </div>
                              <div
                                onClick={(e: any) => handleClick('Single Room')}
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>Single Room</span>
                              </div>
                              <div
                                onClick={(e: any) =>
                                  handleClick('1 bedroom flat')
                                }
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>1 bedroom flat</span>
                              </div>
                              <div
                                onClick={(e: any) =>
                                  handleClick('2 bedroom flat')
                                }
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>2 bedroom flat</span>
                              </div>
                              <div
                                onClick={(e: any) =>
                                  handleClick('3 bedroom flat')
                                }
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>3 bedroom flat</span>
                              </div>
                              <div
                                onClick={(e: any) => handleClick('Others')}
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>Others</span>
                              </div>
                            </section>
                            <section>
                              <h4 className="font-semibold  text-[#333] pl-3 uppercase mb-2">
                                Commercials
                              </h4>

                              <div
                                onClick={(e: any) => handleClick('Shop')}
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>Shop</span>
                              </div>
                              <div
                                onClick={(e: any) => handleClick('Office')}
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>Office</span>
                              </div>
                              <div
                                onClick={(e: any) => handleClick('Others')}
                                className="cursor-pointer flex items-center gap-2"
                              >
                                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                                <span>Others</span>
                              </div>
                            </section>
                          </div>
                        ) : null}
                      </section>
                    </div>
                  </div>
                ) : (
                  <div className="lg:w-[318px] w-full mb-4">
                    <label
                      htmlFor="house-type"
                      className="text-[17px] font-[600]"
                    >
                      {' '}
                      House Type{' '}
                      <span className="text-[red] text-[1.2rem] ">*</span>
                    </label>
                    <div className="flex justify-between items-center border rounded-lg pr-3 cursor-pointer">
                      <FlexibleInput
                        className="text-[14px] px-4 py-2  block"
                        onChange={setHouseType}
                        type="text"
                        value={houseType}
                      />
                      <span
                        onClick={() => setEditHouseType(true)}
                        className="border bg-blue-500 text-white px-2 rounded-md"
                      >
                        edit
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="price" className="text-[17px] font-[600]">
                  {' '}
                  Price <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e: any) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div>
                {editHouseStatus ? (
                  <div className="lg:w-[318px] w-full mb-4">
                    <label htmlFor="status" className="text-[17px] font-[600]">
                      {' '}
                      Status
                    </label>{' '}
                    <span className="text-[red] text-[1.2rem] ">*</span>
                    <div className="border flex  px-4 py-2 rounded-md">
                      <select
                        name="status"
                        id="status"
                        value={status}
                        onChange={(e: any) => setStatus(e.target.value)}
                        className="w-full border-none outline-none focus:border-none"
                      >
                        <option value="" disabled selected>
                          Select an option (Buy or Rent)
                        </option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div className="lg:w-[318px] w-full mb-4">
                    <label
                      htmlFor="house-type"
                      className="text-[17px] font-[600]"
                    >
                      {' '}
                      Status{' '}
                      <span className="text-[red] text-[1.2rem] ">*</span>
                    </label>
                    <div className="flex justify-between items-center border rounded-lg pr-3 cursor-pointer">
                      <FlexibleInput
                        className="text-[14px] px-4 py-2  block"
                        onChange={setHouse_status}
                        type="text"
                        value={house_status}
                      />
                      <span
                        onClick={() => setEditHouseStatus(true)}
                        className="border bg-blue-500 text-white px-2 rounded-md"
                      >
                        edit
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="NumOfParlor" className="text-[17px] font-[600]">
                  {' '}
                  No Of parlor{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfParlor"
                    id="NumOfParlor"
                    value={numOfParlor}
                    onChange={(e: any) => setNumOfParlor(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label
                  htmlFor="NumOfKitchen"
                  className="text-[17px] font-[600]"
                >
                  {' '}
                  No Of Kitchen{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfKitchen"
                    id="NumOfKitchen"
                    value={numOfKitchen}
                    onChange={(e: any) => setNumOfKitchen(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="NumOfToilet" className="text-[17px] font-[600]">
                  {' '}
                  No Of Toilet{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfToilet"
                    id="NumOfToilet"
                    value={numOfToilet}
                    onChange={(e: any) => setNumOfToilet(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="NumOfRooms" className="text-[17px] font-[600]">
                  {' '}
                  No Of Rooms{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfRooms"
                    id="NumOfRooms"
                    value={numOfRooms}
                    onChange={(e: any) => setNumOfRooms(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label
                  htmlFor="NumOfBathRoom"
                  className="text-[17px] font-[600]"
                >
                  {' '}
                  No Of BathRoom{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfBathRoom"
                    id="NumOfBathRoom"
                    value={numOfBathRoom}
                    onChange={(e: any) => setNumOfBathRoom(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
            </section>
          </section>

          <br />

          <section className="mb-[25px]">
            <label htmlFor="description" className="text-[17px] font-[600]">
              Description{' '}
            </label>
            <span className="text-[red] text-[1.2rem] ">*</span>
            <div>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                className="px-4 border w-full rounded-md h-[151px] pt-2"
              ></textarea>
            </div>
          </section>
          {/* IMAGE UPLOAD */}

          <div className="text-center mt-[55px]">
            <button
              type="submit"
              className="bg-[#69B99D] font-[500] text-[#fff] xl:text-[22px] text-[18px] w-full xl:w-[513px] m-auto xl:py-[16px] py-[8px] rounded-md"
            >
              Submit
            </button>
          </div>
        </section>
      </form>
    </section>
  );
};
