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
import './index.scss';

const SettingButton = ({columns, setColumns}) => {

    const [spin, setSpin] = useState(false);
    const [readColumns, setReadColumns] = useState(columns);

    useEffect(() => {
        setReadColumns(readColumns);
    }, [columns])

    const setSettingIcon = () => {
        setSpin(!spin);
    }

    const handelColumnFixed = (key, fixed) => {
        let cloneColumns = cloneDeep(readColumns);

        const column = cloneColumns.find(column => column.dataIndex === key);

        Object.assign(column, {fixed});

        const index = getArrayElementIndex(cloneColumns, 'dataIndex', key);
        cloneColumns = pushToShift(cloneColumns, index);

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
            cancelFixed: {title: '取消固定', column: column, fixed: 'left', icon: VerticalAlignMiddleOutlined},
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

    return (
        <Tooltip placement="top" title='列设置'>
            <div className='space-item'>
                <Dropdown menu={{items: createDropdownItems(dropdowns)}} placement="bottom">
                    <SettingOutlined className='antd-action-class' spin={spin}
                                     onMouseEnter={setSettingIcon}
                                     onMouseLeave={setSettingIcon}/>
                </Dropdown>
            </div>
        </Tooltip>
    );
}
export default SettingButton;