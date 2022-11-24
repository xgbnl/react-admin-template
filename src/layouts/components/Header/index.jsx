import { Layout } from "antd";
import CustomAvatar from "../Avatar";
import './index.scss';
import settings from "@/settings";

const { Header } = Layout;

const CustomHeader = () => {
    return (
        <Header>

            <div className="avatar-wrap">
                <CustomAvatar avatar={settings.avatarApi}/>
            </div>

        </Header>
    );
}

export default CustomHeader;