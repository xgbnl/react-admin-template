import {Spin} from "antd";
import './index.scss';

const Loading = () => {
    return (
        <div className="spin-wrapper">
            <Spin className="spin" size='large'/>
        </div>
    )
}

export default Loading;