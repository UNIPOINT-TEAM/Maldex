import { useState } from 'react';
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from '@material-tailwind/react';
import { MdEdit } from 'react-icons/md';
import { GetMainCatalogId, PutWithFormData } from '../../services/maincatalog';

const EditMainCatalog = (props?: any) => {
  const categoryId = props.categoryId;

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState(null);
  const [logo, setLogo] = useState(null);
  const [iconfake, setIconFake] = useState(null);
  const [logofake, setLogoFake] = useState(null);

  const [statusCategory, setStatusCategory] = useState({
    hit: null,
    isnew: null,
    popular: null,
  });

  const handleOpen = () => {
    setOpen(!open),
      GetMainCatalogId(categoryId).then((res) => {
        setCategory(res);
        setStatusCategory((prev) => ({
          ...prev,
          hit: res.is_hit,
          isnew: res.is_new,
          popular: res.is_popular,
        }));
        setName(res.name);
        setIconFake(res.icon);
        setLogoFake(res.logo);
      });
  };

  const updateCategory = (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', name);
    // @ts-ignore
    formdata.append('is_hit', statusCategory.hit);
    // @ts-ignore
    formdata.append('is_new', statusCategory.isnew);
    // @ts-ignore
    formdata.append('is_popular', statusCategory.popular);
    if (logo != null) {
      formdata.append('logo', logo);
    } else {
      // @ts-ignore
      formdata.append('logo', null);
    }
    if (icon != null) {
      formdata.append('icon', icon);
    } else {
      // @ts-ignore
      formdata.append('icon', null);
    }
    // @ts-ignore
    const data = {
      name: name,
      is_hit: statusCategory.hit,
      is_new: statusCategory.isnew,
      is_popular: statusCategory.popular,
      logo: logo ? logo : null,
      icon: icon ? icon : null,
    };
    PutWithFormData(`/product/category/${categoryId}/`, formdata).then(() => {
      setOpen(!open), props.onChange(!props.status);
    });
  };

  return (
    <>
      <div className="flex gap-3">
        <button
          onClick={handleOpen}
          className="p-1 bg-yellow-400 h-[30px] w-[30px] rounded-md flex justify-center items-center"
        >
          <MdEdit color="black" />
        </button>
      </div>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full font-satoshi">
          <CardBody className="flex flex-col gap-4">
            <form onSubmit={(e) => updateCategory(e)} id="form-post"></form>
            <Typography variant="h4" color="blue-gray" className="font-satoshi">
              Добавить новую категорию
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Typography className="mb-2">
                  <span className="font-satoshi text-fs-6 font-medium">
                    Название категории
                  </span>
                </Typography>
                <Input
                  // @ts-ignore
                  defaultValue={category.name}
                  onChange={(e) => setName(e.target.value)}
                  label="Название категории"
                />
              </div>
              <div className="col-span-1  flex items-end">
                <Checkbox
                  label="Is hit"
                  color="blue"
                  // @ts-ignore
                  defaultChecked={statusCategory.hit}
                  onChange={(e) =>
                    setStatusCategory({
                      ...statusCategory,
                      // @ts-ignore
                      hit: e.target.checked,
                    })
                  }
                />
                <Checkbox
                  label="Is new"
                  color="blue"
                  // @ts-ignore
                  defaultChecked={statusCategory.isnew}
                  onChange={(e) =>
                    setStatusCategory({
                      ...statusCategory,
                      // @ts-ignore
                      isnew: e.target.checked,
                    })
                  }
                />
                <Checkbox
                  label="Is popular"
                  color="blue"
                  // @ts-ignore
                  defaultChecked={statusCategory.popular}
                  onChange={(e) =>
                    setStatusCategory({
                      ...statusCategory,
                      // @ts-ignore
                      popular: e.target.checked,
                    })
                  }
                />
              </div>
              {/* <div className="col-span-1">
                <Typography className="mb-2">
                  <span className="font-satoshi text-fs-6 font-medium">
                    Название категории
                  </span>
                </Typography>
                <Select label="Select Version">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div> */}
            </div>
            <div className="">
              <label
                htmlFor="cover"
                className="flex h-[100px]  cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4"
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                  // @ts-ignore
                  onChange={(e) => setLogo(e.target.files[0])}
                />
                <p className="text-fs-6">изменять логотип категории</p>
                <div className="flex items-center">
                  {logo == null ? (
                    <img src={`${logofake}`} className="w-[50px]" alt="" />
                  ) : (
                    <p className="text-fs-6 text-white bg-green-400 p-2 rounded-md">
                      изменил картинку
                    </p>
                  )}
                </div>
              </label>
            </div>
            <div className="">
              <label
                htmlFor="cover2"
                className="flex h-[100px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4"
              >
                <input
                  type="file"
                  name="cover2"
                  id="cover2"
                  className="sr-only"
                  // @ts-ignore
                  onChange={(e) => setIcon(e.target.files[0])}
                />
                <p className="text-fs-6">изменять икона категории</p>
                <div className="flex items-center">
                  {icon == null ? (
                    <img src={`${iconfake}`} className="w-[50px]" alt="" />
                  ) : (
                    <p className="text-fs-6 text-white bg-green-400 p-2 rounded-md">
                      изменил картинку
                    </p>
                  )}
                </div>
              </label>
            </div>
          </CardBody>
          <CardFooter className="pt-0 font-satoshi flex justify-end gap-4">
            <button
              onClick={() => {
                setOpen(!open);
                setIcon(null);
                setLogo(null);
              }}
              className="inline-flex items-center justify-center rounded-md border text-danger border-danger py-2 px-10 text-center font-medium  hover:bg-opacity-90 "
            >
              Отмена
            </button>
            <button
              form="form-post"
              className="inline-flex tracking-wide items-center justify-center rounded-md bg-success py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
            >
              Сохранять
            </button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default EditMainCatalog;
