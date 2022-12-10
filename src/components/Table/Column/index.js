import {cloneDeep} from "lodash/lang.js";
import TablePermissionButton from "../PermissionButton/index.jsx";

/**
 * 创建表格头
 * 自动为表头添加操作列
 * @param columns 表头数据
 * @param bindEdit 编辑行方法
 * @param bindDelete 删除行方法
 * @param bindDetail 查看行详情方法
 * @param delAuthKey 删除按钮权限值
 * @param editAuthKey 编辑按钮权限值
 * @param detailAuthKey 详情按钮权限值
 */
export function createColumns({columns, bindEdit, bindDelete, bindDetail, delAuthKey, editAuthKey, detailAuthKey}) {
    const cloneColumns = cloneDeep(columns);
    cloneColumns.push({
        title: '操作',
        dataIndex: 'action',
        align: 'center',
        width: '12%',
        render: (_, column) => TablePermissionButton({
            editAuthKey,
            detailAuthKey,
            delAuthKey,
            onDetail: bindDetail,
            onEdit: bindEdit,
            onDelete: bindDelete,
            column,
        }),
    });

    return cloneColumns;
}