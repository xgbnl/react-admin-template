import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom';
import './index.scss';
import {useState} from "react";
import useCommon from "@/common/useCommon.js";

const BreadcrumbItem = Breadcrumb.Item;

const CustomBreadcrumb = ({routes}) => {

    const location = useLocation();
    const {pathname} = location;

    const {createMaps} = useCommon();

    const [breadcrumbMaps] = useState(createMaps(routes));

    const pathSnippets = pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <BreadcrumbItem key={url}>
                {
                    breadcrumbMaps[url].isParent
                        ? <span>{breadcrumbMaps[url].label}</span>
                        : <Link to={url}>{breadcrumbMaps[url].label}</Link>
                }
            </BreadcrumbItem>
        );
    })

    const breadcrumbItems = [
        <BreadcrumbItem key='home'>
            <Link to='/dashboard'>首页</Link>
        </BreadcrumbItem>
    ].concat(extraBreadcrumbItems)

    return (
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    );
}

export default CustomBreadcrumb;