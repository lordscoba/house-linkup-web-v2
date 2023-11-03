import React from 'react';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`border border-[grey] mr-2 rounded-md font-semibold px-6 text-[#222]`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="mt-4 flex justify-center md:justify-end">{pageButtons}</div>
  );
};

export default Pagination;
