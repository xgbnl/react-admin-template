import { useState } from 'react';
import { Layout } from "antd";
import SideBar from "../Sider";
import CustomHeader from '../Header';
import CustomFooter from '../Footer';
import CustomContent from '../Content';
import { Outlet } from 'react-router-dom';
import './index.scss';

const CustomLayout = ({ logo, title, theme, items,footer ,avatar}) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <SideBar collapsed={collapsed}
                setCollapsed={setCollapsed}
                items={items}
                logo={logo}
                title={title}
                theme={theme}
            />
            <Layout>
                <CustomHeader avatar={avatar} />
                <CustomContent>
                    <Outlet />
                </CustomContent>
                <CustomFooter content={footer} />
            </Layout>
        </Layout>
    );
}

export default CustomLayout;