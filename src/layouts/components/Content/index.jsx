import { Layout } from "antd";

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