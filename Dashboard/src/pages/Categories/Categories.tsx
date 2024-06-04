import { useEffect, useState } from 'react';
import {
  GetLogo,
  GetMainCatalog,
  GetMainCatalogSite,
  GetMainCatalogactive,
  GetSubCategories,
  PutData,
  PutWithFormData,
  TransferCategory,
} from '../../services/maincatalog';
import { Link } from 'react-router-dom';
import '../../css/main.css';
import {
  AddMainCatalog,
  DeleteMainCatalog,
  EditMainCatalog,
} from '../../components';
import { AddWithFormData } from '../../services/product';
import { FaCheck, FaPlus } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import DefaultLayout from '../../layout/DefaultLayout';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Checkbox,
  Input,
} from '@material-tailwind/react';
import { BASE_URL } from '../../utils/BaseUrl';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesSite, setCategoriesSite] = useState([]);
  const [nameSub, setNameSub] = useState('');
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [statusedit, setStatusedit] = useState(null);
  const [editedSub, setEditedSub] = useState('');
  const [status, setStatus] = useState(false);
  const [sendId, setSendId] = useState(null);
  const [receiveId, setReceiveId] = useState([]);
  const [sendId1, setSendId1] = useState(null);
  const [receiveId1, setReceiveId1] = useState(null);
  const [isAviable, setIsAviable] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');
  const [loader, setLoader] = useState(true);
  const [logos, setLogos] = useState([]);

  const changeStatus = (newState: any) => {
    setStatus(newState);
  };

  const handleOpen = (id) => {
    setOpen(!open);
    setSendId(id);
  };
  const handleOpen1 = (id) => {
    setOpen1(!open1);
    setReceiveId1(id);
  };

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const logoData = await GetLogo();
        if (typeof logoData === 'object' && !Array.isArray(logoData)) {
          setLogos(logoData); // Сохраняем данные логотипов в состояние
        } else {
          console.error('Unexpected logo data format:', logoData);
        }
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    };

    fetchLogo();
  }, []);

  const getLogoUrl = (site) => {
    return logos[site] || null;
  };

  const sortedCategories = categoriesSite.sort((a, b) => {
    if (!a.site) return 1;
    if (!b.site) return -1;
    return a.site.localeCompare(b.site);
  });

  useEffect(() => {
    GetMainCatalog().then((res) => {
      setCategories(res);
      setLoader(!loader);
    });
    GetMainCatalogSite(searchCategory).then((res) => {
      setCategoriesSite(res);
      setLoader(!loader);
    });
    GetSubCategories(searchCategory).then((res) => {
      setAvailableCategories(res);
    });
  }, [status, subCategoryId, searchCategory]);

  const addSubCategory = (e, id) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', nameSub);
    formdata.append('parent', id);
    AddWithFormData(C, formdata);
    setNameSub('');
    setStatus(!status);
  };

  const handleEditStatus = (id: any) => {
    setStatusedit(id);
  };

  const saveItem = (id: any) => {
    const formdata = new FormData();
    formdata.append('name', editedSub);
    PutData(`${BASE_URL}/product/category/${id}/`, formdata);
    setStatusedit(null);
    setStatus(!status);
  };

  const ChangeIsAviable = (id: number) => {
    const formdata = new FormData();
    formdata.append('is_available', isAviable);
    PutWithFormData(`/product/category/${id}/`, formdata).then(() => {
      setStatus(!status);
    });
  };

  const toggleItem = (itemId: any) => {
    if (receiveId.includes(itemId)) {
      setReceiveId(receiveId.filter((id) => id !== itemId));
    } else {
      setReceiveId([...receiveId, itemId]);
    }
  };

  const transferCategory = () => {
    const data = {
      category_id: sendId,
      categories_data: receiveId,
    };
    TransferCategory(`/product/categories/move/`, data).then(() => {
      setStatus(!status), setOpen(!open);
    });
  };
  const transferCategory1 = () => {
    const data = {
      category_id: sendId1,
      categories_data: receiveId1,
    };
    TransferCategory(`/product/categories/move/`, data).then(() => {
      setStatus(!status), setOpen1(!open1);
    });
  };

  return (
    <DefaultLayout>
      <AddMainCatalog status={status} onChange={changeStatus} />
      <Dialog
        open={open1}
        handler={handleOpen1}
        size="xxl"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>переместить категорию сюда</DialogHeader>
        <DialogBody>
          <div className=" overflow-x-scroll">
            <div className="w-full flex gap-2">
              {categories.map(
                (category) =>
                  category.order != null && (
                    <div
                      key={category.id}
                      className="w-[400px] h-[400px] py-2 px-2"
                    >
                      <img
                        src={category.icon}
                        alt="no icon"
                        className="w-[30px] h-[30px]"
                      />
                      <p
                        className="text-xl mb-3 cursor-pointer"
                        // onClick={() => setSendId1(category.id)}
                      >
                        {category.name}
                      </p>

                      {category?.children?.map((i) => (
                        <p
                          className={`text-sm mb-1 cursor-pointer ${
                            sendId1 == i.id &&
                            'bg-blue-400 text-white px-1 rounded-md'
                          }`}
                          onClick={() => setSendId1(i.id)}
                        >
                          {i?.name}
                        </p>
                      ))}
                    </div>
                  ),
              )}
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen1}
            className="mr-1"
          >
            <span>отмена</span>
          </Button>
          <Button variant="gradient" color="green" onClick={transferCategory1}>
            <span>переместить</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <>
        <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center mb-[100px] border-b-2">
          <Dialog
            open={open}
            handler={handleOpen}
            size="md"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Добавить дополнительную категорию</DialogHeader>
            <DialogBody>
              <div className="h-[400px] overflow-y-scroll">
                <div className="mb-2">
                  <Input
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="mb-2"
                    label="поиск по категориям"
                  />
                </div>
                <div className="w-full  overflow-y-scroll">
                  {availableCategories.map((item) => (
                    <div
                      onClick={() => toggleItem(item.id)}
                      key={item.id}
                      className={`h-full py-2 rounded-md mb-1 px-2 ${
                        receiveId.includes(item.id)
                          ? 'bg-blue-400 text-white'
                          : ''
                      }`}
                    >
                      <p className="text-md">
                        {item.name}
                        <span className="text-red-400 ml-2">{item.count}</span>
                        <span className="text-red-400 text-[10px] ml-2">
                          {item.site}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
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
                <span>переместить</span>
              </Button>
            </DialogFooter>
          </Dialog>
          {categories.map(
            (category) =>
              category.order != null && (
                <div
                  key={category.id}
                  className="w-1/6 py-5 relative content hover:bg-redPrimary"
                >
                  <div className="flex flex-col justify-start  h-[170px]">
                    <div className="flex justify-between">
                      <img className="w-1/5 mb-5" src={category.icon} alt="" />

                      <p className="text-xl ">{category.order}</p>
                    </div>
                    <p className="text-red-400">{category.site}</p>

                    <p className="text-lg mb-3">
                      {category?.name}
                      <span className="text-red-400 text-sm ml-1">
                        {category.count}
                      </span>
                    </p>
                    {category?.children && category?.children?.length > 0 && (
                      <p>{category?.children[0]?.name}</p>
                    )}
                  </div>
                  <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
                    <div className="flex justify-between items-center mb-3">
                      <img className="w-1/5 mb-5" src={category.icon} alt="" />

                      <div className="flex flex-col items-end gap-1">
                        <div className="flex justify-center gap-[2px] items-center">
                          <Checkbox
                            defaultChecked={category.is_available}
                            onChange={(e) => setIsAviable(e.target.checked)}
                            color="blue"
                          />
                          <button
                            className="bg-green-500 p-1 rounded-sm"
                            onClick={() => ChangeIsAviable(category.id)}
                          >
                            <FaCheck color="white" />
                          </button>
                        </div>
                        <EditMainCatalog categoryId={category.id} />

                        <button className="p-1 bg-red-600 h-[30px] w-[30px] rounded flex justify-center items-center">
                          <DeleteMainCatalog />
                        </button>
                      </div>
                    </div>
                    <p className="text-lg mb-3">{category?.name}</p>
                    <Link to={`/category/${category.id}/products`}>
                      <button className="bg-red-400 text-white rounded w-full h-[30px] mb-2 flex justify-center items-center text-[12px]">
                        продукты
                      </button>
                    </Link>
                    <form
                      onSubmit={(e) => addSubCategory(e, category.id)}
                      className="flex justify-between mb-4 gap-1"
                    >
                      <input
                        type="text"
                        className="border border-dashed rounded-md w-[80%] outline-none px-1"
                        placeholder="Добавить имя"
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                      />
                      <button className="w-[20%] bg-blue-300 text-white rounded-md text-[12px]">
                        +
                      </button>
                    </form>

                    {category?.children &&
                      // @ts-ignore
                      category?.children.map((childCategory) => (
                        <div
                          key={childCategory.id}
                          className="rounded group hover:bg-green-200 hover:text-white py-1 flex flex-col gap-1 justify-between items-start px-1"
                        >
                          <Link>
                            {statusedit == childCategory.id ? (
                              <input
                                type="text"
                                className="border border-dashed rounded-md w-[70%] outline-none px-1 text-black"
                                placeholder="Добавить имя"
                                defaultValue={childCategory.name}
                                onChange={(e) => setEditedSub(e.target.value)}
                              />
                            ) : (
                              <p>
                                {childCategory.name}{' '}
                                <span className="text-red-400 text-sm ml-1">
                                  {childCategory.count}
                                </span>
                              </p>
                            )}
                          </Link>
                          <div className="flex flex-col gap-2">
                            <button
                              className=" bg-blue-300 group-hover:text-white rounded  w-full h-[30px] text-white flex justify-center items-center"
                              onClick={() => handleOpen(childCategory.id)}
                            >
                              <p className="text-[12px]">
                                добавить новую категорию
                              </p>
                            </button>
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
                                  className="bg-yellow-500 group-hover:text-black rounded w-[20px] h-[20px] flex justify-center items-center "
                                  onClick={() =>
                                    handleEditStatus(childCategory.id)
                                  }
                                >
                                  <FaRegEdit size={12} />
                                </button>
                                <Link
                                  to={`/category/${childCategory.id}/products`}
                                >
                                  <button className="bg-red-400 text-white rounded w-[70px] h-[20px] flex justify-center items-center text-[12px]">
                                    продукты
                                  </button>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ),
          )}
        </div>

        <div className=" ">
          <div className="mb-2">
            <Input
              onChange={(e) => setSearchCategory(e.target.value)}
              className="mb-2"
              label="поиск по категориям"
            />
          </div>
        </div>
        <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center mb-[400px] ">
          {sortedCategories.map(
            (category) =>
              category.order == null && (
                <div
                  key={category.id}
                  className="w-1/6 py-5 mt-10 relative content hover:bg-redPrimary"
                >
                  <div className="flex flex-col justify-start  h-[170px]">
                    <div className="flex justify-between">
                      <img className="w-1/5 mb-5" src={category.icon} alt="" />

                      <p className="text-xl ">{category.order}</p>
                    </div>
                    <img
                      className="w-2/3 mb-5"
                      src={getLogoUrl(category.site) || category.icon}
                      alt=""
                    />

                    <p className="text-lg font-bold mb-3 text-blue-gray-700">
                      {category?.name}
                      <span className="text-red-400 text-sm ml-1">
                        {category.count}
                      </span>
                    </p>
                    {category?.children && category?.children?.length > 0 && (
                      <p>{category?.children[0]?.name}</p>
                    )}
                  </div>
                  <div className="absolute w-full min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
                    <div className="flex justify-between items-center mb-3">
                      <img className="w-1/5 mb-5" src={category.icon} alt="" />

                      <div className="flex flex-col items-end gap-1">
                        <div className="flex justify-center gap-[2px] items-center">
                          <Checkbox
                            defaultChecked={category.is_available}
                            onChange={(e) => setIsAviable(e.target.checked)}
                            color="blue"
                          />
                          <button
                            className="bg-green-500 p-1 rounded-sm"
                            onClick={() => ChangeIsAviable(category.id)}
                          >
                            <FaCheck color="white" />
                          </button>
                        </div>
                        <EditMainCatalog categoryId={category.id} />

                        <button className="p-1 bg-red-600 h-[30px] w-[30px] rounded flex justify-center items-center">
                          <DeleteMainCatalog />
                        </button>
                      </div>
                    </div>
                    <p className="text-lg mb-3">{category?.name}</p>
                    <Link to={`/category/${category.id}/products`}>
                      <button className="bg-red-400 text-white rounded w-full h-[30px] mb-2 flex justify-center items-center text-[12px]">
                        продукты
                      </button>
                    </Link>
                    <form
                      onSubmit={(e) => addSubCategory(e, category.id)}
                      className="flex justify-between mb-4 gap-1"
                    >
                      <input
                        type="text"
                        className="border border-dashed rounded-md w-[70%] outline-none px-1"
                        placeholder="Добавить имя"
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                      />
                      <button className="w-[30%] bg-blue-300 text-white rounded-md text-[12px]">
                        добавить
                      </button>
                    </form>

                    {category?.children &&
                      category?.children.map((childCategory) => (
                        <div
                          key={childCategory.id}
                          className="rounded group  py-1 flex flex-col gap-1 justify-between items-start px-1"
                        >
                          <Link>
                            {statusedit == childCategory.id ? (
                              <input
                                type="text"
                                className="border border-dashed rounded-md w-[70%] outline-none px-1 text-black"
                                placeholder="Добавить имя"
                                defaultValue={childCategory.name}
                                onChange={(e) => setEditedSub(e.target.value)}
                              />
                            ) : (
                              <p>
                                {childCategory.name}{' '}
                                <span className="text-red-400 text-sm ml-1">
                                  {childCategory.count}
                                </span>
                              </p>
                            )}
                          </Link>
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
                                  className="bg-yellow-500 group-hover:text-black rounded w-[20px] h-[20px] flex justify-center items-center "
                                  onClick={() =>
                                    handleEditStatus(childCategory.id)
                                  }
                                >
                                  <FaRegEdit size={12} />
                                </button>
                                <Link
                                  to={`/category/${childCategory.id}/products`}
                                >
                                  <button className="bg-red-400 text-white rounded w-[70px] h-[20px] flex justify-center items-center text-[12px]">
                                    продукты
                                  </button>
                                </Link>
                                <button
                                  onClick={() => handleOpen1(childCategory.id)}
                                  className="bg-blue-400 text-white rounded w-[70px] h-[20px] flex justify-center items-center text-[12px]"
                                >
                                  переместит
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </>
    </DefaultLayout>
  );
};

export default Categories;
