import {Suspense} from "react";
import {Spin} from 'antd';

const load = (Module) => {

    return (
        <Suspense fallback={<Spin tip="Loading..." />}>
            <Module/>
        </Suspense>
    )
}

export default load;