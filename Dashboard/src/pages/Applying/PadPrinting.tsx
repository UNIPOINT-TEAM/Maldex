import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import sliderImage1 from '../../assets/images/apply-slider-image-1.jpg';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import DefaultLayout from '../../layout/DefaultLayout';
import ApplyingLayout from '../../layout/ApplyingLayout';
const data = [
  {
    label: 'описание',
    value: 'описание',
  },
  {
    label: 'технические требования',
    value: 'технические',
  },
];
const PadPrinting = () => {
  const [activeTab, setActiveTab] = useState('описание');
  return (
    <DefaultLayout>
      <ApplyingLayout>
        <div className="w-full">
          <h2 className="text-[28px] font-bold">Тампопечать</h2>
          <Tabs value={activeTab}>
            <TabsHeader
              placeholder={<div />}
              className="rounded-none gap-8 border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  'bg-transparent border-b-4 border-redPrimary shadow-none rounded-none',
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  placeholder={<div />}
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={` w-auto text-start p-0 ${
                    activeTab === value
                      ? 'text-redPrimary'
                      : 'text-darkSecondary'
                  }`}
                >
                  <h2 className="font-helvetica-neue uppercase text-fs_6 py-4">
                    {label}
                  </h2>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
              placeholder={<div />}
            >
              <TabPanel value={'описание'} className="w-full  text-black">
                <div className="z-[999] relative  px-5">
                  <Swiper
                    loop
                    navigation={{
                      prevEl: '.prev-arrow-description',
                      nextEl: '.next-arrow-description',
                    }}
                    modules={[Navigation]}
                    className="w-full h-[400px] "
                  >
                    <SwiperSlide>
                      {/* <img
                      src={sliderImage1}
                      alt="slider-img"
                      className="w-full object-cover h-full"
                    /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <img
                      src={sliderImage1}
                      alt="slider-img"
                      className="w-full object-cover h-full"
                    /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <img
                      src={sliderImage1}
                      alt="slider-img"
                      className="w-full object-cover h-full"
                    /> */}
                    </SwiperSlide>
                  </Swiper>
                  <div className="absolute top-[50%] left-0 text-black w-full flex justify-between -translate-y-[50%] z-[9999]">
                    <button className="prev-arrow-description  bg-white rounded-xl w-[50px] h-[50px] border border-black flex items-center justify-center">
                      <FaArrowLeft className="text-fs_8 lg:text-fs_4" />
                    </button>
                    <button className="next-arrow-description  bg-white rounded-xl w-[50px] h-[50px] border border-black flex items-center justify-center">
                      <FaArrowRight className="text-fs_8 lg:text-fs_4" />
                    </button>
                  </div>
                </div>
                <p className="py-3 font-helvetica-neue tracking-wider font-medium">
                  Тампопечать — одна из самых популярных технологий нанесения
                  изображения на промопродукцию и бизнес-подарки. Это вид
                  глубокой печати, в процессе которой краска переносится с
                  печатной формы на изделие с помощью специального тампона. Чаще
                  всего метод используют для брендирования самых востребованных
                  и массовых промоподарков с плоской или выпуклой поверхностью,
                  но применяют и для печати на дорогих сувенирах из пластика,
                  силикона и т.п.
                </p>
                <h2 className="text-fs_3 my-2">Преимущества тампопечати</h2>
                <p className="tracking-wider font-medium">
                  Тампопечать применяют для печати логотипа на сувенирную
                  продукцию из пластика, дерева, металла, кожи, стекла и других
                  материалов (лучше всего краска ложится на пластиковые и
                  лакированные поверхности).
                </p>
                <p className="my-3">
                  Этот вид нанесения отлично подходит для тиражирования
                  промо-продукции, т.к. сочетает в себе скорость, низкую
                  себестоимость, отличное качество изображения и четкость линий,
                  а самое главное - попадание в пантон.
                </p>
                <ul className="list-disc px-8">
                  <li>Стойкое нанесение (от 1 до 3-х лет)</li>
                  <li>Точное воспроизведение мелких элементов изображения</li>
                  <li>Возможность печати по криволинейным поверхностям </li>
                  <li>Возможность печати по Pantone </li>
                  <li>Низкая стоимость печати</li>
                </ul>
                <h2 className="text-fs_3 my-2">Недостатки тампопечати</h2>
                <ul className="list-disc px-8">
                  <li>Сложность передачи градиента</li>
                  <li> Относительно небольшой максимальный размер нанесения</li>
                  <li>
                    Тампопечать не подходит для печати изображения CMYK. Печать
                    возможна только отдельными цветами.
                  </li>
                </ul>
                <h2 className="text-fs_3 my-2">
                  Продукция,
                  <span className="lowercase">
                    КОТОРАЯ ЛЕГКО БРЕНДИРУЮТСЯ С ПОМОЩЬЮ ТАМПОПЕЧАТИ
                  </span>
                </h2>
                <ul className="list-disc px-8">
                  <li>флешки</li>
                  <li>кружки</li>
                  <li>канцелярия</li>
                  <li>карандаши и ручки</li>
                  <li>брелоки , значки и магниты(пластиковые)</li>
                  <li>зажигалки</li>
                  <li>упаковки</li>
                </ul>
                <h2 className="text-fs_3 my-2">Загрузка производства</h2>
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-bold text-fs_3">2-3 дня</h2>
                    <p>
                      изготовление клише – <br /> если логотип имеет <br />{' '}
                      более 2-х цветов, то <br /> изготавливается 2 клише;
                    </p>
                  </div>
                  <span className="font-bold text-fs_3">+</span>
                  <div>
                    <h2 className="font-bold text-fs_3">2-5 дня</h2>
                    <p>перенос рисунка на изделие</p>
                  </div>
                  <span className="font-bold text-fs_3">+</span>
                  <div>
                    <h2 className="font-bold text-fs_3">2-3 дня</h2>
                    <p>просушкаизделия</p>
                  </div>
                  <span className="font-bold text-fs_3">=</span>
                  <div>
                    <h2 className="font-bold text-fs_3">от 5-10 дней</h2>
                    <p>итого</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={'технические'}>
                <div className="text-black">
                  <h2 className="text-fs_3 my-2">Параметры</h2>
                  <ul className="list-disc px-8">
                    <li>толщ. линий 0,1мм; </li>
                    <li>
                      {' '}
                      расстояние между линиями 0,1, инверсных линий 0,15мм;
                    </li>
                    <li>размер нанесения до 5х4см.</li>
                  </ul>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </ApplyingLayout>
    </DefaultLayout>
  );
};

export default PadPrinting;
