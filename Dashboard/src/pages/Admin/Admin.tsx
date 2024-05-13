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
  const [fileName, setFileName] = useState('');


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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log('Заголовок изменен:', e.target.value); // Выводим новое значение заголовка в консоль
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log('Выбранный файл:', selectedFile);
  
    // Сохраняем имя выбранного файла
    setFileName(selectedFile.name);
  
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
  
      // Добавляем новый файл в текущий список файлов
      const newFile = { id: Math.random(), name: title, description: "" }; // Просто пример, генерируйте ID и описание файла по вашей логике
      setFiles(prevFiles => [...prevFiles, newFile]);
      // window.location.reload();
      // Очищаем поля ввода
      setFileName('')
      setFile(null);
      setTitle('');
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
    fetchFiles()
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
            <div className="mt-10">
              <form
                onSubmit={handleSubmit}
                className="flex w-full gap-5 items-center"
              >
                <div className="w-1/5">
                  <Input
                    required
                    type="text"
                    // variant="standard"
                    label="Название"
                    placeholder="Введите название файла"
                    value={title}
                    onChange={handleTitleChange}
                    className=""
                  />
                </div>

                <div className="my-5">
                  <label className="flex w-full h-[40px] cursor-pointer border-dashed items-center justify-center gap-2 rounded-md border border-b py-1 px-2 text-sm font-medium  hover:bg-opacity-90 xsm:px-4">
                    <input
                      required
                      label="Файл"
                      type="file"
                      className="sr-only"
                      accept="file/*"
                      onChange={handleFileChange}
                    />
                    {/* <p className="text-fs-7">Добавить Файл</p> */}
                    <p className="text-fs-7">{fileName || "Добавить Файл"}</p>

                  </label>
                </div>

                <Button
                  type="submit"
                  color="green"
                  // variant="outlined"
                  className="  py-2 text-[14px] text-white rounded-lg"
                >
                  сохранить
                </Button>
              </form>
            </div>
            <div className="flex flex-col gap-5 justify-between w-[40.5%]">
              {files?.map((file, index) => (
                <div className="flex justify-between items-center">
                  <div key={index}>
                    <div className="flex items-center gap-[10px]  ">
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
                    className="rounded-md  py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
                    onClick={() => deleteFile(file.id)}
                  >
                    <MdDelete size={20} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Admin;
