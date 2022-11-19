import {lazy,Suspense} from "react";
import {Spin} from 'antd';

const lazyLoad = (moduleName) => {
    const Module = lazy(() => import(moduleName));

    return (
        <Suspense fallback={<Spin tip="Loading..." />}>
            <Module/>
        </Suspense>
    )
}

export default lazyLoad;