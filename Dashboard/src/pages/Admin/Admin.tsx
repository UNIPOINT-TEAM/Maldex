import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { Button } from '@material-tailwind/react';
import fileIcon from '../../assets/solar_file-linear.svg';
import { GetAdminFiles } from '../../services/adminFiles';

function Admin() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await GetAdminFiles();
        if (Array.isArray(data)) {
          setFiles(data);
        } else {
          console.error('Data fetched is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching admin files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div>
          <div className="p-2 pl-[38px] border-l border-r h-screen basis-[690px] border-[#E1DFDA]">
            <h1 className="tracking-[-4%] text-[28px] text-[#666666] leading-[64px]">
              Файлы и прайсы
            </h1>
            <div className="flex flex-col gap-5">
              {files?.map((file, index) => (
                <div key={index}>
                  <div className="flex items-center gap-[10px] mt-5 mb-[6px]">
                    <img
                      src={fileIcon}
                      alt="file icon"
                      width={'24px'}
                      height={'28px'}
                    />
                    <span className="text-[#00B6BA] font-medium text-fs_6 tracking-[-4%]">
                      {file.name} {/* Assuming each file object has a 'name' property */}
                    </span>
                  </div>
                  <p className="text-[#9D9C98] text-fs_8 leading-[14.65px] font-bold">
                    {file.description} {/* Assuming each file object has a 'description' property */}
                  </p>
                </div>
              ))}
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
