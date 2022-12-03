import {Layout, Space} from "antd";
import CustomAvatar from "../Avatar";
import Translation from "@/layouts/components/Translation/index.jsx";
import './index.scss';

const {Header} = Layout;

const CustomHeader = () => {
    return (
        <Header>
            <div className="ant-header-container">
                <Space size={20}>
                    <CustomAvatar/>
                    <Translation/>
                </Space>
            </div>
        </Header>
    );
}

export default CustomHeader;