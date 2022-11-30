import {Layout} from "antd";
import { useState} from "react";
import Trigger from "@/layouts/components/Trigger/index.jsx";
import Logo from "@/layouts/components/Logo/index.jsx";
import CustomMenu from "@/layouts/components/Menu/index.jsx";

import settings from "@/settings";
import './index.scss'

const {Sider} = Layout;

const SideBar = ({routes}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    }

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            theme={settings.sideBarTheme}
            collapsedWidth={48}
            trigger={<Trigger collapsed={collapsed} theme={settings.sideBarTheme}/>}
        >
            <Logo logo={settings.logo} title={settings.title} collapsed={collapsed}/>
            <CustomMenu theme={settings.sideBarTheme} routes={routes}/>
        </Sider>
    );
}

export default SideBar;