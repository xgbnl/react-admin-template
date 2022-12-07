import {Table} from 'antd';
import TableSpace from "@components/TableToolBar/index.jsx";
import columnsData from "./columns";
import menuMock from "@/mock/menuMock.js";
import {useEffect, useRef, useState} from "react";
import {set} from "lodash/object.js";

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

    useEffect(() => {
        setColumns(columnsData);
    }, [columnsData])

    return (
        <>
            <TableSpace
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
                scroll={{ x: 1300 }}
                bordered={tableBorder}
            />
        </>
    );
};
export default Menu;