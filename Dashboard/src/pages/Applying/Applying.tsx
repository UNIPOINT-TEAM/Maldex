import { useParams } from 'react-router-dom';
import ApplyingLayout from '../../layout/ApplyingLayout';
import DefaultLayout from '../../layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { GetPrintsId } from '../../services/print';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { BASE_URL } from '../../utils/BaseUrl';

// Определение интерфейса для данных, получаемых из API
interface PrintInfo {
  title: string;
  image: string;
  content: string;
  requirement: string;
}

const Applying = () => {
  const [printInfo, setPrintInfo] = useState<PrintInfo | null>(null);
  const [activeTab, setActiveTab] = useState('описание');

  // Указываем, что id должен быть строкой
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      GetPrintsId(id)
        .then((data) => {
          setPrintInfo(data);
          console.log(data);
        })
        .catch((error) => {
          console.error('Failed to fetch print data:', error);
        });
    }
  }, [id]);

  // const modifiedContent = printInfo.content.replace(
  //   /src="\/media/g,
  //   `src="${BASE_URL}/media`,
  // );

  return (
    <DefaultLayout>
      <ApplyingLayout>
        <div className='ml-5'>
          {printInfo && (
            <>
              <h1>{printInfo.title}</h1>
              {/* <img src={printInfo.image} alt="Descriptive Alt Text" />
              <div>{printInfo.content}</div>
              <div>{printInfo.requirement}</div> */}
              <Tabs value={activeTab}>
                <TabsHeader
                  className="rounded-none gap-8 border-b border-blue-gray-50 bg-transparent p-0"
                  indicatorProps={{
                    className:
                      'bg-transparent border-b-4 border-redPrimary shadow-none rounded-none',
                  }}
                >
                  <Tab
                    key="описание"
                    value="описание"
                    onClick={() => setActiveTab('описание')}
                    className={` w-auto text-start p-0 ${
                      activeTab === 'описание'
                        ? 'text-red-primary'
                        : 'text-dark-secondary'
                    }`}
                  >
                    <h2 className="font-helvetica-neue uppercase text-fs_6 py-4">
                      Описание
                    </h2>
                  </Tab>
                  <Tab
                    key="технические"
                    value="технические"
                    onClick={() => setActiveTab('технические')}
                    className={` w-auto text-start p-0 ${
                      activeTab === 'технические'
                        ? 'text-red-primary'
                        : 'text-dark-secondary'
                    }`}
                  >
                    <h2 className="font-helvetica-neue uppercase text-fs_6 py-4">
                      Технические требования
                    </h2>
                  </Tab>
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  <TabPanel value={'описание'} className="w-full  text-black">
                    <div
                      dangerouslySetInnerHTML={{ __html: printInfo.content.replace(
                        /src="\/media/g,
                        `src="${BASE_URL}/media`,
                      ) }}
                    />
                  </TabPanel>
                  <TabPanel value={'технические'}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: printInfo.requirement.replace(
                          /src="\/media/g,
                          `src="${BASE_URL}/media`,
                        ),
                      }}
                    />
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </>
          )}
        </div>
      </ApplyingLayout>
    </DefaultLayout>
  );
};

export default Applying;
