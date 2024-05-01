import { useState } from 'react';
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
  Checkbox,
} from '@material-tailwind/react';
import { AddWithFormData } from '../../services/product';
import { BASE_URL } from '../../utils/BaseUrl';
const AddMainCatalog = ({ status, onChange }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [isHit, setIsHit] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isPopular, setIsPopular] = useState(false);
  const [icon, setIcon] = useState(null);
  const [logo, setLogo] = useState(null);

  const addNewCategory = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', name);
    formdata.append('is_popular', isPopular);
    formdata.append('is_hit', isHit);
    formdata.append('is_new', isNew);
    formdata.append('logo', logo);
    formdata.append('icon', icon);
    AddWithFormData(`${BASE_URL}/product/categories/`, formdata).then(() => {
      setOpen(!open), onChange(!status);
    });
  };

  const handleOpen = () => setOpen(!open);
  return (
    <button className="float-end mt-5">
      <div className="flex gap-3 w-full">
        <button
          onClick={handleOpen}
          className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
        >
          Добавить категорию
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
            <form id="form-post" onSubmit={(e) => addNewCategory(e)}></form>
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
                  onChange={(e) => setName(e.target.value)}
                  label="Название категории"
                />
              </div>
              <div className="col-span-1  flex items-end">
                <Checkbox
                  label="Is hit"
                  color="blue"
                  checked={isHit}
                  onChange={(e) => setIsHit(e.target.checked)}
                />
                <Checkbox
                  label="Is new"
                  color="blue"
                  checked={isNew}
                  onChange={(e) => setIsNew(e.target.checked)}
                />
                <Checkbox
                  label="Is popular"
                  color="blue"
                  checked={isPopular}
                  onChange={(e) => setIsPopular(e.target.checked)}
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
                className="flex h-[100px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-xl border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4"
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
                <p className="text-fs-6">Добавить логотип категории</p>
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
                  onChange={(e) => setIcon(e.target.files[0])}
                />
                <p className="text-fs-6">Добавить логотип категории</p>
              </label>
            </div>
          </CardBody>
          <CardFooter className="pt-0 font-satoshi flex justify-end gap-4">
            <button
              onClick={handleOpen}
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
    </button>
  );
};

export default AddMainCatalog;
