import {Spin} from "antd";
import settings from "@/settings";
import './index.scss';

const Loading = () => {
    return (
        <div className="spin-wrapper">
            <Spin className="spin" size='large'/>
        </div>
    )
}

export default Loading;