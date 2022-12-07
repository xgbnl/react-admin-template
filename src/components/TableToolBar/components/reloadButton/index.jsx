import {Tooltip} from "antd";
import {ReloadOutlined} from '@ant-design/icons';
import {useState} from "react";

const ReloadButton = ({onRefresh}) => {
    const [spin, setSpin] = useState(false);

    const onMouseEvent = () => {
        setSpin(!spin);
    }

    return (
        <Tooltip placement='top' title='刷新列表'>
            <div className='space-item'>
                <ReloadOutlined
                    className='antd-action-class'
                    spin={spin}
                    onMouseEnter={onMouseEvent}
                    onMouseLeave={onMouseEvent}
                    onClick={onRefresh}
                />
            </div>
        </Tooltip>
    );
}

export default ReloadButton;