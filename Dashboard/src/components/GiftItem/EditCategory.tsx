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
} from '@material-tailwind/react';
import { BiSolidEditAlt } from 'react-icons/bi';
const EditCategory = ({ handleImageChange, id, name, logo }) => {
  const [open, setOpen] = useState(false);

  const [isEditedData, setIsEditedData] = useState({ name, logo });

  const handleOpen = () => setOpen(!open);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setIsEditedData((prev) => ({ ...prev, logo: imageUrl }));
  };

  const handleSave = () => {
    handleImageChange(id, isEditedData.logo, isEditedData.name);
    handleOpen();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded-md bg-warning py-2 px-3 text-center font-medium text-white hover:bg-opacity-90"
      >
        <BiSolidEditAlt />
      </button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full font-satoshi">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray" className="font-satoshi">
              Изменить логотип категории
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Typography className="mb-2">
                  <span className="font-satoshi text-fs-6 font-medium">
                    Название категории
                  </span>
                </Typography>
                <Input
                  label="Название категории"
                  value={isEditedData.name}
                  onChange={(e) =>
                    setIsEditedData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col-span-1">
                <Typography className="mb-2">
                  <span className="font-satoshi text-fs-6 font-medium">
                    Название категории
                  </span>
                </Typography>
                <Select label="Select Version">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                </Select>
              </div>
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
                  onChange={handleFileInputChange}
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
              onClick={handleSave}
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

export default EditCategory;
