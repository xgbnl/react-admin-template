import React from "react";
import {lazy} from "react";
import {getToken} from "@utils/auth.js";
import {Navigate} from "react-router-dom";

/**
 * 懒加载组件
 * @param module
 * @param custom
 * @returns {JSX.Element}
 */
export const lazyLoad = (module,custom = false) => {
    const Module = lazy(() => import(!custom ? `@pages/${module}` : module));
    return <Module/>;
}

/**
 * 鉴权
 * @param children
 * @returns {*|JSX.Element}
 * @constructor
 */
export const Appraisal = ({children}) => {
    return getToken() ? children : <Navigate to="/login"/>;
}