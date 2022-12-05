import {Table} from 'antd';
import TableSpace from "@components/TableToolBar/index.jsx";
import columns from "./columns";
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
    const [tableBorder,setTableBorder] = useState(false);

    return (
        <>
            <TableSpace setTableSize={setTableSize} setTableBorder={setTableBorder} tableBorder={tableBorder}/>
            <Table
                columns={columns}
                rowSelection={{
                    ...rowSelection,
                }}
                dataSource={menuMock}
                size={tableSize}
                bordered={tableBorder}
            />
        </>
    );
};
export default Menu;