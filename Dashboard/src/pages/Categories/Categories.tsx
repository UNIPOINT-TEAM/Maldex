import { useEffect, useState } from 'react';
import {
  GetMainCatalog,
  GetMainCatalogactive,
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
} from '@material-tailwind/react';
import { BASE_URL } from '../../utils/BaseUrl';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [nameSub, setNameSub] = useState('');
  const [open, setOpen] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [availableCategories, setAvailableCategories] = useState([]);

  const [statusedit, setStatusedit] = useState(null);
  const [editedSub, setEditedSub] = useState('');
  const [status, setStatus] = useState(false);
  const [sendId, setSendId] = useState(null);
  const [receiveId, setReceiveId] = useState(null);
  const [isAviable, setIsAviable] = useState(false);

  const changeStatus = (newState: any) => {
    setStatus(newState);
  };

  const handleOpen = (id) => {
    setOpen(!open);
    setSendId(id);
  };

  useEffect(() => {
    GetMainCatalog().then((res) => {
      setCategories(res);
    });
    GetMainCatalogactive().then((res) => {
      setAvailableCategories(res);
    });
  }, [status, subCategoryId]);

  const addSubCategory = (e, id) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', nameSub);
    formdata.append('parent', id);
    AddWithFormData(`${BASE_URL}/product/categories/`, formdata);
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

  const transferCategory = () => {
    const formdata = new FormData();
    formdata.append('parent', receiveId);
    TransferCategory(`/product/category/${sendId}/`, formdata).then(() =>
      setStatus(!status),
    );
  };

  return (
    <DefaultLayout>
      <AddMainCatalog status={status} onChange={changeStatus} />
      <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center mb-10">
        <Dialog
          open={open}
          handler={handleOpen}
          size="xl"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>переместить категорию сюда</DialogHeader>
          <DialogBody>
            <div className="w-full h-[500px] flex gap-2 overflow-x-scroll">
              {availableCategories.map((item) => (
                <div key={item.id} className="h-full">
                  <p
                    onClick={() => setReceiveId(item.id)}
                    className={`w-[200px] text-xl mb-5 ${
                      receiveId == item.id
                        ? 'bg-red-400 text-white rounded-md p-1'
                        : ''
                    }`}
                  >
                    {item?.name.length > 20
                      ? item?.name.slice(0, 25) + '...'
                      : item?.name}
                  </p>
                  <div>
                    {item.children.map((i) => (
                      <p
                        className={`${
                          receiveId == i.id
                            ? 'bg-red-400 text-white rounded-md p-1'
                            : ''
                        }`}
                        onClick={() => setReceiveId(i.id)}
                        key={i.id}
                      >
                        {i.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
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
            <Button variant="gradient" color="green" onClick={transferCategory}>
              <span>переместить</span>
            </Button>
          </DialogFooter>
        </Dialog>
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-1/6 py-5 relative content hover:bg-redPrimary"
          >
            <img className="w-1/5 mb-5" src={category.icon} alt="" />

            <p className="text-lg mb-3">{category?.name}</p>
            {category?.children && category?.children?.length > 0 && (
              <>
                <p>{category?.children[0]?.name}</p>
                {/* <p>{category?.children[0]?.children[0]?.name}</p> */}
              </>
            )}
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
              <button
                onClick={() => handleOpen(category.id)}
                className="w-full py-2 rounded-md bg-blue-400 text-white"
              >
                переместить
              </button>
              {category?.children &&
                // @ts-ignore
                category?.children.map((childCategory) => (
                  <div
                    key={childCategory.id}
                    className="rounded group hover:bg-green-200 hover:text-white py-1 flex justify-between items-center px-1"
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
                        <p>{childCategory.name}</p>
                      )}
                    </Link>
                    <div className="flex">
                      <button
                        className=" bg-blue-300 group-hover:text-white rounded w-[70px] h-[20px] text-white flex justify-center items-center"
                        onClick={() => handleOpen(childCategory.id)}
                      >
                        <p className="text-[10px]">переместить</p>
                      </button>
                      {statusedit == childCategory.id ? (
                        <button
                          className="bg-green-500 group-hover:text-white rounded w-[20px] h-[20px] flex justify-center items-center "
                          onClick={() => saveItem(childCategory.id)}
                        >
                          <FaCheck size={12} color="white" />
                        </button>
                      ) : (
                        <button
                          className="bg-yellow-500 group-hover:text-black rounded w-[20px] h-[20px] flex justify-center items-center "
                          onClick={() => handleEditStatus(childCategory.id)}
                        >
                          <FaRegEdit size={12} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Categories;
