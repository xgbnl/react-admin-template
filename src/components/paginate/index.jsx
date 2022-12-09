import {Pagination} from "antd";
import {useState} from "react";
import './index.scss';

const Paginate = ({total, pageSize,setPageSize,current,setCurrent}) => {

    const [defaultCurrent] = useState(1);
    const [defaultPageSize] = useState(10);

    const onChange = (e) => {
        setCurrent(e)
    }

    const onShowSizeChange = (current,pageSize) => {
        setPageSize(pageSize);
    }

    return (
       <div className='antd-pagination-container'>
           <Pagination
               defaultCurrent={defaultCurrent}
               defaultPageSize={defaultPageSize}
               current={current}
               total={total}
               onChange={onChange}
               pageSize={pageSize}
               onShowSizeChange={onShowSizeChange}
           />
       </div>
    );
}

export default Paginate;