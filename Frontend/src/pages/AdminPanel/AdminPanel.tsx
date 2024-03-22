import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

const AdminPanel = () => {
  return (
    <div className="container_xxl">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">

        </div>
        <List>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            настройки
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            конструктор предложений          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            регистрация/вход
            <ListItemSuffix>
              {/* <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /> */}
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            выйти из лк
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            файлы и прайсы          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default AdminPanel;
