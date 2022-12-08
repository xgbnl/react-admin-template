import {Layout, Space} from "antd";
import CustomAvatar from "../Avatar";
import Translation from "@/layouts/components/Translation/index.jsx";
import './index.scss';

const {Header} = Layout;

const CustomHeader = ({storeSetting}) => {

    const style = {position: 'sticky', top: 0, zIndex: 1, width: '100%'};

    return !storeSetting.showHeader
        ? <></>
        : (<Header style={storeSetting.fixedHeader ? style : {}}>
            <div className="ant-header-container">
                <Space size={8}>
                    <CustomAvatar/>
                    <Translation/>
                </Space>
            </div>
        </Header>);
}

export default CustomHeader;