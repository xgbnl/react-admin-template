import {Dropdown, Tooltip, Space} from "antd";
import {
    SettingOutlined,
    VerticalAlignTopOutlined,
    VerticalAlignMiddleOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import {createDropdownItems, getArrayElementIndex, pushToShift} from "@utils/utils.js";
import {useEffect, useState} from "react";
import {cloneDeep} from "lodash/lang.js";

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
    const [readColumns, setReadColumns] = useState(columns);

    const [dropdownStyles, setDropdownStyles] = useState(createStyles(columns));

    const onMouseEvent = () => {
        setSpin(!spin);
        setColor(color.length ? '' : '#167fff');
    }

    useEffect(() => {
        setReadColumns(readColumns);
    }, [columns])

    const handelColumnFixed = (key, fixed) => {
        let cloneColumns = cloneDeep(readColumns);

        const column = cloneColumns.find(column => column.dataIndex === key);

        Object.assign(column, {fixed});

        const index = getArrayElementIndex(cloneColumns, 'dataIndex', key);
        cloneColumns = pushToShift(cloneColumns, index);

        setColumns(cloneColumns);
    }

    const handelDropdownMouse = (index) => {
        const clone = JSON.parse(JSON.stringify(dropdownStyles));
        const value = clone[index].visibility;
        clone[index].visibility = value === 'visible' ? 'hidden' : 'visible';
        setDropdownStyles(clone);
    }

    const createComponent = (title, column, fixed,Component) => {
        return (<Tooltip placement="bottom" title={title}>
            <Component
                onClick={() => handelColumnFixed(column.dataIndex, fixed)}
                style={dropdownStyles[column.dataIndex]}
            />
        </Tooltip>)
    }

    const render = (column) => {

        if (column.fixed) {
            if (column.fixed === 'left') {
                return[
                    createComponent('取消固定',column,'left',VerticalAlignMiddleOutlined),
                    createComponent('固定在列尾',column,'right',VerticalAlignTopOutlined)
                ];
            }

            return[
                createComponent('固定在列首',column,'left',VerticalAlignMiddleOutlined),
                createComponent('取消固定',column,'right',VerticalAlignMiddleOutlined)
            ];
        }

         return [
             createComponent('固定在列首',column,'left',VerticalAlignTopOutlined),
             createComponent('固定在列尾',column,'right',VerticalAlignTopOutlined)
         ];
    }

    const dropdowns = columns.map(column => (
        <Space
            onMouseEnter={() => handelDropdownMouse(column.dataIndex)}
            onMouseLeave={() => handelDropdownMouse(column.dataIndex)}
        >
            <span>{column.title}</span>
            {render(column)}
        </Space>
    ));

    const resetColumns = () => {
        setColumns(readColumns);
    }

    dropdowns.unshift(...[
        (<Space>
            <span>列设置</span>
            <a onClick={resetColumns}>重置</a>
        </Space>),
        {type: 'divider'},
    ]);

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