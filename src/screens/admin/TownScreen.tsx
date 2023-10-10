import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fecthAllRegionsAction } from '../../redux/actions/dashboard/location.action';
import { StoreReducerTypes } from '../../redux/store';
import Table from '../../components/Table';
import AddLocationModal from '../../modals/AddLocationModal';
import { DashboardNavbar } from '../../components/adminDashboard/dashboard-navbar';
import { DashboardSideBar } from '../../components/adminDashboard/dashboard-sidebar';

type Props = {};

const TownScreen = (props: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const [localGovId, setLocalGovId] = useState('');
  const [show, setShow] = useState<boolean>(false);
  const [showsidebar, setShowSideBar] = useState<boolean>(false);

  const countryId = useLocation()?.pathname?.split('/')[4]?.split('_')[0];
  const stateId = useLocation()?.pathname?.split('/')[4]?.split('_')[1];
  const index = useLocation().pathname?.split('/')[5];

  const tableHeaders = [
    { label: 'Towns' },
    // { label: 'View Towns' },
    { label: 'Update' },
    { label: 'Delete ' },
  ];

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const addTown = useSelector((state: StoreReducerTypes) => state?.addTown);

  const deleteTown = (index: any) => {};
  const updateTown = () => {};

  const openTownModal = () => {};
  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
  }, []);
  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
  }, [addTown]);

  useEffect(() => {
    const array = Region?.serverResponse;
    // const countryIndex = array.findIndex(
    //   (x: any) => JSON.stringify(x?._id) === JSON.stringify(countryId)
    // );

    const country = array[0]?.region;
    const stateIndex = array[0]?.states.findIndex(
      (x: any) => JSON.stringify(x?._id) === JSON.stringify(stateId)
    );
    const state = array[0]?.states[stateIndex]?.state;
    const localGovId =
      array[0]?.states[stateIndex]?.local_government[index]?._id;
    const localGov =
      array[0]?.states[stateIndex]?.local_government[index]
        ?.local_government_name;
    const towns = array[0]?.states[stateIndex]?.local_government[index]?.towns;
    const townString =
      towns?.length > 0 ? towns?.map((x: any) => x?.town_name) : null;
    setCountry(country);
    setState(state);
    setData(townString);
    setLga(localGov);
    setLocalGovId(localGovId);
  }, [Region]);

  return (
    <>
      <DashboardNavbar setShow={setShowSideBar} />
      <section className="flex   ">
        <DashboardSideBar show={showsidebar} setShow={setShowSideBar} />
        <div
          className={`${
            show ? 'md:pl-[15rem]' : 'md:pl-[5rem]'
          } flex-1  pt-[6rem] bg-[#F3F4F6]  m-auto text-[#333] overflow-x-hidden py-4`}
        >
          {' '}
          <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold uppercase pl-3">
            Region / Country : {country}
          </h4>
          <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold uppercase pl-3">
            {' '}
            State : {state}
          </h4>
          <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold uppercase pl-3">
            {' '}
            LGA : {lga}
          </h4>
          <div onClick={openTownModal} className=" w-[12rem]  ml-auto my-4 ">
            <button
              onClick={() => setShow(true)}
              className="w-full border md:px-8 md:py-1 px-2 py-2 bg-[#6726A8] text-[#fff] rounded-lg text-[.8rem] md:text-[1rem] pr-4"
            >
              ADD TOWN
            </button>
          </div>
          <Table
            columns={tableHeaders}
            data={data}
            onDeleteClick={deleteTown}
            onEditClick={updateTown}
            noView={true}
          />
          <AddLocationModal
            Region={country}
            countryId={countryId}
            location="Town"
            setShow={setShow}
            show={show}
            index={index}
            screen="Town"
            localGovId={localGovId}
            stateId={stateId}
          />
        </div>
      </section>
    </>
  );
};

export default TownScreen;
