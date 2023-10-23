import React, { useEffect, useState } from 'react';
import {
  HouseUploadInterface,
  HouseUploadType,
} from '../../types/user-dashboard/user_dashboard_nav';
import UploadForm from './UploadForm';
import { useDispatch } from 'react-redux';

type Props = {};

const ApplicationComponent = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<HouseUploadType>([]);

  return (
    <div>
      <div className="flex xl:justify-between justify-center  flex-wrap my-[21px]">
        <GetUploadedHouse data={data} />
        {/* <Ex /> */}
      </div>

      <div className="mt-[1rem]">
        <article className="text-center ">
          <h2 className="font-bold text-[#000] text-[22px]">
            Personal Details
          </h2>
          <p className="text-[#737373] font-medium">
            Please fill-in your personal details
          </p>
          <p className="text-[#737373] font-medium">
            NOTE: Your peronal information is private
          </p>
        </article>

        <UploadForm setData={setData} />
      </div>
    </div>
  );
};

export default ApplicationComponent;

interface UploadedPropertyInterface {
  data: HouseUploadType;
}

export const GetUploadedHouse = ({ data }: UploadedPropertyInterface) => {
  const dispatch = useDispatch();
  const handleDelete = (index: number) => {};
  return (
    <div className="w-full max-w-[1130px] m-auto px-[22px] md:px-0 rounded-md">
      {data?.length > 0
        ? data?.map((x: HouseUploadInterface, index: any) => {
            return (
              <div key={index} className="flex flex-wrap justify-center gap-3">
                <div className="flex gap-2 w-full max-w-[570px] flex-wrap justify-center border-2 rounded-lg">
                  {x?.image?.map((a: any, i: any) => {
                    return (
                      <div key={i} className="    ">
                        <img
                          src={a}
                          alt=""
                          className="w-40 h-40 object-contain border"
                        />
                      </div>
                    );
                  })}
                </div>
                {/* HOUSE DETAILS */}
                <div className=" w-full max-w-[540px] border-2 rounded-lg pl-2 md:h-[316px]">
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
              </div>
            );
          })
        : null}
    </div>
  );
};
