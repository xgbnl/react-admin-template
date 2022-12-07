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

    const [dropdownStyles, setDropdownStyles] = useState(cloneDeep(createStyles(columns)));

    useEffect(() => {
        setReadColumns(readColumns);
    }, [columns])

    const onMouseEvent = () => {
        setSpin(!spin);
        setColor(color.length ? '' : '#167fff');
    }

    const handelColumnFixed = (key, fixed) => {
        let cloneColumns = cloneDeep(readColumns);

        const column = cloneColumns.find(column => column.dataIndex === key);

        Object.assign(column, {fixed});

        const index = getArrayElementIndex(cloneColumns, 'dataIndex', key);
        cloneColumns = pushToShift(cloneColumns, index);

        setColumns(cloneColumns);
    }

    const handelDropdownMouse = (index) => {
        const clone = cloneDeep(dropdownStyles);
        const value = clone[index].visibility;

        console.log('current')
        console.log(index)
        console.log('current value')
        console.log(value)
        clone[index].visibility = value === 'visible' ? 'hidden' : 'visible';

        console.log('change')
        console.log(clone)


        // console.log('before')
        // console.log(dropdownStyles);
        // console.log('after');
        // console.log(clone)

        setDropdownStyles(clone);
    }

    // render dropdown items.
    const renderComponent = (column) => {
        const make = (title, column, fixed, Icon,key) => {
            return (<Tooltip placement="bottom" title={title} key={key}>
                <Icon
                    onClick={() => handelColumnFixed(column.dataIndex, fixed)}
                    style={dropdownStyles[column.dataIndex]}
                />
            </Tooltip>)
        }

        const fixedStatus = {
            cancelFixed: {title: '取消固定', column: column, fixed: 'left', icon: VerticalAlignMiddleOutlined},
            leftFixed: {title: '固定在列首', column: column, fixed: 'left', icon: VerticalAlignTopOutlined},
            rightFixed: {title: '固定在列尾', column: column, fixed: 'right', icon: VerticalAlignBottomOutlined},
        };

        const factory = (fixedStatus) => {
            return fixedStatus.map((item,index) => make(item.title, item.column, item.fixed, item.icon,index));
        }

        if (!column.fixed) {
            return factory([fixedStatus.leftFixed, fixedStatus.rightFixed]);
        }

        return column.fixed === 'left'
            ? factory([fixedStatus.cancelFixed, fixedStatus.rightFixed])
            : factory([fixedStatus.leftFixed, fixedStatus.cancelFixed]);
    }

    const dropdowns = columns.map((column) => (
        <Space
            onMouseEnter={() => handelDropdownMouse(column.dataIndex)}
            onMouseLeave={() => handelDropdownMouse(column.dataIndex)}
        >
            <span>{column.title}</span>
            {renderComponent(column)}
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