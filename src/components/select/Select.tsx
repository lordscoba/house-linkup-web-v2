// import React, { ChangeEvent } from 'react';

// interface SelectProps {
//   options: string[];
//   value: string;
//   onChange: (selectedValue: string) => void;
// }

// const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
//   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     onChange(event.target.value);
//   };

//   return (
//     <select value={value} onChange={handleChange}>
//       {options.map((option, index) => (
//         <option key={index} value={option} >
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default Select;

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from '../../assets/icons';

const Select = ({ options, onOptionSelected, label, show, setShow }: any) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [labelStyle, setLabelStyle] = useState('#484646');
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDropdownClicked = () => {
    setShow(true);
    // setToggleDropdown(true);
  };

  const handleDropdownClosed = () => {
    setShow(false);
  };

  const handleOptionClicked = (option: string) => {
    onOptionSelected(option);
    setSelectedOption(option);
    setShow(false);
  };

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = options?.filter((item: any) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div onClick={handleDropdownClicked}>
      <div className="select">
        <span className="text-[17px] font-[600]">{label}</span>
        {/* Style for span above style={{ color: labelStyle }} */}
        <label className="border w-full   outline-none flex justify-between items-center text-[#443e3e] text-[14px] px-4 py-2 rounded-md">
          {selectedOption}

          <img
            src={ArrowDown}
            alt="arrow icon"
            width={18}
            height={18}
            className="text-end ml-auto"
          />
        </label>
      </div>
      {show && filteredItems?.length ? (
        <ul className="dropdown-list">
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="border w-[90%] m-auto my-2 "
            />
          </div>
          <div
            className="h-[6rem] overflow-y-auto"
            onClick={handleDropdownClosed}
          >
            {filteredItems?.map((option: string, i: number) => (
              <li
                key={i}
                onClick={() => handleOptionClicked(option)}
                className="cursor-pointer"
              >
                {option}
              </li>
            ))}
          </div>
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
