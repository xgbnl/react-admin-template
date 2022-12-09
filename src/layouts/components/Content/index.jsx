import {Layout} from "antd";
import './index.scss'
const {Content} = Layout;
import Notification from "@/layouts/components/Notification/index.jsx";
import {useEffect, useRef} from "react";

const CustomContent = ({children}) => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.openNotification();
    },[])

    return (
        <Content style={{margin: '15px'}}>
            <div className='content'>
                <Notification ref={ref} userName={'管理员'}/>
                {children}
            </div>
        </Content>
    );
}

export default CustomContent;