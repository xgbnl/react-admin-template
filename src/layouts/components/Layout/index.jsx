import {Layout} from "antd";
import SideBar from "../Sider";
import CustomHeader from '../Header';
import CustomFooter from '../Footer';
import CustomContent from '../Content';
import Breadcrumb from '../Breadcrumb';
import {Outlet} from 'react-router-dom';
import {useSideBarRoutes} from "@/router/module/permission.jsx";
import AntdDrawer from "../Drawer/index.jsx";
import {useAppSelector} from "@/app/hooks.js";
import {selectSetting} from "@/app/reducers/setting/settingReducer.js";
import './index.scss';

const CustomLayout = () => {

    const routes = useSideBarRoutes();

    const storeSetting = useAppSelector(selectSetting);

    return (
        <Layout>
            <SideBar routes={routes} storeSetting={storeSetting}/>
            <Layout>
                <CustomHeader storeSetting={storeSetting}/>
                <Breadcrumb routes={routes}/>
                <CustomContent>
                    <Outlet/>
                    <AntdDrawer storeSetting={storeSetting}/>
                </CustomContent>
                <CustomFooter storeSetting={storeSetting}/>
            </Layout>
        </Layout>
    );
}

export default CustomLayout;