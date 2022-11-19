import { Menu } from "antd";

const CustomMenu = ({ items, theme = 'dark', defaultSelectedKeys = ['1'], mode = 'inline' }) => {
    return (
        <Menu items={items}
            theme={theme}
            defaultSelectedKeys={defaultSelectedKeys}
            mode={mode} />
    );
}

export default CustomMenu;