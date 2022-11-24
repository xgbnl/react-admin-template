import {Spin} from "antd";
import settings from "@/settings";
import './index.scss';

const Loading = () => {
    return (
        <div className="spin-wrapper">
            <div className="title"><h1>{settings.loading.header}</h1></div>
            <Spin className="spin" size='large'/>
            <div className="design">
                <img src={settings.logo} alt="logo" />
                <span>{settings.loading.footer}</span>
            </div>
        </div>
    )
}

export default Loading;