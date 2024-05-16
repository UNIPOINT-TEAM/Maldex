import { useEffect, useState } from 'react';
import { GetMainCatalogactive, PutDataJson } from '../../services/maincatalog';
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/main.css';

import { GetProductCategory } from '../../services/product';

import DefaultLayout from '../../layout/DefaultLayout';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from '@material-tailwind/react';
import PaginationCard from '../Pagination/Pagination';

const BannerAddProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryId, setCategoryId] = useState(null);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleOpen = (id: any) => {
    setOpen(!open);
    setCategoryId(id);
  };

  useEffect(() => {
    GetMainCatalogactive().then((res) => {
      setCategories(res);
    });
    GetProductCategory(categoryId, currentPage).then((res) => {
      setProducts(res.data.results);
      const residual = res.data.count % 10;
      const pages = (res.data.count - residual) / 10;
      setTotalPages(pages % 2 == 0 && pages === 1 ? pages : pages + 1);
    });
  }, [currentPage, open]);

  const addSelectedProduct = (id: number) => {
    //@ts-ignore
    if (selectedProduct.includes(id)) {
      //@ts-ignore
      setSelectedProduct(
        //@ts-ignore
        selectedProduct.filter((productId) => productId !== id),
      );
    } else {
      //@ts-ignore
      setSelectedProduct([...selectedProduct, id]);
    }
  };

  const transferCategory = () => {
    const data = {
      product_data: selectedProduct,
    };
    PutDataJson(`/banner/${id}/`, data).then(() => {
      navigate('/');
    });
  };

  return (
    <DefaultLayout>
      <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center mb-[400px]">
        <Dialog
          open={open}
          handler={handleOpen}
          size="xl"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>
            <div className="flex justify-between w-full">
              <p>выбрать продукт</p>
              <div>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>отмена</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  onClick={transferCategory}
                >
                  <span>изменять</span>
                </Button>
                <PaginationCard
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </DialogHeader>
          <DialogBody>
            <div className="w-full h-[500px]  flex flex-wrap gap-5 overflow-x-scroll py-5">
              {products.map((item) => (
                <div
                  onClick={() => addSelectedProduct(item.id)}
                  key={item.id}
                  className={`shadow p-2 h-[300px] w-[200px] rounded ${
                    // @ts-ignore
                    selectedProduct?.includes(item.id) ? 'bg-blue-400' : ''
                  }`}
                >
                  <div className="w-[150px] h-[200px] p-2">
                    <img
                      src={item?.images_set[0]?.image_url}
                      alt=""
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <p>
                    {item?.name > 20
                      ? item?.name.slice(0, 20) + '...'
                      : item?.name}
                  </p>
                </div>
              ))}
            </div>
          </DialogBody>
        </Dialog>
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-1/6 py-5 relative content hover:bg-redPrimary"
          >
            <img className="w-1/5 mb-5" src={category.icon} alt="" />

            <p className="text-lg mb-3">
              {category?.name} <span className='text-red-400 text-sm'>{category.count}</span>
            </p>
            {category?.children && category?.children?.length > 0 && (
              <>
                <p>{category?.children[0]?.name}</p>
                {/* <p>{category?.children[0]?.children[0]?.name}</p> */}
              </>
            )}
            <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
              <div className="flex justify-between items-center mb-3">
                <img className="w-1/5 mb-5" src={category.icon} alt="" />
              </div>
              <p className="text-lg mb-3">{category?.name}</p>

              {
                // @ts-ignore
                category?.children &&
                  // @ts-ignore
                  category?.children.map((childCategory) => (
                    <div
                      key={childCategory.id}
                      className="rounded group hover:bg-green-200 hover:text-white py-1 flex flex-col gap-1 justify-between items-start px-1"
                    >
                      <p>
                        {childCategory.name}
                        <span className="text-red-400 text-sm">
                          {childCategory.count}
                        </span>
                      </p>

                      <div className="flex gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpen(childCategory.id)}
                            className="bg-red-400 text-white rounded w-[70px] h-[20px] flex justify-center items-center text-[12px]"
                          >
                            продукты
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default BannerAddProducts;
