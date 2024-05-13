import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GetPrints } from '../../services/print';
import { Button } from '@material-tailwind/react';
import { IoMdCreate } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

const SidebarPrint = () => {
  const [prints, setPrints] = useState([]);

  useEffect(() => {
    // Вызываем GetPrints и обновляем состояние компонента
    const fetchPrints = async () => {
      try {
        const data = await GetPrints();
        setPrints(data);
        console.log(data); // Выводим данные в консоль
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchPrints();
  }, []);

  const fetchPrintsId = async () => {
    try {
      const data = await GetPrints();
      setPrints(data.id);
      console.log(data.id); // Выводим данные в консоль
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const id = fetchPrintsId

  const sidebarNavLinks = prints.map((print) => ({
    path: `/print/${print.id}`,
    label: print.title, // Используем значение title для label
  }));


  return (
    <div className="flex apply-sidebar ">
      <div className="py-5 w-full ">
        <div className="mb-5">
          {/* <Link to={'/print/add'}> */}
          <Link
            to={`http://5.35.82.80:8000/admin/blog/printcategory/add/`}
            target="_blank"
          >
            <Button color="green">Добавить тип печати</Button>
          </Link>
        </div>
        <h2 className="text-[28px]">Категории</h2>
        <div className="sidenavs mt-5">
          {sidebarNavLinks.map((navLink) => (
            <div className="flex justify-between items-center">
              <NavLink
                key={navLink.path}
                to={navLink.path}
                className="hover:bg-gray-200 p-2 rounded-md block font-bold"
              >
                {navLink.label}
              </NavLink>
              <div className='mr-2 flex gap-1'>
              <Link
            to={`http://5.35.82.80:8000/admin/blog/printcategory/1/change/`}
            target="_blank"
          >
                <Button
                  onClick={() => setEditCategory(category.id)}
                  className="rounded-md bg-warning py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
                >
                  <IoMdCreate size={20} />
                </Button>
                </Link>
                <Button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="rounded-md bg-danger py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
                >
                  <MdDelete size={20} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarPrint;
