import React, { ReactNode } from 'react';

interface TableProps {
  data: any[]; // An array of objects containing table data
  columns: {
    label: string;
    key: string;
    render?: (item: any) => ReactNode; // Optional custom render function for cells
  }[]; // Array of column definitions
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <>
      <section className="bg-[#fff] p-[1rem] rounded-lg mt-10 overflow-x-auto overflow-y-auto md:h-auto w-full hide-scrollbar   ">
        <div className=" w-full">
          <table className=" w-full bg-[#fff] rounded-lg ">
            <thead className="bg-[#fff] text-[#333]">
              <tr className="flex justify-between border w-full">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-4 py-2 text-[black]  whitespace-nowrap"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="flex justify-between border w-full"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-4 py-2 text-[black]  whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(item[column.key])
                        : item[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Table;
