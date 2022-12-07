import {FloatButton,Drawer} from "antd";
import {SettingFilled} from '@ant-design/icons';
import {useState} from "react";

const FloatButtonGroup = FloatButton.Group;
const CustomFloatButton = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = (val) => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <FloatButtonGroup
            trigger='click' onOpenChange={showDrawer}
            open={open}
            icon={<SettingFilled/>}
            shape='square' style={{top: '50%'}}>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </FloatButtonGroup>
    );
}

export default CustomFloatButton;