import CustomLayout from "./layouts/components/Layout";
import { settings } from '@utils/settings';
import { defaultRoutes } from "@/route";
import { useEffect, useState } from "react";
import {transformerMenuData} from '@utils/filterMenu';

const App = () => {

  const [menus,setMenus] = useState([]);

  useEffect(() => {

    setMenus(transformerMenuData(defaultRoutes));
  },[]);

  return (
    <CustomLayout logo={settings.logo}
      title={settings.title}
      items={menus}
      theme={settings.siderBarTheme}
      footer={settings.footer}
      avatar={settings.avatarApi}
    />
  )
}

export default App;