import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  deleteLocalGovAction,
  fecthAllRegionsAction,
} from '../../redux/actions/dashboard/location.action';
import { StoreReducerTypes } from '../../redux/store';
import Table from '../../components/Table';
import AddLocationModal from '../../modals/AddLocationModal';
import { DashboardNavbar } from '../../components/adminDashboard/dashboard-navbar';
import { DashboardSideBar } from '../../components/adminDashboard/dashboard-sidebar';
import {
  RESET_DELETE_LOCAL_GOV,
  RESET_GET_ALL_REGION,
} from '../../redux/constants/dashboard/location.constants';

type Props = {};

const LocalGovernmentScreen = (props: Props) => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [dataObj, setDataObj] = useState([]) as any;
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [state_id, setState_id] = useState('');
  const [showLgaModal, setShowLgaModal] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const tableHeaders = [
    { label: 'LGA' },
    { label: 'View Towns' },
    { label: 'Update' },
    { label: 'Delete ' },
  ];

  const location = useLocation().pathname?.split('/')[4];
  const index = useLocation().pathname?.split('/')[5];

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const lga = useSelector((state: StoreReducerTypes) => state?.addLocalGov);
  const delete_lga = useSelector(
    (state: StoreReducerTypes) => state?.deleteLocalGov
  );

  const handleUpdate = (index: any) => {};

  const openLgaModal = () => {
    setShowLgaModal(true);
  };

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
    dispatch({ type: RESET_GET_ALL_REGION });
  }, []);
  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
  }, [lga, delete_lga]);

  useEffect(() => {
    const array = Region?.serverResponse;
    const name = array?.region;

    // const countryIndex = array.findIndex((x: any) => x?._id === location);
    // const countryIndex = array.findIndex(
    //   (x: any) => JSON.stringify(x?._id) === JSON.stringify(countryId)
    // );
    const find = array[0]?.states[index]?.local_government;
    const dataOBJ = find?.map((x: any) => x);
    const data = find?.map((x: any) => x?.local_government_name);
    const country = array[0]?.region;
    const state = array[0]?.states[index]?.state;
    const stateId = array[0]?.states[index]?._id;
    setState_id(stateId);
    setCountry(country);
    setState(state);
    setData(data);
    setDataObj(dataOBJ);
    // console.log({ countryIndex });
  }, [Region]);

  return (
    <>
      <DashboardNavbar setShow={setShow} />
      <section className="flex   ">
        <DashboardSideBar show={show} setShow={setShow} />

        <section
          className={`${
            show ? 'md:pl-[15rem]' : 'md:pl-[5rem]'
          } flex-1  pt-[6rem] bg-[#F3F4F6]  m-auto text-[#333] overflow-x-hidden py-4`}
        >
          <div className="pl-3">
            <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold ">
              Region / Country : {country}
            </h4>
            <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold">
              {' '}
              State : {state}
            </h4>
          </div>
          <div onClick={openLgaModal} className=" w-[12rem]  ml-auto my-4 pr-4">
            <button className="w-full border md:px-8 md:py-1 px-2 py-2 bg-[#6726A8] text-[#fff] rounded-lg text-[.8rem] md:text-[1rem]">
              ADD LGA
            </button>
          </div>
          <Table
            columns={tableHeaders}
            data={data}
            documentId={location}
            stateId={state_id}
            dataDetails={dataObj}
            screen="lga"
            link={`/admin/dashboard/town/${Region?.serverResponse?.[0]?._id}_${state_id}`}
          />
          <AddLocationModal
            Region={country}
            countryId={location}
            setShow={setShowLgaModal}
            show={showLgaModal}
            stateId={state_id}
            location="LGA"
            screen="LGA"
          />
        </section>
      </section>
    </>
  );
};

export default LocalGovernmentScreen;
