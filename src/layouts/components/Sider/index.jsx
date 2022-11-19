import { Layout } from "antd";
import CustomMenu from "../Menu";
import Logo from "../Logo";

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed, items, logo, title, theme }) => {
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
            <Logo collapsed={collapsed} logo={logo} title={title} />
            <CustomMenu items={items} theme={theme} />
        </Sider>
    );
}

export default SideBar;