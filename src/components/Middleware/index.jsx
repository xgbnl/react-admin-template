import {useLocation} from "react-router-dom";
import {getUserAsync, selectUser} from "@/app/reducers/user/UserReducer.js";
import {useAppDispatch, useAppSelector} from "@/app/hooks.js";
import {Navigate} from "react-router-dom";
import Loading from "@components/Loading/index.jsx";

const Middleware = (NextComponent) => {
    return () => {

        const {token, name} = useAppSelector(selectUser);
        const {pathname} = useLocation();

        if (!token) {
            return (pathname === '/login') ? <NextComponent/> : <Navigate to='/login'/>;
        }

        // 如果token存在，而不存在name，那就去请求接口获取用户信息
        // 这步说明刚刚获取到token并且存入了redux，但是并没有去请求用户接口
        if (!name) {
            const dispatch = useAppDispatch();
            dispatch(getUserAsync());

            return <Loading/>;
        }

        // 如果已经登录的情况下，则重定向
        if (pathname === '/login' || pathname === '/') {
            return <Navigate to='/dashboard'/>;
        }

        return <NextComponent/>;
    }
}

export default Middleware;