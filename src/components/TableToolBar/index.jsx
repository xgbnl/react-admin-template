import {Space} from "antd";
import CreateButton from "./components/CreateButton/index.jsx";
import ReloadButton from "./components/ReloadButton/index.jsx";
import DensityButton from "./components/DensityButton/index.jsx";
import SettingButton from "./components/SettingButton/index.jsx";
import BorderedButton from "./components/BorderedButton/index.jsx";
import DeleteButton from "./components/DeleteButton/index.jsx";
import Permission from "@components/Permission/index.jsx";
import './index.scss'

const TableToolBar = ({
                          space = 15,
                          onRefresh,
                          setSize,
                          bordered,
                          setBordered,
                          columns,
                          setColumns,
                          onCreate,
                          onBatchDelete,
                          createPermission,
                          deletePermission,
                          selectRows,
                          selectAll,
                      }) => {

    return (
        <div className='ant-table-toolbar'>
            <div className='ant-table-toolbar-container'>
                <div className='ant-table-toolbar-left'>
                    <div className='ant-table-toolbar-left-item'>
                        <Permission permission={deletePermission}>
                            <DeleteButton selectAll={selectAll} selectRows={selectRows} onBatchDelete={onBatchDelete}/>
                        </Permission>
                    </div>
                </div>
                <div className='ant-table-toolbar-right'>
                    <Space size={space}>
                        <Permission permission={createPermission}>
                            <CreateButton onClick={onCreate}/>
                        </Permission>
                        <ReloadButton onRefresh={onRefresh}/>
                        <DensityButton setSize={setSize}/>
                        <BorderedButton bordered={bordered} setBordered={setBordered}/>
                        <SettingButton columns={columns} setColumns={setColumns}/>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default TableToolBar;