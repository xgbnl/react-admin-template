import {useEffect, useState} from "react";
import {SettingFilled, CloseOutlined} from '@ant-design/icons';
import {Drawer} from "antd";
import DrawerContent from "./components/content/index.jsx";
import './index.scss';

const AntdDrawer = ({storeSetting}) => {
    const [open, setOpen] = useState(false);
    const [closable] = useState(false);
    const [drawerVisible] = useState(true);

    const [style, setStyle] = useState({});

    useEffect(() => {
        setStyle({transform: open ? 'unset' : 'translateX(100%)', width: '300px'})
    }, [open])

    const showDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer closable={closable} contentWrapperStyle={style} placement="right" mask={open} open={drawerVisible}>
            <div className='handel' onClick={showDrawer}>
                {open ? <CloseOutlined className='handel-icon'/> : <SettingFilled className='handel-icon'/>}
            </div>
            <DrawerContent storeSetting={storeSetting}/>
        </Drawer>
    );
}

export default AntdDrawer;