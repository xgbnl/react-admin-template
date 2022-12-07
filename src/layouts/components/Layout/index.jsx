import {Layout} from "antd";
import SideBar from "../Sider";
import CustomHeader from '../Header';
import CustomFooter from '../Footer';
import CustomContent from '../Content';
import Breadcrumb from '../Breadcrumb';
import {Outlet} from 'react-router-dom';
import {useSideBarRoutes} from "@/router/module/permission.jsx";
import CustomFloatButton from "../FloatButton/index.jsx";

const CustomLayout = () => {

    const routes = useSideBarRoutes();

    return (
        <Layout style={{height: '100vh'}}>
            <SideBar routes={routes}/>
            <Layout>
                <CustomHeader/>
                <Breadcrumb routes={routes}/>
                <CustomContent>
                    <Outlet/>
                    <CustomFloatButton/>
                </CustomContent>
                <CustomFooter/>
            </Layout>
        </Layout>
    );
}

export default CustomLayout;