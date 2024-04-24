import oneArticleImg from "../assets/Gallery/one-article.png";
import twoArticleImg from "../assets/Gallery/two-article.png";
import imgText from "../assets/Gallery/image-text.png";
import image from "../assets/Gallery/image.png";
import newClients from "../assets/Gallery/new-clients.png";
import MaldexT from "../assets/Gallery/maldex.png";
import {
  MaldexTepmlate,
  NewClients,
  OneArticle,
  Picture,
  PictureText,
  TwoArticle,
} from "../components/GalleryLayoutTemplate";
export const SAMPLE_TEMPLATES = [
  {
    title: "один артикул",
    template: <OneArticle />,
    preview: oneArticleImg,
  },
  {
    title: "два артикула ",
    template: <TwoArticle />,
    preview: twoArticleImg,
  },
  {
    title: "картинка + текст",
    preview: imgText,
    template: <PictureText />,
  },
  {
    title: "картинка",
    preview: image,
    template: <Picture />,
  },
  {
    title: "малдекс для новых клиентов",
    preview: newClients,
    template: <NewClients />,
  },
  {
    title: "малдекс",
    preview: MaldexT,
    template: <MaldexTepmlate />,
  },
];
