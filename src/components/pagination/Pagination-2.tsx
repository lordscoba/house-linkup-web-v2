import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination2: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination mt-4 flex justify-center md:justify-end">
      {pageNumbers.map((page) => {
        const isCurrent = page === currentPage;
        return (
          <span
            key={page}
            className={`pagination-item ${
              isCurrent ? 'current' : ''
            } border border-[grey] mr-2 rounded-md font-semibold px-6 text-[#222]`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination2;
