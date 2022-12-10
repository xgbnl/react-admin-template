import {Tag} from 'antd';
import {createIcon} from "@utils/utils.js";
import {DollarCircleTwoTone} from '@ant-design/icons';

export default [
    {
        title: '菜单名称',
        dataIndex: 'title',
        align: 'center',
        width: '13%',
    },
    {
        title: '路径',
        dataIndex: 'path',
        align: 'center',
        width: '20%',
    },
    {
        title: '挂载元素',
        dataIndex: 'element',
        align: 'center',
        width: '12%',
    },
    {
        title: '权限值',
        dataIndex: 'name',
        align: 'center',
        width: '12%',

    },
    {
        title: '可见性',
        dataIndex: 'visible',
        align: 'center',
        width: '12%',
        render: (_, {visible}) => {
            return <Tag color={visible === '可见' ? 'success' : 'default'}>{visible}</Tag>
        }
    },
    {
        title: '图标',
        dataIndex: 'icon',
        align: 'center',
        width: '12%',
        render: (_, {icon}) => <DollarCircleTwoTone/>,
    },
    {
        title: '操作',
        dataIndex: 'action',
        align: 'center',
        width: '12%',
    },
];