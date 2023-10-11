import React, { useEffect, useState } from 'react';
import Table from '../../Table';
import { useDispatch, useSelector } from 'react-redux';
import { fecthAllRegionsAction } from '../../../redux/actions/dashboard/location.action';
import { RESET_ADD_STATE } from '../../../redux/constants/dashboard/location.constants';
import { StoreReducerTypes } from '../../../redux/store';
import AddLocationModal from '../../../modals/AddLocationModal';

type Props = {};

const Location = (props: Props) => {
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]) as any;
  const [dataObj, setDataObj] = useState([]) as any;
  const [countryId, setCountryId] = useState('');
  const [show, setShow] = useState<boolean>(false);

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const add_state = useSelector((state: StoreReducerTypes) => state?.addState);
  const delete_state = useSelector(
    (state: StoreReducerTypes) => state?.deleteState
  );

  const tableHeaders = [
    { label: 'States' },
    { label: 'View LGA' },
    { label: 'Update' },
    { label: 'Delete ' },
  ];

  const addState = () => {
    setShow(true);
  };

  const handleCountryDelete = () => {};

  useEffect(() => {
    const d = Region?.serverResponse[0]?.states?.map((x: any) => x?.state);
    const countryID = Region?.serverResponse[0]?._id;
    const obj = Region?.serverResponse[0]?.states;
    setCountryId(countryID);
    setArr(d);
    setDataObj(obj);
  }, [Region]);

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
  }, []);

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
  }, [add_state, delete_state]);

  return (
    <div className="p-3 md:p-5 flex flex-col gap-5">
      <h2 className=" max-w-max m-auto lg:text-2xl text-[20px] font-bold uppercase border-b-2">
        Location Management
      </h2>

      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="my-2 lg:text-2xl text-[20px]">
          Region / Country :{' '}
          <span className="font-bold text-[1.1rem]">Nigeria</span>
        </h2>
        <div className="flex gap-3">
          {/* <button
            onClick={() => handleCountryDelete()}
            className="  border md:px-8 md:py-1 px-6 py-0  bg-[#6726A8] text-[#fff] rounded-lg"
          >
            Delete Country
          </button> */}
          <button
            onClick={() => addState()}
            className=" border md:px-8 md:py-1 p-3 bg-[#6726A8] text-[#fff] rounded-lg"
          >
            Add State
          </button>
        </div>
      </div>

      <Table
        columns={tableHeaders}
        data={arr}
        screen="state"
        dataDetails={dataObj}
        documentId={countryId}
        link={`/admin/dashboard/local-gov/${Region?.serverResponse?.[0]?._id}`}
      />
      <AddLocationModal
        screen="state"
        location="State"
        Region={Region?.serverResponse[0]?.region}
        countryId={countryId}
        setShow={setShow}
        show={show}
      />
    </div>
  );
};

export default Location;
