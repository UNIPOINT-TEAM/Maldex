import { Card, List, ListItem, ListItemSuffix } from "@material-tailwind/react";

const listData = [
  {
    name: "Вес брутто",
    value: "100 г.",
  },
  {
    name: "Транспортная упаковка",
    value: "60 * 40 * 30 См.",
  },
  {
    name: "Вес упаковки",
    value: "10,00 кг.",
  },
  {
    name: "ВОбъем упаковки",
    value: "0,091 м2",
  },
  {
    name: "Количество в упаковке",
    value: "100 шт.",
  },
  {
    name: "Индивидуальная упаковка",
    value: "Без упаковки",
  },
];

const TabList = () => {
  return (
    <Card
      className="w-full shadow-none p-0 m-0 bg-transparent"
      placeholder={<div />}
    >
      <List
        placeholder={<div />}
        className="text-fs_7 font-medium p-0 font-Helvetica-Neue"
      >
        {listData.map((item, i) => (
          <ListItem
            key={i}
            ripple={false}
            placeholder={<div />}
            className=" focus:bg-transparent active:bg-transparent text-black border-b rounded-none"
          >
            <span>{item.name}</span>
            <ListItemSuffix placeholder={<div />}>{item.value}</ListItemSuffix>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default TabList;
