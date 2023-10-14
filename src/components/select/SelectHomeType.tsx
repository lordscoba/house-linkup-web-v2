import React, { ChangeEvent, useState } from 'react';
import { ArrowDown } from '../../assets/icons';

interface SelectProps {
  options: string[];
  onSelect: (selectedOption: any) => void;
  placeholder?: string;
  label: string;
}

const SelectHomeType: React.FC<SelectProps> = ({
  options,
  onSelect,
  placeholder = 'Select an option',
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
    setSearchQuery('');
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredOptions = options?.filter(
    (option) =>
      option?.toLowerCase()?.includes(searchQuery?.toLowerCase()) &&
      option !== selectedOption
  );
  return (
    <div className="select-container">
      <span className="text-[17px] font-[600]">{label}</span>
      <span className="text-[red] text-[1.2rem] ">*</span>
      <div className={` ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        {/* Style for span above style={{ color: labelStyle }} */}
        <label className="border w-full   outline-none flex justify-between items-center text-[#443e3e] text-[14px] px-4 py-2 rounded-md cursor-pointer">
          {selectedOption ? selectedOption : placeholder}

          <img
            src={ArrowDown}
            alt="arrow icon"
            width={18}
            height={18}
            className="text-end ml-auto"
          />
        </label>
      </div>
      {isOpen && (
        <div className="options">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="border w-[90%] m-auto my-2 px-3 rounded-md cursor-pointer"
          />
          <ul className="h-[6rem] overflow-y-auto">
            {filteredOptions.map((option: any, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer flex items-center gap-2"
              >
                <p className="w-1.5 h-1.5 rounded-full bg-black"></p>
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectHomeType;
