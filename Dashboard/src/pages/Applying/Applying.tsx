import { useParams } from 'react-router-dom';
import ApplyingLayout from '../../layout/ApplyingLayout';
import DefaultLayout from '../../layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { GetPrintsId } from '../../services/print';

// Определение интерфейса для данных, получаемых из API
interface PrintInfo {
  title: string;
  image: string;
  content: string;
  requirement: string;
}

const Applying = () => {
  const [printInfo, setPrintInfo] = useState<PrintInfo | null>(null);

  // Указываем, что id должен быть строкой
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      GetPrintsId(id).then((data) => {
        setPrintInfo(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Failed to fetch print data:", error);
      });
    }
  }, [id]);

  return (
    <DefaultLayout>
      <ApplyingLayout>
        <div>
          {printInfo ? (
            <>
              <h1>{printInfo.title}</h1>
              <img src={printInfo.image} alt="Descriptive Alt Text" />
              <div>{printInfo.content}</div>
              <div>{printInfo.requirement}</div>
            </>
          ) : (
            <p></p> 
          )}
        </div>
      </ApplyingLayout>
    </DefaultLayout>
  );
};

export default Applying;
