import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";

const AdminPanel = () => {
  return (
    <div className="container_xxl">
      {/* @ts-ignore */}
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">

        </div>
        {/* @ts-ignore */}
        <List>
          {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            <ListItemPrefix></ListItemPrefix>
            настройки
          </ListItem>
          {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            <ListItemPrefix></ListItemPrefix>
            конструктор предложений          </ListItem>
            {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            <ListItemPrefix></ListItemPrefix>
            регистрация/вход
            {/* @ts-ignore */}
            <ListItemSuffix>
              {/* <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /> */}
            </ListItemSuffix>
          </ListItem>
          {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            <ListItemPrefix></ListItemPrefix>
            выйти из лк
          </ListItem>
          {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            <ListItemPrefix></ListItemPrefix>
            файлы и прайсы          </ListItem>
            {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            <ListItemPrefix></ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default AdminPanel;
