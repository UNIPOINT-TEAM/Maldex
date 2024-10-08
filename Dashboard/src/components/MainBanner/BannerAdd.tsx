import { useEffect, useState } from 'react';
import {
  GetMainCatalog,
  PostDataJson,
  PutData,
  PutWithFormData,
} from '../../services/maincatalog';
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/main.css';
import { DeleteMainCatalog, EditMainCatalog } from '../../components';
import { AddWithFormData, GetProductCategory } from '../../services/product';
import { FaCheck } from 'react-icons/fa6';
import DefaultLayout from '../../layout/DefaultLayout';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Checkbox,
  Input,
} from '@material-tailwind/react';
import { BASE_URL } from '../../utils/BaseUrl';
import PaginationCard from '../Pagination/Pagination';

const BannerAdd = () => {
  // @ts-ignore
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [nameSub, setNameSub] = useState('');
  const [open, setOpen] = useState(false);
  // @ts-ignore
  const [subCategoryId, setSubCategoryId] = useState(0);

  const [statusedit, setStatusedit] = useState(null);
  const [status, setStatus] = useState(false);
  const [isAviable, setIsAviable] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [nameBanner, setNameBanner] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  // @ts-ignore
  const changeStatus = (newState: any) => {
    setStatus(newState);
  };

  const handleOpen = (id: any) => {
    setOpen(!open);
    setCategoryId(id);
  };

  useEffect(() => {
    GetMainCatalog().then((res) => {
      setCategories(res);
    });
    GetProductCategory(categoryId, currentPage).then((res) => {
      setProducts(res.data.results);
      const residual = res.data.count % 10;
      const pages = (res.data.count - residual) / 10;
      setTotalPages(pages % 2 == 0 && pages === 1 ? pages : pages + 1);
    });
  }, [status, subCategoryId, currentPage, open]);
  // @ts-ignore
  const addSubCategory = (e, id) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', nameSub);
    formdata.append('parent', id);
    AddWithFormData(`${BASE_URL}/product/categories/`, formdata);
    setNameSub('');
    setStatus(!status);
  };
  // @ts-ignore
  const handleEditStatus = (id: any) => {
    setStatusedit(id);
  };

  const saveItem = (id: any) => {
    const formdata = new FormData();
    // @ts-ignore
    formdata.append('name', editedSub);
    PutData(`${BASE_URL}/product/category/${id}/`, formdata);
    setStatusedit(null);
    setStatus(!status);
  };

  const ChangeIsAviable = (id: number) => {
    const formdata = new FormData();
    //@ts-ignore
    formdata.append('is_available', isAviable);
    PutWithFormData(`/product/category/${id}/`, formdata).then(() => {
      setStatus(!status);
    });
  };

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
      name: nameBanner,
      product_data: selectedProduct,
    };
    PostDataJson(`/banner/`, data).then(() => navigate('/'));
  };

  return (
    <DefaultLayout>
      {/* <AddMainCatalog status={status} onChange={changeStatus} /> */}
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
          <DialogHeader>выбор продукта</DialogHeader>
          <DialogBody>
            <div className="flex">
              <Input
                label="добавить название баннера"
                onChange={(e) => setNameBanner(e.target.value)}
              />
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
                <span>добавить</span>
              </Button>
            </div>
            <div className="w-full h-[500px]  flex flex-wrap gap-5 overflow-x-scroll py-5">
              {products?.map((item) => (
                <div
                  // @ts-ignore
                  onClick={() => addSelectedProduct(item.id)}
                  // @ts-ignore
                  key={item.id}
                  className={`shadow p-2 h-[300px] w-[200px] rounded ${
                    // @ts-ignore
                    selectedProduct.includes(item.id) ? 'bg-blue-400' : ''
                  }`}
                >
                  <div className="w-[150px] h-[200px] p-2">
                    <img
                      // @ts-ignore
                      src={item?.images_set[0]?.image_url}
                      alt=""
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <p>
                    {
                      // @ts-ignore
                      item?.name.length > 40
                        ? // @ts-ignore
                          item?.name.slice(0, 40) + '...'
                        : // @ts-ignore
                          item?.name
                    }
                  </p>
                </div>
              ))}
            </div>
            <PaginationCard
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </DialogBody>
        </Dialog>
        {categories.map((category) => (
          <div
            // @ts-ignore
            key={category.id}
            className="w-1/6 py-5 relative content hover:bg-redPrimary"
          >
            <img
              className="w-1/5 mb-5"
              // @ts-ignore
              src={category.icon}
              alt=""
            />

            <p
              // @ts-ignore
              className="text-lg mb-3"
            >
              {
                // @ts-ignore
                category?.name
              }

              <span className="text-red-400 text-sm">{category.count}</span>
            </p>

            {
              // @ts-ignore
              category?.children && category?.children?.length > 0 && (
                <>
                  <p>
                    {
                      // @ts-ignore
                      category?.children[0]?.name
                    }
                  </p>
                  {/* <p>{category?.children[0]?.children[0]?.name}</p> */}
                </>
              )
            }
            <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
              <div className="flex justify-between items-center mb-3">
                <img
                  className="w-1/5 mb-5"
                  // @ts-ignore
                  src={category.icon}
                  alt=""
                />

                <div className="flex flex-col items-end gap-1">
                  <div className="flex justify-center gap-[2px] items-center">
                    <Checkbox
                      // @ts-ignore
                      defaultChecked={category.is_available}
                      onChange={(e) => setIsAviable(e.target.checked)}
                      color="blue"
                    />
                    <button
                      className="bg-green-500 p-1 rounded-sm"
                      // @ts-ignore
                      onClick={() => ChangeIsAviable(category.id)}
                    >
                      <FaCheck color="white" />
                    </button>
                  </div>

                  <EditMainCatalog
                    // @ts-ignore
                    categoryId={category.id}
                  />
                  <button className="p-1 bg-red-600 h-[30px] w-[30px] rounded flex justify-center items-center">
                    <DeleteMainCatalog />
                  </button>
                </div>
              </div>
              <p className="text-lg mb-3">
                {
                  // @ts-ignore
                  category?.name
                }
                <span className="text-red-400 text-sm ml-2">
                  {category.count}
                </span>
              </p>
              <button
                onClick={() => handleOpen(category.id)}
                className="bg-blue-400 text-white rounded w-full h-[40px] flex justify-center items-center text-[12px]"
              >
                продукты
              </button>

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
                        {childCategory.name}{' '}
                        <span className="text-red-400 text-sm">
                          {childCategory.count}
                        </span>{' '}
                      </p>

                      <div className="flex gap-2">
                        {statusedit == childCategory.id ? (
                          <button
                            className="bg-green-500 group-hover:text-white rounded w-[20px] h-[20px] flex justify-center items-center "
                            onClick={() => saveItem(childCategory.id)}
                          >
                            <FaCheck size={12} color="white" />
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpen(childCategory.id)}
                              className="bg-red-400 text-white rounded w-[70px] h-[20px] flex justify-center items-center text-[12px]"
                            >
                              продукты
                            </button>
                          </div>
                        )}
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

export default BannerAdd;
