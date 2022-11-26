import {Button, Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import useAntDesign from '@/common/useAntDesign';
import background from '@assets/images/login.svg';
import './index.scss';
import settings from '@/settings';
import {loginAsync} from "@/app/reducers/user/UserReducer.js";
import {useAppDispatch} from "@/app/hooks.js";

const Login = () => {

    const dispatch = useAppDispatch();

    const {antdMessage} = useAntDesign();

    const onFinish = async (values) => {
        const action = await dispatch(loginAsync(values))

        if (action.type === 'user/loginAsync/fulfilled') {
            antdMessage('登录成功');
        }
    };

    const {rules} = useAntDesign();

    return (
        <div className='login-container'>
            <div className='image-wrap'>
                <img src={background} alt=""/>
            </div>
            <Form
                name="basic"
                labelCol={{span: 8,}}
                wrapperCol={{span: 16,}}
                onFinish={onFinish}
                autoComplete="off"
                size='large'
            >

                <div className='title-wrap'><h3 className='title'>{settings.title}</h3></div>
                <Form.Item name="name" rules={[rules.required('用户名')]}>
                    <Input prefix={<UserOutlined/>} placeholder='请输入用户名'/>
                </Form.Item>

                <Form.Item name="password" rules={[rules.required('密码')]}>
                    <Input.Password prefix={<LockOutlined/>} placeholder='请输入密码'/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16,}}>
                    <Button type="primary" htmlType="submit" size='default' block>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;