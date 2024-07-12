import { Input } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { GetProductSearch } from '../../../services/product';

const SearchComponent = ({ setAddProduct, setTotalPages }) => {
  const [inputVal, setInputVal] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await GetProductSearch(inputVal, currentPage);
        setAddProduct(res.data.results);
        const residual = res.data.count % 10;
        const pages = (res.data.count - residual) / 10;
        setTotalPages(pages % 2 === 0 && pages === 1 ? pages : pages + 1);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    };

    fetchProducts();
  }, [inputVal, currentPage]);

  return (
    <div className="search-container">
      <Input
        label="что-нибудь"
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
