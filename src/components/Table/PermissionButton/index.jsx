import {Button, Space} from 'antd';
import {EditOutlined, DeleteOutlined, EyeOutlined} from '@ant-design/icons';
import Permission from "@components/Permission/index.jsx";

const PermissionButton = ({
                                   type = 'link',
                                   editAuthKey,
                                   delAuthKey,
                                   detailAuthKey,
                                   onDetail,
                                   onEdit,
                                   onDelete,
                                   column
                               }) => {

    return type === 'link'
        ? (<Space size={"small"}>
            <Permission permission={editAuthKey}>
                <Button type='link' icon={<EditOutlined/>} onClick={() => onEdit(column)}>编辑</Button>
            </Permission>
            <Permission permission={detailAuthKey}>
                <Button icon={<EyeOutlined/>} type='link' onClick={() => onDetail(column)}>详情</Button>
            </Permission>
            <Permission permission={delAuthKey}>
                <Button icon={<DeleteOutlined/>} type='link' onClick={() => onDelete(column)} danger>删除</Button>
            </Permission>
        </Space>)
        : (<Space size={"small"}>
            <Permission permission={editAuthKey}>
                <Button type='primary' icon={<EditOutlined/>} onClick={() => onEdit(column)}>编辑</Button>
            </Permission>
            <Permission permission={detailAuthKey}>
                <Button type='primary' icon={<EyeOutlined/>} onClick={() => onDetail(column)}>详情</Button>
            </Permission>
            <Permission permission={delAuthKey}>
                <Button type='dashed' icon={<DeleteOutlined/>} onClick={() => onDelete(column)} danger>删除</Button>
            </Permission>
        </Space>)
}

export default PermissionButton;