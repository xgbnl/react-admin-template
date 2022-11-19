import { Layout } from "antd";
import CustomAvatar from "../Avatar";
import './index.scss';

const { Header } = Layout;

const CustomHeader = ({avatar}) => {
    return (
        <Header>

            <div className="avatar-wrap">
                <CustomAvatar avatar={avatar}/>
            </div>

        </Header>
    );
}

export default CustomHeader;