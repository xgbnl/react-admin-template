import { Layout } from "antd";
import CustomMenu from "../Menu";
import Logo from "../Logo";
import settings from "@/settings";

const { Sider } = Layout;

const munuItems = ({ key, label, children, icon }) => {
    return {
        key,
        label,
        children,
        icon,
    };
}

const SideBar = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
            <Logo collapsed={collapsed} logo={settings.logo} title={settings.title} />
            <CustomMenu items={items} theme={settings.siderBarTheme} />
        </Sider>
    );
}

export default SideBar;