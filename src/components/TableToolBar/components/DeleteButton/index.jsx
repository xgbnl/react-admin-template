import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";

const DeleteButton = ({selectRows, selectAll, onBatchDelete}) => {
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (selectRows === 0) {
            setDisabled(true);
        }

        if (selectAll || selectRows > 0) {
            setDisabled(false);
        }
    }, [selectRows,selectAll])

    return (
        <Button children='批量删除' icon={<DeleteOutlined/>} disabled={disabled} onClick={onBatchDelete} />
    );
}

export default DeleteButton;