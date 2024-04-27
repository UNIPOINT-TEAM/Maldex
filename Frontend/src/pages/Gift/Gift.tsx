import { useEffect, useState } from "react";
import {
  GiftBanner,
  QuestForm,
  TagBanner,
} from "../../components";
import GiftsSlider from "./components/GiftsSlider";
import { GetGiftsCategory } from "../../services/services";

function Gift() {


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
    <div>
      <GiftBanner />
      <div>
        <div>
          {giftCategories.map((category, index) => (
            <GiftsSlider key={index} category={category} />
          ))}
        </div>
        <TagBanner />
        <QuestForm />
      </div>
    </div>
  );
}

export default Gift;
