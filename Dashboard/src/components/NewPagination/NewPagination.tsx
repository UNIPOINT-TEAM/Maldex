import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

// Pagination component props interface
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const NewPagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [validate, setValidate] = useState<boolean>(false);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    const pageNumber = value ? parseInt(value, 10) : 0;
    if (!isNaN(pageNumber) && pageNumber >= 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-3 text-darkSecondary text-fs_7 font-medium">
        <button
          className=""
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <FaArrowLeftLong />
        </button>
        <p className=" uppercase ">страница</p>
        <input
          value={currentPage}
          onChange={handlePageInputChange}
          className={`  outline-none max-w-[40px] rounded text-center m-0 ${
            validate
              ? 'border-redPrimary border-2 text-redPrimary'
              : 'border-darkSecondary border'
          }`}
          max={totalPages}
        />
        <p className="">из {totalPages}</p>
        <button
          className=" disabled:cursor-not-allowed  "
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </>
  );
};

export default NewPagination;
