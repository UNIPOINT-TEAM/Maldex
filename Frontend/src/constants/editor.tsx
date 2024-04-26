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
import { nanoid } from "nanoid";
export const SAMPLE_TEMPLATES = [
  {
    id: nanoid(),
    title: "один артикул",
    template: <OneArticle />,
    preview: oneArticleImg,
    thumbnail: "",
  },
  {
    id: "two-article",
    title: "два артикула ",
    template: <TwoArticle />,
    preview: twoArticleImg,
    thumbnail: "",
  },
  {
    id: "image-text",
    title: "картинка + текст",
    preview: imgText,
    template: <PictureText />,
    thumbnail: "",
  },
  {
    id: "image",
    title: "картинка",
    preview: image,
    template: <Picture />,
    thumbnail: "",
  },
  {
    id: "new-clients",
    title: "малдекс для новых клиентов",
    preview: newClients,
    template: <NewClients />,
    thumbnail: "",
  },
  {
    id: "maldex-template",
    title: "малдекс",
    preview: MaldexT,
    template: <MaldexTepmlate />,
    thumbnail: "",
  },
];
