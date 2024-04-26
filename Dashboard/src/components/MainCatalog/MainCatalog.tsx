import { useEffect, useState } from 'react';
import {
  GetMainCatalog,
  GetSubSubCatalog,
  PutData,
  PutWithFormData,
} from '../../services/maincatalog';
import { Link } from 'react-router-dom';
import '../../css/main.css';
import { AddMainCatalog, DeleteMainCatalog, EditMainCatalog } from '..';
import { AddWithFormData } from '../../services/product';
import { FaCheck, FaPlus } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  input,
  Checkbox,
} from '@material-tailwind/react';
import { BASE_URL } from '../../utils/BaseUrl';

const MainCatalog = () => {
  const [categories, setCategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [nameSub, setNameSub] = useState('');
  const [nameSubSub, setNameSubSub] = useState('');
  const [open, setOpen] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [status, setStatus] = useState(false);
  const [statuseditSub, setStatuseditSub] = useState(null);
  const [statusedit, setStatusedit] = useState(null);
  const [editedSub, setEditedSub] = useState('');
  const [editedSubSub, setEditedSubSub] = useState('');
  const [isAviable, setIsAviable] = useState(false);
  const handleOpen = (id) => {
    setOpen(!open);
    setSubCategoryId(id);
  };

  useEffect(() => {
    GetMainCatalog().then((res) => {
      setCategories(res);
    });
    GetSubSubCatalog(
      `/product/categories/get_tertiary_categories/${subCategoryId}`,
    ).then((res) => {
      setSubSubCategories(res);
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
  const addSubSubCategory = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', nameSubSub);
    formdata.append('parent', subCategoryId);
    AddWithFormData(`${BASE_URL}/product/categories/`, formdata);
    setNameSubSub('');
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
  const handleEditStatusSub = (id: any) => {
    setStatuseditSub(id);
  };

  const saveItemSub = (id: any) => {
    const formdata = new FormData();
    formdata.append('name', editedSubSub);
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

  return (
    <>
      <AddMainCatalog />
      <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center mb-10">
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>добавить третью категорию</DialogHeader>
          <DialogBody>
            <Input
              label="введите имя третью категорию"
              required
              type="text"
              value={nameSubSub}
              onChange={(e) => setNameSubSub(e.target.value)}
            />

            {subSubCategories.map((i) => (
              <div className="flex items-center mb-3 justify-between mt-5">
                {statuseditSub == i.id ? (
                  <div className="w-1/2">
                    <Input
                      label="введите имя третью категорию"
                      required
                      type="text"
                      defaultValue={i.name}
                      onChange={(e) => setEditedSubSub(e.target.value)}
                    />
                  </div>
                ) : (
                  <p className="">{i.name}</p>
                )}
                {statuseditSub == i.id ? (
                  <button
                    onClick={() => saveItemSub(i.id)}
                    className="bg-green-500 p-2 rounded-md flex justify-center items-center"
                  >
                    <FaCheck size={12} color="white" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditStatusSub(i.id)}
                    className="bg-yellow-500 p-2 rounded-md flex justify-center items-center"
                  >
                    <FaRegEdit size={12} />
                  </button>
                )}
              </div>
            ))}
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
              onClick={(e) => addSubSubCategory(e)}
            >
              <span>добавить</span>
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
                <p>{category?.children[0]?.children[0]?.name}</p>
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
                        className=" bg-blue-300 group-hover:text-white rounded w-[20px] h-[20px] text-white flex justify-center items-center"
                        onClick={() => handleOpen(childCategory.id)}
                      >
                        <FaPlus size={12} />
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
    </>
  );
};

export default MainCatalog;
