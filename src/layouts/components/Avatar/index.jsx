import {Dropdown, Avatar, Image, Space} from "antd";
import {useAppDispatch, useAppSelector} from "@/app/hooks.js";
import {logoutAsync, selectUser} from "@/app/reducers/user/UserReducer.js";
import {UserOutlined, SettingOutlined, LogoutOutlined} from '@ant-design/icons';
import {createDropdownItems} from "@utils/utils.js";
import './index.scss';

const CustomAvatar = () => {

    const dispatch = useAppDispatch();
    const {name, avatar} = useAppSelector(selectUser);

    const handelLogout = () => {
        dispatch(logoutAsync())
    }

    const items = createDropdownItems([
        (<Space>
            <UserOutlined/>
            <span>个人中心</span>
        </Space>),

        (<Space>
            <SettingOutlined/>
            <span>个人设置</span>
        </Space>),
        {
            type: 'divider',
        },
        (<Space>
            <LogoutOutlined/>
            <span onClick={handelLogout}>退出登录</span>
        </Space>),

    ]);

    return (
        <Dropdown menu={{items}} placement='bottom'>
            <div className='ant-avatar-wrapper'>
                <Avatar size="large" src={<Image src={avatar} width={25}/>}/>
                <span className='ant-avatar-name'>{name}</span>
            </div>
        </Dropdown>
    );
}

export default CustomAvatar;