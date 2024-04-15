import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { Button } from '@material-tailwind/react';
import fileIcon from '../../assets/solar_file-linear.svg';

function Admin() {
  return (
    <DefaultLayout>
      <div>
        <div>
          <div className="p-2 pl-[38px] border-l border-r h-screen basis-[690px] border-[#E1DFDA]">
            <h1 className="tracking-[-4%] text-[28px] text-[#666666] leading-[64px]">
              Файлы и прайсы
            </h1>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center gap-[10px] mt-5 mb-[6px]">
                  <img
                    src={fileIcon}
                    alt="file icon"
                    width={'24px'}
                    height={'28px'}
                  />
                  <span className="text-[#00B6BA] font-medium text-fs_6 tracking-[-4%]">
                    Прайс-лист (склад)
                  </span>
                </div>
                <p className="text-[#9D9C98] text-fs_8 leading-[14.65px] font-bold">
                  “Проект 111”, поставки на заказ{' '}
                </p>
              </div>

              <div className="flex items-center gap-[10px] mt-5 mb-[6px]">
                <img
                  src={fileIcon}
                  alt="file icon"
                  width={'24px'}
                  height={'28px'}
                />
                <span className="text-[#00B6BA] font-medium text-fs_6 tracking-[-4%]">
                  Прайс-лист (прочее)
                </span>
              </div>

              <div className="flex items-center gap-[10px] mt-5 mb-[6px]">
                <img
                  src={fileIcon}
                  alt="file icon"
                  width={'24px'}
                  height={'28px'}
                />
                <span className="text-[#00B6BA] font-medium text-fs_6 tracking-[-4%]">
                  Контакты сотрудников
                </span>
              </div>
            </div>
            <div className="mt-10">
              <Button
                variant="outlined"
                className="border-[#9D9C98] text-[#9D9C98] w-[210px] h-[50px] text-fs_8 leading-[14.65px] font-bold py-[18px] rounded-[10px]"
              >
                сохранить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Admin;
