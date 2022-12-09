import {Table} from 'antd';
import TableToolBar from "@components/TableToolBar/index.jsx";
import columnsData from "./columns";
import menuMock from "@/mock/menuMock.js";
import {useEffect, useState} from "react";
import useAntDesign from "@/common/useAntDesign.js";
import Paginate from "@components/paginate/index.jsx";

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
    const [total, setTotal] = useState(500);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        setColumns(columnsData);


    }, [columnsData, current, pageSize])

    const {tablePaginate} = useAntDesign();

    return (
        <>
            <TableToolBar
                title='菜单管理'
                setSize={setTableSize}
                setBordered={setTableBorder}
                bordered={tableBorder}
                columns={columns}
                setColumns={setColumns}
            />
            <Table
                columns={columns}
                rowSelection={{
                    ...rowSelection,
                }}
                dataSource={menuMock}
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