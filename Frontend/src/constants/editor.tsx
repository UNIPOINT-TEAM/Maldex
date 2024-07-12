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
import OneArticlePdf from "../components/GalleryLayoutTemplate/PdfTemplate/OneArticle";
import TwoArticlePdf from "../components/GalleryLayoutTemplate/PdfTemplate/TwoArticle";
import PictureTextPdf from "../components/GalleryLayoutTemplate/PdfTemplate/PictureText";
import PicturePdf from "../components/GalleryLayoutTemplate/PdfTemplate/Picture";
import NewClientsPdf from "../components/GalleryLayoutTemplate/PdfTemplate/NewClients";
import MaldexTepmlatePdf from "../components/GalleryLayoutTemplate/PdfTemplate/MaldexTepmlate";
import { nanoid } from "nanoid";
export const SAMPLE_TEMPLATES = [
  {
    id: nanoid(),
    title: "один артикул",
    template: <OneArticle />,
    pdfTemplate: <OneArticlePdf />,
    preview: oneArticleImg,
    thumbnail: "",
  },
  {
    id: "two-article",
    title: "два артикула ",
    template: <TwoArticle />,
    pdfTemplate: <TwoArticlePdf />,
    preview: twoArticleImg,
    thumbnail: "",
  },
  {
    id: "image-text",
    title: "картинка + текст",
    preview: imgText,
    template: <PictureText />,
    pdfTemplate: <PictureTextPdf />,
    thumbnail: "",
  },
  {
    id: "image",
    title: "картинка",
    preview: image,
    template: <Picture />,
    pdfTemplate: <PicturePdf />,
    thumbnail: "",
  },
  {
    id: "new-clients",
    title: "малдекс для новых клиентов",
    preview: newClients,
    template: <NewClients />,
    pdfTemplate: <NewClientsPdf />,
    thumbnail: "",
  },
  {
    id: "maldex-template",
    title: "малдекс",
    preview: MaldexT,
    template: <MaldexTepmlate />,
    pdfTemplate: <MaldexTepmlatePdf />,
    thumbnail: "",
  },
];
