import {useEffect, useState} from "react";
import {Table} from 'antd';
import TableToolBar from "@components/TableToolBar/index.jsx";
import useAntDesign from "@/common/useAntDesign.js";
import Paginate from "@components/paginate/index.jsx";
import {getMenus} from "@api/permission/menu/index.js";
import columnsData from "./columns.jsx";

// rowSelection objects indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};
const Menu = () => {

    const [tableSize, setTableSize] = useState('large');
    const [tableBorder, setTableBorder] = useState(false);
    const [columns, setColumns] = useState(columnsData);
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

    return (
        <>
            <TableToolBar
                title='菜单管理'
                setSize={setTableSize}
                setBordered={setTableBorder}
                bordered={tableBorder}
                columns={columns}
                setColumns={setColumns}
                onRefresh={onRefresh}
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