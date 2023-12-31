import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../redux/store';
import { uploadHouseUserAction } from '../../redux/actions/dashboard/house.action';
import { fecthAllRegionsAction } from '../../redux/actions/dashboard/location.action';
import { UPLOAD_HOUSE_RESET } from '../../redux/constants/dashboard/house.constants';
import { Loader } from '../loader';
import Message from '../message/Message';
import SelectWithSearch from '../select/SelectWithSearch';
import { ArrowDown } from '../../assets/icons';

type Props = {
  // setData: Function;
};

const UploadHouse = (Props: Props) => {
  const dispatch = useDispatch();
  const [imageArray, setImageArray] = useState([]) as any;
  const [image, setImage] = useState<string[]>([]) as any;

  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [numOfParlor, setNumOfParlor] = useState(0);
  const [numOfKitchen, setNumOfKitchen] = useState(0);
  const [numOfToilet, setNumOfToilet] = useState(0);
  const [numOfRooms, setNumOfRooms] = useState(0);
  const [numOfBathRoom, setNumOfBathRoom] = useState(0);
  const [price, setPrice] = useState(0);

  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setaddress] = useState('');

  const [selectedTown, setSelectedTown] = useState('');
  const [townArray, setTownArry] = useState([]) as any;
  const [selectedLga, setSelectedLga] = useState('');
  const [lgaArray, setLgaArry] = useState([]) as any;

  const [selectedState, setSelectedState] = useState('');
  const [stateArray, setStateArry] = useState([]);

  const [selectedHomeType, setSelectedHomeType] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

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
    setSelectedState(selectedValue);
  };

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const uploadHouse = useSelector(
    (state: StoreReducerTypes) => state?.uploadHouse
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.scrollTo({
      top: 26,
      behavior: 'smooth',
    });

    dispatch(
      uploadHouseUserAction({
        address,
        description,
        email,
        full_Name: fullName,
        house_type: selectedHomeType,
        image,
        local_government: selectedLga,
        price,
        state: selectedState,
        status,
        token,
        totalNum_ofParlor: numOfParlor,
        totalNum_ofKitchen: numOfKitchen,
        totalNum_ofRooms: numOfRooms,
        totalNum_ofToilet: numOfToilet,
        totalNum_ofBathroom: numOfBathRoom,
        town: selectedTown,
      }) as any
    );
  };

  // USEEFFECT

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
    <div>
      <section className="w-full max-w-[1130px] py-[23px] m-auto xl:px-0 hide-scrollbar">
        {uploadHouse?.loading ? <Loader variant="circular" /> : null}
        {uploadHouse?.success ? (
          <Message type="success">
            {uploadHouse?.serverResponse?.message}
          </Message>
        ) : null}
        {uploadHouse?.error ? (
          <Message type="danger"> {uploadHouse?.serverError}</Message>
        ) : null}
        <form
          onSubmit={handleFormSubmit}
          className="w-full xl:w-[1130px] m-auto bg-[#fff] rounded-lg lg:px-[63px] px-2  py-[42px]    mb-[5rem] border"
        >
          <section className="">
            <section>
              <h2 className="text-center text-[16px] lg:text-[22px] font-semibold mb-3">
                {' '}
                Poster's Details
              </h2>

              <section className="flex gap-[20px] flex-wrap ">
                <div className="lg:w-[318px] w-full mb-4">
                  <label htmlFor="fullName" className="text-[17px] font-[600]">
                    {' '}
                    Full Name{' '}
                    <span className="text-[red] text-[1.2rem] ">*</span>
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
            <br />

            <section>
              <h2 className="text-center text-[16px] lg:text-[22px] font-semibold mb-3">
                {' '}
                House Details
              </h2>

              <section className="flex gap-[20px] flex-wrap">
                <div className="lg:w-[318px] w-full mb-4">
                  <SelectWithSearch
                    onSelect={handleStateSelectChange}
                    options={stateArray}
                    placeholder="Select"
                    label="State"
                  />
                </div>

                <div className="lg:w-[318px] w-full mb-4">
                  <SelectWithSearch
                    onSelect={handleLgaSelectChange}
                    options={lgaArray}
                    placeholder="Select"
                    label="LGA"
                  />
                </div>

                <div className="lg:w-[318px] w-full mb-4">
                  <SelectWithSearch
                    onSelect={handleTownSelectChange}
                    options={townArray}
                    placeholder="Select"
                    label="Town"
                  />
                </div>
                {/* HOME TYPE */}
                <div className="lg:w-[318px] w-full mb-4">
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

                <div className="lg:w-[318px] w-full mb-4">
                  <label
                    htmlFor="NumOfParlor"
                    className="text-[17px] font-[600]"
                  >
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
                  <label
                    htmlFor="NumOfToilet"
                    className="text-[17px] font-[600]"
                  >
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
                  <label
                    htmlFor="NumOfRooms"
                    className="text-[17px] font-[600]"
                  >
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
            <HouseImages setImageArray={setImageArray} setImg={setImage} />

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
    </div>
  );
};

