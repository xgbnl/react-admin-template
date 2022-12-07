import {Dropdown,Tooltip} from "antd";
import {ColumnHeightOutlined} from '@ant-design/icons';
import {useState} from "react";
import {createDropdownItems} from "@utils/utils.js";

const DensityButton = ({setSize}) => {
    const [color, setColor] = useState('');

    const onMouseEvent = () => {
        setColor(color.length ? '' : '#167fff');
    }

    const dropdownItems = createDropdownItems([
        (<span onClick={() => setSize('large')}>默认</span>),
        (<span onClick={() => setSize('middle')}>中等</span>),
        (<span onClick={() => setSize('small')}>紧密</span>),
    ]);

    return (
        <Tooltip placement="top" title='表格密度'>
        <Dropdown menu={{items: dropdownItems}} placement="bottom">
            <ColumnHeightOutlined
                style={{color}}
                onMouseEnter={onMouseEvent}
                onMouseLeave={onMouseEvent}/>
        </Dropdown>
        </Tooltip>
    );
}

export default DensityButton;