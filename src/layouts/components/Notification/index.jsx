import {forwardRef, useImperativeHandle, useMemo, createContext} from "react";
import {notification} from 'antd';
import {SmileTwoTone} from '@ant-design/icons';

const getTimeState = () => {
    let timeNow = new Date();

    let hours = timeNow.getHours();

    let text = null;

    switch (true) {
        case hours >= 0 && hours <= 10:
            text = '早上好';
            break;
        case hours > 10 && hours <= 14:
            text = '中午好';
            break;
        case hours > 14 && hours <= 18:
            text = '下午好'
            break;
        case hours > 18 && hours <= 24:
            text = '晚上好';
            break;
    }

    return text;
}

const {useNotification} = notification;

const Notification = forwardRef(({userName}, ref) => {
    const [api, contextHolder] = useNotification();

    const contextValue = useMemo(() => ({name: userName,}), [],);
    const openNotification = () => {
        api.info({
            message: getTimeState(),
            description: <Context.Consumer>{({name}) => `欢迎回来, ${name}!`}</Context.Consumer>,
            placement: 'topRight',
            icon: <SmileTwoTone/>
        });
    };

    useImperativeHandle(ref, () => ({
        openNotification,
    }))

    const Context = createContext({name: 'default'})

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
        </Context.Provider>
    );
})
export default Notification;