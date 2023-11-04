import React, { useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChangePage,
}) => {
  const visiblePages = 5;
  const pages: number[] = [];

  // Calculate the range of page numbers to display
  let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let end = Math.min(totalPages, start + visiblePages - 1);

  if (end - start + 1 < visiblePages) {
    start = Math.max(1, end - visiblePages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onChangePage(page);
    }
  };

  return (
    <>
      {' '}
      {totalPages > 0 && (
        <div className="pagination mt-4 flex justify-center md:justify-end">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            (1)
          </button>
          {start > 2 && <span>...</span>}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${
                currentPage === page ? 'active bg-[#61d892] text-[#fff]' : ''
              } border border-[grey] mr-2 rounded-md font-semibold px-6 text-[#222]`}
            >
              {`(${page})`}
            </button>
          ))}
          {end < totalPages - 1 && <span>...</span>}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            ({totalPages})
          </button>
        </div>
      )}
    </>
  );
};

export default CustomPagination;
