import { Layout } from "antd";
import SideBar from "../Sider";
import CustomHeader from '../Header';
import CustomFooter from '../Footer';
import CustomContent from '../Content';
import { Outlet } from 'react-router-dom';
import './index.scss';

const CustomLayout = () => {
    return (
        <Layout>
            <SideBar />
            <Layout>
                <CustomHeader />
                <CustomContent>
                    <Outlet />
                </CustomContent>
                <CustomFooter />
            </Layout>
        </Layout>
    );
}

export default CustomLayout;