import {Dropdown, Avatar, Image} from "antd";
import {useAppDispatch} from "@/app/hooks.js";
import {logoutAsync} from "@/app/reducers/user/UserReducer.js";

const CustomAvatar = ({avatar}) => {

    const dispatch = useAppDispatch();
    const handelLogout = () => {
        dispatch(logoutAsync())
    }

    const items = [
        {
            key: '1',
            label: (
                <a onClick={handelLogout}>退出登录</a>
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