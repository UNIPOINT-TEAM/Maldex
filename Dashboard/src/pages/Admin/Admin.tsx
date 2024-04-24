import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import fileIcon from '../../assets/solar_file-linear.svg';
import { Button, Input } from '@material-tailwind/react';
import {
  DelAdminFiles,
  GetAdminFiles,
  PostAdminFiles,
} from '../../services/adminFiles'; // Предполагается, что у вас есть функция PostAdminFiles
import { MdDelete } from 'react-icons/md';

function Admin() {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log('Заголовок изменен:', e.target.value); // Выводим новое значение заголовка в консоль
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log('Событие onChange:', e); // Выводим событие в консоль
    console.log('Элемент input:', e.target); // Выводим элемент input в консоль
    console.log('Выбранный файл:', selectedFile); // Выводим выбранный файл в консоль

    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('name', title);
    if (file) {
      formData.append('file', file);
    } else {
      console.warn('Файл не выбран');
    }

    console.log('Данные перед отправкой:', formData); // Выводим данные перед отправкой

    try {
      await PostAdminFiles(formData);
      console.log('Данные успешно отправлены:', formData);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  const deleteFile = async (idToDelete) => {
    try {
      await DelAdminFiles(idToDelete);
      // После успешного удаления обновляем список файлов, удаляя удаленный файл из состояния
      setFiles((prevFiles) =>
        prevFiles.filter((file) => file.id !== idToDelete),
      );
      console.log('Файл успешно удален');
    } catch (error) {
      console.error('Ошибка при удалении файла:', error);
    }
  };

  return (
    <DefaultLayout>
      <div>
        <div>
          <div className="p-2 pl-[38px] border-l border-r h-screen basis-[690px] border-[#E1DFDA]">
            <h1 className="tracking-[-4%] text-[28px] text-[#666666] leading-[64px]">
              Файлы и прайсы
            </h1>
            <div className="flex flex-col gap-5 justify-between w-full">
              {files?.map((file, index) => (
                <div className="flex justify-between">
                  <div key={index}>
                    <div className="flex  gap-[10px] mt-5 mb-[6px]">
                      <img
                        src={fileIcon}
                        alt="file icon"
                        width={'24px'}
                        height={'28px'}
                      />
                      <span className="text-[#00B6BA] font-medium text-fs_6 tracking-[-4%]">
                        {file.name}
                      </span>
                    </div>
                    <p className="text-[#9D9C98] text-fs_8 leading-[14.65px] font-bold">
                      {file.description}
                    </p>
                  </div>
                  <Button
                    color="red"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={true}
                    ripple="light"
                    onClick={() => deleteFile(file.id)} 
                  >
                    <MdDelete />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Введите название файла"
                  value={title}
                  onChange={handleTitleChange}
                />
                <Input type="file" onChange={handleFileChange} />
                <Button
                  type="submit"
                  variant="outlined"
                  className="border-[#9D9C98] text-[#9D9C98] w-[210px] h-[50px] text-fs_8 leading-[14.65px] font-bold py-[18px] rounded-[10px]"
                >
                  сохранить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Admin;
