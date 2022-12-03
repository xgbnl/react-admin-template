import {Dropdown, Avatar, Image, Space} from "antd";
import {useAppDispatch} from "@/app/hooks.js";
import {logoutAsync} from "@/app/reducers/user/UserReducer.js";
import {UserOutlined,SettingOutlined,LogoutOutlined } from '@ant-design/icons'

const CustomAvatar = ({avatar}) => {

    const dispatch = useAppDispatch();
    const handelLogout = () => {
        dispatch(logoutAsync())
    }

    const items = [
        {
            key: '0',
            label: (
                <Space>
                    <UserOutlined/>
                    <span>个人中心</span>
                </Space>
            ),
        },
        {
            key: '1',
            label: (
                <Space>
                    <SettingOutlined />
                    <span>个人设置</span>
                </Space>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: (
                <Space>
                    <LogoutOutlined />
                    <span onClick={handelLogout}>退出登录</span>
                </Space>
            ),
        },
    ];

    return (
        <Dropdown menu={{items}} placement='bottom'>
            <Avatar size="large" src={<Image src={avatar} style={{width: 32}}/>}/>
        </Dropdown>
    );
}

export default CustomAvatar;