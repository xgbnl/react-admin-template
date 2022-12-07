import {Tooltip} from "antd";
import {ReloadOutlined} from '@ant-design/icons';
import {useState} from "react";

const ReloadButton = ({onRefresh}) => {
    const [spin, setSpin] = useState(false);
    const [color, setColor] = useState('');

    const onMouseEvent = () => {
        setSpin(!spin);
        setColor(color.length ? '' : '#167fff');
    }

    return (
        <Tooltip placement='top' title='刷新列表'>
            <div className='space-item'>
                <ReloadOutlined
                    spin={spin}
                    onMouseEnter={onMouseEvent}
                    onMouseLeave={onMouseEvent}
                    style={{color}}
                    onClick={onRefresh}
                />
            </div>
        </Tooltip>
    );
}

export default ReloadButton;