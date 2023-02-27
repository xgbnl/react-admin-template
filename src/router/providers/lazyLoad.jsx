import {lazy, Suspense} from 'react';
import Loading          from '@components/Loading/index.jsx'

export const lazyLoad = (closure) => {
    const Component = lazy(closure);

    return (
        <Suspense fallback={<Loading/>}>
            <Component/>
        </Suspense>
    );
}