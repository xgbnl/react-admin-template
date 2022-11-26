import {Layout} from "antd";
import CustomAvatar from "../Avatar";
import {useAppSelector} from "@/app/hooks.js";
import {selectUser} from "@/app/reducers/user/UserReducer.js";

import './index.scss';

const {Header} = Layout;

const CustomHeader = () => {

    const {name, avatar} = useAppSelector(selectUser);

    return (
        <Header>
            <div className="avatar-wrap">
                <CustomAvatar avatar={avatar}/>
                <h5>{name}</h5>
            </div>
        </Header>
    );
}

export default CustomHeader;