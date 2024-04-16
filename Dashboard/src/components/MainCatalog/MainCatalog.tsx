import { useEffect, useState } from 'react';
import { GetMainCatalog } from '../../services/maincatalog';
import { Link } from 'react-router-dom';
import '../../css/main.css';
import { AddMainCatalog, DeleteMainCatalog, EditMainCatalog } from '..';
import { AddWithFormData } from '../../services/product';
import { FaPlus } from 'react-icons/fa6';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from '@material-tailwind/react';

const MainCatalog = () => {
  const [categories, setCategories] = useState([]);
  const [nameSub, setNameSub] = useState('');
  const [nameSubSub, setNameSubSub] = useState('');
  const [open, setOpen] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const handleOpen = (id) => {
    setOpen(!open);
    setSubCategoryId(id);
  };

  useEffect(() => {
    GetMainCatalog().then((res) => {
      setCategories(res);
      console.log(res);
    });
  }, []);

  const addSubCategory = (e, id) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', nameSub);
    formdata.append('parent', id);
    AddWithFormData('http://192.168.0.117:8000/product/categories/', formdata);
  };
  const addSubSubCategory = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', nameSubSub);
    formdata.append('parent', subCategoryId);
    AddWithFormData('http://192.168.0.117:8000/product/categories/', formdata);
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
              onChange={(e) => setNameSubSub(e.target.value)}
            />
            {categories?.map((category) => (
              <>
                {category.children.map((a) => {
                  a.children.map((b) => <p>{b.name}</p>);
                })}
              </>
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
                <div className="flex flex-col gap-1">
                  <EditMainCatalog />
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
                    <Link to="/catalog">
                      <p>{childCategory.name}</p>
                    </Link>
                    <button
                      className="bg-white group-hover:text-black rounded w-[20px] h-[20px] flex justify-center items-center"
                      onClick={() => handleOpen(childCategory.id)}
                    >
                      <FaPlus size={12} />
                    </button>
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
