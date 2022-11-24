import { Button, Form, Input} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAntDesign } from '@/common/useAntDesign';
import background from '@assets/images/login.svg';
import './index.scss';
import settings from '@/settings';
import { useNavigate } from 'react-router-dom';
import { setToken } from '@/utils/auth';

const Login = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        // 提交用户名至后台
        // 重定向

        setToken('xxxx');
        navigate('/');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const { rules } = useAntDesign();

    return (
        <div className='login-container'>
            <div className='image-wrap'>
                <img src={background} alt="" />
            </div>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 16, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    size='large'
                >

                <div className='title-wrap'><h3 className='title' >{settings.title}</h3></div>
                    <Form.Item name="username" rules={[rules.required('用户名')]}>
                        <Input prefix={<UserOutlined />} placeholder='请输入用户名' />
                    </Form.Item>

                    <Form.Item name="password" rules={[rules.required('密码')]}>
                        <Input.Password prefix={<LockOutlined />} placeholder='请输入密码' />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                        <Button type="primary" htmlType="submit" size='default' block>
                            提交
                        </Button>
                    </Form.Item>
                </Form>
        </div>
    );
};
export default Login;