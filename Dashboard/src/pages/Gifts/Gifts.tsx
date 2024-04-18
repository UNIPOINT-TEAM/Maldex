import { GiftBanner,  } from '../../components';
import DefaultLayout from '../../layout/DefaultLayout';
import GiftsSlider from './Components/GiftsSlider';

const Gifts = () => {
  return (
    <DefaultLayout>
      <div>
        <div>
          <GiftBanner />
        </div>
        <div>
        <GiftsSlider />
      </div>
      </div>
    </DefaultLayout>
  );
};

export default Gifts;
