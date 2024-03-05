import {
  Chip,
  List,
  ListItem,
  ListItemSuffix,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

function TagList() {
  const data = [
    {
      label: "Описание",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Характеристики",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "таблица размеров",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "виды нанесения",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div>
      <div className="container_xxl">
        <div className="flex gap-[21px] justify-center my-8">
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            для неё
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            для него
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на свадьбу
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на новый год
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на корпоратив
          </button>
          <button className="px-5 py-3 bg-lightSecondary rounded-2xl uppercase hover:bg-redPrimary hover:text-white">
            на день рождения
          </button>
        </div>


      </div>
    </div>
  );
}

export default TagList;
