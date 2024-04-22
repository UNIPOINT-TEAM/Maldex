import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { Reorder } from 'framer-motion'; // Импорт из Framer Motion
import accordionIcon from '../../assets/icons/accordion-icon.png';
import { SliderProduct } from '../../components';
import { IoAddSharp, IoCloseSharp } from 'react-icons/io5';
import DefaultLayout from '../../layout/DefaultLayout';
import { MdDelete, MdEdit } from 'react-icons/md';
import { GetGiftSet } from '../../services/buildset';
import { Link } from 'react-router-dom';
import { GetProduct } from '../../services/main';

const BuildSet = () => {
  const [open, setOpen] = useState<number>(0);
  const [buildCart, setBuildCart] = useState<any[]>([]);
  const [accordionCount, setAccordionCount] = useState<number>(5);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [editedAccordionIndex, setEditedAccordionIndex] = useState<
    number | null
  >(null);
  const [editedAccordionTitle, setEditedAccordionTitle] = useState<string>('');
  const [accordionData, setAccordionData] = useState<any[]>([]);

  const [order, setOrder] = useState(() => [...Array(accordionCount).keys()]); // Инициализация порядка

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const handleReorder = (newOrder: number[]) => setOrder(newOrder); // Обработчик изменения порядка

  useEffect(() => {
    const fetchData = async () => {
      try {
        const giftSetData = await GetGiftSet();
        console.log(giftSetData);

        setAccordionData(giftSetData);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <DefaultLayout>
      <div className="">
        <div className="grid grid-cols-10">
          <div className="col-span-10 lg:col-span-10">
            <div className="bg-greenPrimary h-[75px] flex items-center justify-center ">
              <h1 className="text-[22px] lg:text-[30px] text-red-primary">
                Создайте идеальный подарок
              </h1>
            </div>
            <div className="w-[96%]">
              <Reorder.Group
                axis="y"
                values={order}
                onReorder={handleReorder}
                className="mt-10 mb-6 justify-around flex flex-col"
              >
                {accordionData.map((item, index) => (
                  <Reorder.Item key={index} value={index} className="relative">
                    <div className="flex item-center">
                      <Accordion
                        className="border border-lightPrimary px-5 my-4"
                        open={open === index + 1}
                        icon={
                          <img
                            className={`${
                              open === index + 1 ? 'rotate-180' : ''
                            } transition-transform w-[18px]`}
                            src={accordionIcon}
                          />
                        }
                        placeholder={<div />}
                      >
                        <AccordionHeader
                          className="border-0 p-4"
                          onClick={() => handleOpen(index + 1)}
                          placeholder={<div />}
                        >
                          <h2 className="font-helvetica tracking-wide text-fs_6 font-normal text-greenPrimary">
                            {item.title || `${index + 1}. Заголовок аккордеона`}
                          </h2>
                        </AccordionHeader>
                        <AccordionBody className="p-4" placeholder={<div />}>
                          {accordionData[index]?.product_sets.map(
                            (set, setIndex) => (
                              <div key={setIndex} className="mb-4">
                                <h3 className="font-semibold">
                                  {set.product_sets.name}
                                </h3>
                                <p>{set.product_sets.description}</p>
                                {/* Добавьте здесь другие поля, которые вы хотите отобразить */}
                              </div>
                            ),
                          )}
                        </AccordionBody>
                      </Accordion>
                      <div className="flex flex-col justify-center mt-2">
                        <Button
                          buttonType="filled"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={true}
                          ripple="light"
                          // onClick={(event) => editAccordion(index, event)}
                          className="bg-yellow-400"
                        >
                          <MdEdit />
                        </Button>
                        <Button
                          color="red"
                          buttonType="filled"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={true}
                          ripple="light"
                          // onClick={() => deleteAccordion(index)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>

              {isDialogOpen && (
                <Dialog
                  size="sm"
                  open={isDialogOpen}
                  // onClose={() => setIsDialogOpen(false)}
                >
                  <DialogHeader>Редактировать название аккордеона</DialogHeader>
                  <DialogBody>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Название аккордеона"
                      value={editedAccordionTitle}
                      onChange={(e) => setEditedAccordionTitle(e.target.value)}
                    />
                  </DialogBody>
                  <DialogFooter>
                    <Button
                      color="blue"
                      buttonType="link"
                      // onClick={saveEditedAccordion}
                      ripple="dark"
                    >
                      Сохранить
                    </Button>
                    <Button
                      color="red"
                      buttonType="link"
                      onClick={() => setIsDialogOpen(false)}
                      ripple="dark"
                    >
                      Закрыть
                    </Button>
                  </DialogFooter>
                </Dialog>
              )}

              <div className="flex justify-end mt-4">
                <Link to='/build-set-add' >
                  <Button
                    color="green"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    // onClick={addAccordion}
                  >
                    Добавить
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuildSet;
