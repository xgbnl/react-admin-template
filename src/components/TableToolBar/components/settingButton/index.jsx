import {Dropdown, Tooltip, Space} from "antd";
import {
    SettingOutlined,
    VerticalAlignTopOutlined,
    VerticalAlignMiddleOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import {createDropdownItems} from "@utils/utils.js";
import {useEffect, useState} from "react";

const createStyles = (columns) => {
    const dropdownStyles = {};
    for (const column of columns) {
        dropdownStyles[column.dataIndex] = {visibility: 'hidden', color: '#167fff'};
    }
    return dropdownStyles;
}

const SettingButton = ({columns, setColumns}) => {

    const [spin, setSpin] = useState(false);
    const [color, setColor] = useState('');
    const [bakColumns, setBakColumns] = useState(columns);

    const [dropdownStyles, setDropdownStyles] = useState(createStyles(columns));

    const onMouseEvent = () => {
        setSpin(!spin);
        setColor(color.length ? '' : '#167fff');
    }

    useEffect(() => {
        setBakColumns(bakColumns);
    }, [columns])


    const dropdownClick = (key) => {
        console.log(key)
    }

    const handelDropdownMouse = (index) => {
        const clone = JSON.parse(JSON.stringify(dropdownStyles));
        const value = clone[index].visibility;

        clone[index].visibility = value === 'visible' ? 'hidden' : 'visible';
        setDropdownStyles(clone);
    }

    const dropdowns = columns.map(column => (
        <Space
            onMouseEnter={() => handelDropdownMouse(column.dataIndex)}
            onMouseLeave={() => handelDropdownMouse(column.dataIndex)}
        >
                <span
                    onClick={() => dropdownClick(column.dataIndex)}

                >{column.title}</span>
            <VerticalAlignTopOutlined style={dropdownStyles[column.dataIndex]}/>
            <VerticalAlignBottomOutlined style={dropdownStyles[column.dataIndex]}/>
        </Space>
    ));

    const dropdownItems = createDropdownItems(dropdowns);

    return (
        <Tooltip placement="top" title='列设置'>
            <div className='space-item'>
                <Dropdown menu={{items: dropdownItems}} placement="bottom">
                    <SettingOutlined spin={spin} style={{color}}
                                     onMouseEnter={onMouseEvent}
                                     onMouseLeave={onMouseEvent}/>
                </Dropdown>
            </div>
        </Tooltip>
    );
}
export default SettingButton;