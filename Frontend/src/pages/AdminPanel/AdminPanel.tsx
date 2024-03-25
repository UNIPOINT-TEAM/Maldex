import {
  Card,
  List,
  ListItem,

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


            настройки
          </ListItem>
{/* @ts-ignore */}
          <ListItem>


            конструктор предложений          </ListItem>
{/* @ts-ignore */}
          <ListItem>

            регистрация/вход


          </ListItem>
          {/* @ts-ignore */}
          <ListItem>
            выйти из лк
          </ListItem>
          {/* @ts-ignore */}
          <ListItem>
            {/* @ts-ignore */}
            файлы и прайсы          </ListItem>
            {/* @ts-ignore */}
          <ListItem>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default AdminPanel;
