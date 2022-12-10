import {useEffect, useState} from "react";
import {Table} from 'antd';
import TableToolBar from "@components/TableToolBar/index.jsx";
import useAntDesign from "@/common/useAntDesign.js";
import Paginate from "@components/Paginate/index.jsx";
import {getMenus} from "@api/permission/menu/index.js";
import columnsData from "./columns.jsx";

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

    // table tool bar
    const [tableSize, setTableSize] = useState('large');
    const [tableBorder, setTableBorder] = useState(false);
    const [columns, setColumns] = useState(columnsData);

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
        setColumns(columnsData);
        getMenuList();
    }, [columnsData, current, pageSize])

    const {tablePaginate} = useAntDesign();

    const onRefresh = () => {
        getMenuList();
    }

    const onCreate = () => {

    }

    const onBatchDelete = () => {
        console.log(rowData)
    }

    return (
        <>
            <TableToolBar
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