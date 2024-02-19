import { Banner } from "../../components";
import Tshirt from "../../assets/t-shirt.png";
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

const CategoryDetails = () => {
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
      <div className="h-[400px]  grid grid-cols-3 my-5">
        <div className=" h-full p-5">
          <Tabs value="html">
            <TabsHeader className="tab-header border-0 border-b rounded-none bg-[#fff]">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="text-fs_9 uppercase w-auto"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  <List>
                    <ListItem>
                      Inbox
                      <ListItemSuffix>
                        <Chip
                          value="14"
                          variant="ghost"
                          size="sm"
                          className="rounded-full"
                        />
                      </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                      Spam
                      <ListItemSuffix>
                        <Chip
                          value="2"
                          variant="ghost"
                          size="sm"
                          className="rounded-full"
                        />
                      </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                      Trash
                      <ListItemSuffix>
                        <Chip
                          value="40"
                          variant="ghost"
                          size="sm"
                          className="rounded-full"
                        />
                      </ListItemSuffix>
                    </ListItem>
                  </List>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        <div className="bg-white flex flex-col  items-start  p-5">
          <div className="flex gap-2 font-bold uppercase">
            <div className="bg-redPrimary text-[#fff] py-[13px] px-[12px] tracking-widest text-fs_9 rounded-lg">
              Фото
            </div>
            <div className="bg-[#fff] py-[13px] px-[12px] tracking-widest text-fs_9 rounded-lg">
              Места нанесения
            </div>
            <div className="bg-[#fff] py-[13px] px-[12px] tracking-widest text-fs_9 rounded-lg">
              примеры
            </div>
          </div>
          <div className="flex justify-center mt-10 w-full">
            <img src={Tshirt} alt="" />
          </div>
        </div>
        <div className=""></div>
      </div>
      <Banner />
    </div>
  );
};

export default CategoryDetails;
