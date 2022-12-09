import {useEffect, useRef} from "react";
import {Layout} from "antd";
import Notification from "@/layouts/components/Notification/index.jsx";
import {useAppSelector, useAppDispatch} from "@/app/hooks.js";
import {selectUser, setNotification} from "@/app/reducers/user/UserReducer.js";
import './index.scss'

const {Content} = Layout;
const CustomContent = ({children}) => {
    const ref = useRef(null);

    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (user.notification) {
            ref.current.openNotification();
            dispatch(setNotification(false));
        }

    }, [])


    return (
        <Content style={{margin: '15px'}}>
            <div className='content'>
                <Notification ref={ref} userName={user.name}/>
                {children}
            </div>
        </Content>
    );
}

export default CustomContent;