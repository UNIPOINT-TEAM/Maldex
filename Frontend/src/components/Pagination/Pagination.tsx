import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Pagination component props interface
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  isLoading,
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
      setValidate(false);
    }
  };

  const handlePageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const pageNumber = value ? parseInt(value, 10) : 0;
    if (!isNaN(pageNumber) && pageNumber >= 0 && pageNumber <= totalPages) {
      setTimeout(() => {
        onPageChange(pageNumber);
        setValidate(false);
      }, 2000);
      setCurrentPage(pageNumber);
    } else {
      setValidate(true);
    }
  };

  return (
    <>
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 text-darkSecondary text-fs_7 font-medium">
          <button
            className=" disabled:cursor-not-allowed"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FaArrowLeftLong />
          </button>
          <p className=" uppercase ">страница</p>
          {isLoading ? (
            <Spinner />
          ) : (
            <input
              value={currentPage}
              onChange={handlePageInputChange}
              className={`  outline-none max-w-[40px] rounded text-center m-0 ${
                validate
                  ? "border-redPrimary border-2 text-redPrimary"
                  : "border-darkSecondary border"
              }`}
              max={totalPages}
            />
          )}
          <p className="">из {totalPages}</p>
          <button
            className=" disabled:cursor-not-allowed"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FaArrowRightLong />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
