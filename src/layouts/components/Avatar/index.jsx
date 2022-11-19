import { Dropdown,Avatar,Image } from "antd";

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          退出登录
        </a>
      ),
    },
  ];

const CustomAvatar = ({avatar}) => {
    return (
        <Dropdown menu={{items}} placement='bottom'>
            <Avatar size="large" src={<Image src={avatar} style={{ width: 32 }} />} />
        </Dropdown>
    );
}

export default CustomAvatar;