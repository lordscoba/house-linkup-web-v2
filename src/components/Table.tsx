import React, { ReactNode } from 'react';
import { EditIcon, RedDeleteIcon } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

interface TableProps {
  data: string[];
  onEditClick: (item: { id: number }) => void;
  onDeleteClick: (item: { id: number }) => void;
  columns: {
    label: string;

    render?: (item: any) => ReactNode; // Optional custom render function for cells
  }[]; // Array of column definitions
  link?: string;
  noView?: boolean;
  // countryId: string;
}

const Table: React.FC<TableProps> = ({
  data,
  onEditClick,
  onDeleteClick,
  columns,
  link,
  noView,
}) => {
  const navigate = useNavigate();
  const view = (index: any) => {
    const item = data[index];
    navigate(`${link}/${index}`);
  };
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
    </>
  );
};

export default Table;
