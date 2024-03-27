import { Card, List, ListItem } from "@material-tailwind/react";

import lk_icon1 from "../../assets/lk_icons/lk_icon (1).svg";
import lk_icon2 from "../../assets/lk_icons/lk_icon (2).svg";
import lk_icon3 from "../../assets/lk_icons/lk_icon (3).svg";
import lk_icon4 from "../../assets/lk_icons/lk_icon (4).svg";
import lk_icon5 from "../../assets/lk_icons/lk_icon (5).svg";
import lk_icon6 from "../../assets/lk_icons/lk_icon (6).svg";

const AdminPanel = () => {
  return (
    <div className="container_xxl">
      {/* @ts-ignore */}
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4"></div>
        {/* @ts-ignore */}
        <List>
          {/* @ts-ignore */}
          <ListItem><img src={lk_icon2} alt="" /> настройки</ListItem>
          {/* @ts-ignore */}
          <ListItem><img src={lk_icon3} alt="" />конструктор предложений </ListItem>

          {/* @ts-ignore */}
          <ListItem><img src={lk_icon4} alt="" />выйти из лк</ListItem>
          {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            <img src={lk_icon5} alt="" /> файлы и прайсы
          </ListItem>
          {/* @ts-ignore */}
          <ListItem><img src={lk_icon1} alt="" />выйти из лк</ListItem>
          {/* @ts-ignore */}
          <ListItem><img src={lk_icon6} alt="" />выйти из лк</ListItem>
        </List>
      </Card>
    </div>
  );
};

export default AdminPanel;
