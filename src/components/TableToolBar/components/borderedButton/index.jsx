import {Tooltip} from "antd";
import {TableOutlined} from '@ant-design/icons';

const BorderedButton = ({bordered, setBordered}) => {
    return (
        <Tooltip placement='top' title='表格边框'>
            <div className='space-item'>
                <TableOutlined
                    className='antd-action-class'
                    onClick={() => setBordered(!bordered)}
                />
            </div>
        </Tooltip>
    );
}

export default BorderedButton;