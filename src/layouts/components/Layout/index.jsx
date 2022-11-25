import { Layout } from "antd";
import SideBar from "../Sider";
import CustomHeader from '../Header';
import CustomFooter from '../Footer';
import CustomContent from '../Content';
import Breadcrumb from '../Breadcrumb';
import { Outlet } from 'react-router-dom';

const CustomLayout = () => {
    return (
        <Layout style={{height: '100vh'}}>
            <SideBar />
            <Layout>
                <CustomHeader />
                <Breadcrumb/>
                <CustomContent>
                    <Outlet />
                </CustomContent>
                <CustomFooter />
            </Layout>
        </Layout>
    );
}

export default CustomLayout;