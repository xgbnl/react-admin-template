import {Layout} from "antd";
import './index.scss'
const {Content} = Layout;

const CustomContent = ({children}) => {
    return (
        <Content style={{margin: '15px'}}>
            <div className='content'>
                {children}
            </div>
        </Content>
    );
}

export default CustomContent;