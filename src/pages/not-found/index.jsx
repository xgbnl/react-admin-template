import {Result,Button} from "antd";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const onClick = () => {
      navigate('/');
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉，您访问的页面不存在"
            extra={<Button type="primary" onClick={onClick}>返回首页</Button>}
        />
    );
}

export default NotFound;