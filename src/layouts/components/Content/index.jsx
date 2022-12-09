import {useEffect, useRef} from "react";
import {Layout} from "antd";
import Notification from "@/layouts/components/Notification/index.jsx";
import './index.scss'

const {Content} = Layout;
const CustomContent = ({children}) => {
    const ref = useRef(null);

    useEffect(() => {
            ref.current.openNotification();
    }, [])

    return (
        <Content style={{margin: '15px'}}>
            <div className='content'>
                <Notification ref={ref}/>
                {children}
            </div>
        </Content>
    );
}

export default CustomContent;