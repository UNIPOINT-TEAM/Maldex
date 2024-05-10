import Pagination from 'react-bootstrap/Pagination';
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';

const PaginationCard = (props: any) => {
  const { currentPage, setCurrentPage, totalPages } = props;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Pagination className="mt-4 flex w-full justify-center gap-10">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="w-[40px] h-[40px] bg-blue-400 rounded-md flex justify-center items-center text-white"
      >
        <GrFormPreviousLink size={25} />
      </button>

      <button
        onClick={handleNextPage}
        className="w-[40px] h-[40px] bg-blue-400 rounded-md flex justify-center items-center text-white"
      >
        <GrFormNextLink size={25} />
      </button>
    </Pagination>
  );
};

export default PaginationCard;
