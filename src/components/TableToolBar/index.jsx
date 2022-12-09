import {Space} from "antd";
import CreateButton from "./components/createButton/index.jsx";
import ReloadButton from "./components/reloadButton/index.jsx";
import DensityButton from "./components/densityButton/index.jsx";
import SettingButton from "./components/settingButton/index.jsx";
import BorderedButton from "./components/borderedButton/index.jsx";
import './index.scss'

const TableToolBar = ({
                          title = '编辑表格',
                          space = 15,
                          onRefresh,
                          setSize,
                          bordered,
                          setBordered,
                          columns,
                          setColumns,
                      }) => {

    return (
        <div className='ant-table-toolbar'>
            <div className='ant-table-toolbar-container'>
                <div className='ant-table-toolbar-left'>
                    <div className='ant-table-toolbar-left-item'>{title}</div>
                </div>
                <div className='ant-table-toolbar-right'>
                    <Space size={space}>
                        <CreateButton/>
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