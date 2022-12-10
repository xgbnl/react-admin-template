import {Dropdown, Tooltip} from "antd";
import {ColumnHeightOutlined} from '@ant-design/icons';
import {createDropdownItems} from "@utils/utils.js";

const DensityButton = ({setSize}) => {

    const dropdownItems = createDropdownItems([
        (<span onClick={() => setSize('large')}>默认</span>),
        (<span onClick={() => setSize('middle')}>中等</span>),
        (<span onClick={() => setSize('small')}>紧密</span>),
    ]);

    return (
        <Tooltip placement="top" title='表格密度'>
            <Dropdown menu={{items: dropdownItems}} placement="bottom" trigger='click'>
                <ColumnHeightOutlined className='antd-action-class'/>
            </Dropdown>
        </Tooltip>
    );
}

export default DensityButton;