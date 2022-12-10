import {Button} from "antd";
import {PlusOutlined} from '@ant-design/icons';

const CreateButton = ({onClick}) => {
    return <Button type='primary' size='default' icon={<PlusOutlined/>} onClick={onClick}>新建</Button>;
}

export default CreateButton;

