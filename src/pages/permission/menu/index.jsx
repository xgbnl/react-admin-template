import {useEffect, useState} from "react";
import {Table} from 'antd';
import ToolBar from "@components/Table/ToolBar/index.jsx";
import useAntDesign from "@/common/useAntDesign.js";
import Paginate from "@components/Paginate/index.jsx";
import {getMenus} from "@api/permission/menu/index.js";
import columnsData from "./columns.jsx";
import {createColumns} from "@components/Table/Column/index.js";
import {useNavigate, useLocation} from "react-router-dom";

const Menu = () => {
    const [selectRows, setSelectRows] = useState(0);
    const [selectAll, setSelectAll] = useState(false);

    const [rowData, setRowData] = useState([]);

    const rowSelection = {
        onSelect: (record, selected, selectedRows) => {
            setSelectRows(selectedRows.length);
            setRowData(selectedRows);
        },
        onSelectAll: (selected, selectedRows) => {
            setSelectAll(selected);
            setRowData(selectedRows)
        },
    };

    const onEdit = (column) => {
        console.log(column)
    }

    const onDelete = (column) => {
        console.log(column)
    }

    const tableColumns = createColumns({
        columns: columnsData,
        delAuthKey: 'permission.menu.delete',
        editAuthKey: 'permission.menu.edit',
        bindDelete: onDelete,
        bindEdit: onEdit,
    })

    // table toolBar
    const [tableSize, setTableSize] = useState('large');
    const [tableBorder, setTableBorder] = useState(false);
    const [columns, setColumns] = useState(tableColumns);

    // request
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [dataSource, setDataSource] = useState([]);

    const getMenuList = () => {
        getMenus().then(res => {
            const {response} = res;
            setDataSource(response.data.list);
            setTotal(response.total);
            setCurrent(response.pageNum);
            setPageSize(response.pageSize);
        })
    }

    useEffect(() => {
        setColumns(tableColumns);
        getMenuList();
    }, [columnsData, current, pageSize])

    const {tablePaginate, antdModal, antdMessage} = useAntDesign();

    const onRefresh = () => {
        getMenuList();
    }

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const onCreate = () => {
        navigate(`${pathname}/create`);
    }

    const onBatchDelete = () => {

        if (!rowData.length) {
            antdMessage('请选择要删除的数据', 'error');
            return false;
        }

        antdModal('xxx', () => {
            console.log('我被执行了')
        })
    }

    return (
        <>
            <ToolBar
                setSize={setTableSize}
                setBordered={setTableBorder}
                bordered={tableBorder}
                columns={columns}
                setColumns={setColumns}
                onRefresh={onRefresh}
                onCreate={onCreate}
                createPermission='permission.menu.create'
                deletePermission='permission.menu.delete'
                selectRows={selectRows}
                selectAll={selectAll}
                onBatchDelete={onBatchDelete}
            />
            <Table
                columns={columns}
                rowSelection={{
                    ...rowSelection,
                }}
                dataSource={dataSource}
                size={tableSize}
                scroll={{x: 1300}}
                bordered={tableBorder}
                pagination={tablePaginate}
            />
            <Paginate
                current={current}
                setCurrent={setCurrent}
                total={total}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
        </>
    );
};
export default Menu;