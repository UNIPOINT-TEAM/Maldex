import { useEffect, useState } from 'react';
import { GiftBanner } from '../../components';
import DefaultLayout from '../../layout/DefaultLayout';
import GiftsSlider from './Components/GiftsSlider';
import { GetGiftsCategory } from '../../services/gifts';

const Gifts = () => {
  const [giftCategories, setGiftCategories] = useState([]);

  useEffect(() => {
    GetGiftsCategory()
      .then((res) => {
        setGiftCategories(res);
        console.log(res);
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div>
          <GiftBanner />
        </div>
        <div>
          {giftCategories.map((category, index) => (
            <GiftsSlider key={index} category={category} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Gifts;
