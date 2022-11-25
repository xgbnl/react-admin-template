import { Layout } from "antd";
import './index.scss'

const {Content} = Layout;

const CustomContent = (props) => {
    return (
        <Content>
            <div className="site-layout-backgroud">
                {props.children}
            </div>
        </Content>
    );
}

export default CustomContent;