export default UploadHouse;

interface HouseInterface {
  setImageArray: (a: any) => void;
  setImg: (a: any) => void;
}

const HouseImages = ({ setImageArray, setImg }: HouseInterface) => {
  const [image, setImage] = useState(null) as any;
  const [imageName, setImageName] = useState('');
  const [files, setFiles] = useState<[]>([]) as any;
  const [arr, setArr] = useState([]) as any;
  const fileRef = useRef(null) as any;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files;

    // setImage(file);
    if (file) {
      const imageURL = URL.createObjectURL(file[0]);
      setImage(imageURL);
      setImageName(file[0]?.name);
      setArr([...arr, imageURL]);
      setImageArray([...arr, imageURL]);
      setFiles([...files, file]);
      setImg([...files, file]);
    }
  };

  // HANDLE DROP FUNCTION
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files;
    // setImg(file);
    if (file) {
      const imageURL = URL.createObjectURL(file[0]);
      setImage(imageURL);
      setImageName(file[0]?.name);
      setArr([...arr, file]);
      setImageArray([...arr, imageURL]);
      setFiles([...files, file]);
      setImg([...files, file]);
    }
  };

  // HANDLE DRAG OVER

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // HANDLE LABEL CLICK THAT OPENS THE IMAGE FOLDER
  const handleLabelClick = () => {
    fileRef.current.click();
  };

  const removeImage = (index: number) => {
    const newFiles = [...arr];
    const splice = newFiles.splice(index, 1);
    setArr(newFiles);
  };

  return (
    <section>
      <h2 className="text-[18px] font-[600] text-[#000] text-center my-3">
        Upload External Images of the House
      </h2>
      <div className="image-uploader border-2 border-dashed border-[#69B99D] rounded-md px-2  py-[20px] ">
        <div
          className="drop-area h-full flex gap-4 flex-wrap "
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {arr?.length > 0
            ? arr.map((x: any, index: any) => {
                return (
                  <div key={index} className="relative">
                    <img
                      src={x}
                      alt="image blob"
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <button
                      onClick={() => removeImage(index)}
                      type="button"
                      className="absolute top-0 -right-1 bg-red-500 text-white py-1 px-2 rounded-full"
                    >
                      &times;
                    </button>
                  </div>
                );
              })
            : null}
        </div>
        <div className="inline-block w-full relative cursor-pointer text-center  ">
          <label
            htmlFor="browse"
            onClick={handleLabelClick}
            className="inline-block py-[10px] px-[20px] cursor-pointer text-[#69B99D] font-[500] text-[1rem]"
          >
            Drag and drop an image here or <br />
            Browse
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            ref={fileRef}
            className="hidden"
          />
        </div>
      </div>
      <section className="border text-center w-full max-w-[22rem] m-auto mt-6">
        <h2 className="uppercase font-bold ">NOTE</h2>
        <p className="uppercase font-medium ">
          Front View of the house should be added first
        </p>
      </section>
    </section>
  );
};
