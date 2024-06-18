import { useEffect, useState } from "react";
import { GiftBanner, QuestForm, TagBanner } from "../../components";
import GiftsSlider from "./components/GiftsSlider";
import { GetGiftsCategory } from "../../services/services";
import { Helmet } from "react-helmet";

function Gift() {
  const [giftCategories, setGiftCategories] = useState([]);
  useEffect(() => {
    GetGiftsCategory()
      .then((res) => {
        setGiftCategories(res);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Подарочные наборы с логотипом компании на заказ в Москве: широкий
          ассортимент, выгодные цены | Maldex
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
