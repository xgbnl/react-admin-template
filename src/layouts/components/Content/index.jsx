import {Layout} from "antd";
import './index.scss'
const {Content} = Layout;

const CustomContent = ({children}) => {
    return (
        <Content style={{margin: '15px', minHeight: 280,}}>
            <div className='content'>
                {children}
            </div>
        </Content>
    );
}

export default CustomContent;