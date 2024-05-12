import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GetPrints } from '../../services/print';
import { Button } from '@material-tailwind/react';

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

  const sidebarNavLinks = prints.map((print) => ({
    path: `/print/${print.id}`,
    label: print.title, // Используем значение title для label
  }));

  return (
    <div className="flex apply-sidebar ">
      <div className="py-5 w-full ">
        <div className="mb-5">
          {/* <Link to={'/print/add'}> */}
          <Link to={`http://5.35.82.80:8000/admin/blog/printcategory/add/`} target='_blank'>

            <Button color="green">Добавить тип печати</Button>
          </Link>
        </div>
        <h2 className="text-[28px]">Категории</h2>
        <div className="sidenavs mt-5">
          {sidebarNavLinks.map((navLink) => (
            <NavLink
              key={navLink.path}
              to={navLink.path}
              className="hover:bg-gray-200 p-2 rounded-md block font-bold"
            >
              {navLink.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarPrint;
