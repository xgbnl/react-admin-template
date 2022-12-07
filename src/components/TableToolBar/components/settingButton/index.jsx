import {Dropdown, Tooltip, Space} from "antd";
import {
    SettingOutlined,
    VerticalAlignTopOutlined,
    VerticalAlignMiddleOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import {createDropdownItems} from "@utils/utils.js";
import {useEffect, useState} from "react";
import {cloneDeep} from "lodash/lang.js";
import './index.scss';

const getArrayElementIndex = (haystack, property, needle) => {
    return haystack.indexOf(haystack.filter(item => item[property] === needle)[0])
}

const customUnShift = (haystack, index) => {
    haystack.unshift(haystack.splice(index, 1)[0]);
    return haystack;
}

const customPush = (haystack, index) => {
    haystack.push(haystack.splice(index, 1)[0]);
    return haystack;
}

const SettingButton = ({columns, setColumns}) => {

    const [spin, setSpin] = useState(false);
    const [readColumns, setReadColumns] = useState(columns);

    useEffect(() => {
        setReadColumns(readColumns);
    }, [columns])

    const setIconSpin = () => {
        setSpin(!spin);
    }

    const resetColumns = () => {
        setColumns(readColumns);
    }

    const handelColumnFixed = (key, fixed) => {

        if (fixed === 'unset') {
            resetColumns();
            return false;
        }

        let cloneColumns = cloneDeep(readColumns);

        const column = cloneColumns.find(column => column.dataIndex === key);
        Object.assign(column, {fixed});

        const index = getArrayElementIndex(cloneColumns, 'dataIndex', key);

        cloneColumns = fixed === 'left' ? customUnShift(cloneColumns, index) : customPush(cloneColumns, index);
        setColumns(cloneColumns);
    }

    // render dropdown items.
    const renderComponent = (column) => {
        const make = (title, column, fixed, Icon, key) => {
            return (<Tooltip placement="bottom" title={title} key={key}>
                <Icon className='antd-icon-class' onClick={() => handelColumnFixed(column.dataIndex, fixed)}/>
            </Tooltip>)
        }

        const fixedStatus = {
            cancelFixed: {title: '取消固定', column: column, fixed: 'unset', icon: VerticalAlignMiddleOutlined},
            leftFixed: {title: '固定在列首', column: column, fixed: 'left', icon: VerticalAlignTopOutlined},
            rightFixed: {title: '固定在列尾', column: column, fixed: 'right', icon: VerticalAlignBottomOutlined},
        };

        const factory = (fixedStatus) => {
            return fixedStatus.map((item, index) => make(item.title, item.column, item.fixed, item.icon, index));
        }

        if (!column.fixed) {
            return factory([fixedStatus.leftFixed, fixedStatus.rightFixed]);
        }

        return column.fixed === 'left'
            ? factory([fixedStatus.cancelFixed, fixedStatus.rightFixed])
            : factory([fixedStatus.leftFixed, fixedStatus.cancelFixed]);
    }

    const dropdowns = columns.map((column) => (
        <Space className='antd-space-class'>
            <span>{column.title}</span>
            {renderComponent(column)}
        </Space>
    ));

    dropdowns.unshift(...[
        (<Space>
            <span>列设置</span>
            <a onClick={resetColumns}>重置</a>
        </Space>),
        {type: 'divider'},
    ]);

    return (
        <Tooltip placement="top" title='列设置'>
            <div className='space-item'>
                <Dropdown menu={{items: createDropdownItems(dropdowns)}} placement="bottom" trigger='click'>
                    <SettingOutlined className='antd-action-class' spin={spin}
                                     onMouseEnter={setIconSpin}
                                     onMouseLeave={setIconSpin}/>
                </Dropdown>
            </div>
        </Tooltip>
    );
}
export default SettingButton;