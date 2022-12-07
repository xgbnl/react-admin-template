import {Tooltip} from "antd";
import {TableOutlined} from '@ant-design/icons';
import {useState} from "react";

const BorderedButton = ({bordered, setBordered}) => {
    const [color, setColor] = useState('');

    const onMouseEvent = () => {
        setColor(color.length ? '' : '#167fff');
    }

    return (
        <Tooltip placement='top' title='表格边框'>
            <div className='space-item'>
                <TableOutlined
                    onMouseEnter={onMouseEvent}
                    onMouseLeave={onMouseEvent}
                    onClick={() => setBordered(!bordered)}
                    style={{color}}
                />
            </div>
        </Tooltip>
    );
}

export default BorderedButton;