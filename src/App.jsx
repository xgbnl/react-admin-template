import CustomLayout from "./layouts/components/Layout";
import { settings } from '@utils/settings';
import { defaultRoutes } from "./route";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {

    console.log(defaultRoutes);

  });

  return (
    <CustomLayout logo={settings.logo}
      title={settings.title}
      items={items}
      theme={settings.siderBarTheme}
      footer={settings.footer}
      avatar={settings.avatarApi}
    />
  )
}

export default App;