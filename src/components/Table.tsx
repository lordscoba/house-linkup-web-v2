import React, { ReactNode, useState } from 'react';
import { EditIcon, RedDeleteIcon } from '../assets/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteLocalGovAction } from '../redux/actions/dashboard/location.action';
import { RESET_DELETE_LOCAL_GOV } from '../redux/constants/dashboard/location.constants';
import DeleteModal from '../modals/DeleteModal';

// interface DynamicInterface {
//   [key: string]: number; // Property names are strings, and values are numbers
// }

interface TableProps {
  data: string[];
  columns: {
    label: string;
    render?: (item: any) => ReactNode; // Optional custom render function for cells
  }[];
  link?: string;
  noView?: boolean;
  dataDetails?: string[];
  documentId?: string;
  stateId?: string;
  screen: string;
  local_gov_id?: string;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  link,
  noView,
  dataDetails,
  documentId,
  stateId,
  screen,
  local_gov_id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [lga_id, setLga_id] = useState('') as any;
  const [state_id, setState_id] = useState('') as any;
  const [text, setText] = useState('');
  const [screenName, setScreenName] = useState('');

  const [townId, setTownId] = useState('');

  const view = (index: any) => {
    const item = data[index];
    navigate(`${link}/${index}`);
  };

  const onDeleteClick = (index: any) => {
    if (screen === 'lga') {
      setText('LGA');
      setScreenName('lga');
      const findState: any = dataDetails?.find(
        (x: any) => x?.local_government_name === index
      );
      const _id = findState?._id;
      setLga_id(_id);
      setName(index);
      setState_id(stateId);
    }

    if (screen === 'town') {
      setText('Town');
      setScreenName('town');
      const findTown: any = dataDetails?.find(
        (x: any) => x?.town_name === index
      );
      const townId = findTown?._id;
      setName(index);
      setTownId(townId);
      setLga_id(local_gov_id);
      setState_id(stateId);
    }

    if (screen === 'state') {
      setText('State');
      setScreenName('state');
      setName(index);
      const state: any = dataDetails?.find((x: any) => x?.state === index);
      const id = state?._id;
      setState_id(id);
    }

    setShowDelete(true);
  };

  const onEditClick = (index: any) => {};
  return (
    <>
      <section className="bg-[#fff] p-[1rem] rounded-lg mt-10 overflow-x-auto overflow-y-auto md:h-auto w-full hide-scrollbar   ">
        <div className=" w-[1200px] m-auto">
          <table className=" w-full bg-[#fff] rounded-lg border ">
            <thead className="bg-[#fff] text-[#333] ">
              <tr className="flex gap-1  w-full">
                {columns?.length > 0
                  ? columns?.map((column, i) => (
                      <th
                        key={i}
                        className="flex-1 py-2 text-[black]  whitespace-nowrap w-[15rem] border uppercase "
                      >
                        {column.label}{' '}
                      </th>
                    ))
                  : null}
              </tr>
            </thead>
            <tbody>
              {data?.length > 0
                ? data?.map((item: any, index: any) => (
                    <tr key={index} className="flex gap-1  w-full">
                      <td
                        className={`flex-1 px-4 py-2 text-[black]  whitespace-nowrap w-[15rem] text-center border capitalize font-[500]`}
                      >
                        {item}
                      </td>
                      {noView ? (
                        ''
                      ) : (
                        <td
                          onClick={() => view(index)}
                          className={`flex-1 px-4 py-2 text-[black] cursor-pointer whitespace-nowrap w-[15rem] text-center border hover:bg-[#D9F4DD] hover:text-[green]`}
                        >
                          <button className="  rounded-sm w-full text-lg">
                            View
                          </button>
                        </td>
                      )}

                      <td
                        className={`flex-1 px-4 py-2 text-[black] cursor-pointer  whitespace-nowrap w-[15rem] text-center border hover:bg-[#D9F4DD] hover:text-[green]`}
                      >
                        <button onClick={() => onEditClick(item)}>
                          {' '}
                          <img
                            src={EditIcon}
                            alt="Edit icon"
                            className="w-6 h-6 cursor-pointer"
                          />
                        </button>
                      </td>
                      <td
                        className={` flex-1 px-4 py-2 text-[black]  whitespace-nowrap w-[15rem] text-center border`}
                      >
                        <button onClick={() => onDeleteClick(item)}>
                          {' '}
                          <img
                            src={RedDeleteIcon}
                            alt="Red delete icon"
                            className="w-6 h-6 cursor-pointer "
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </section>
      <DeleteModal
        setShow={setShowDelete}
        show={showDelete}
        text={text}
        deleteFunc={onDeleteClick}
        local_gov_name={name}
        town_name={name}
        state={name}
        countryId={documentId}
        stateId={state_id}
        localGovId={lga_id}
        townId={townId}
        screen={screenName}
      />
    </>
  );
};

export default Table;
