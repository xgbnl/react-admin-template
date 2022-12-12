import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom';
import useCommon from "@/common/useCommon.js";
import './index.scss';

const BreadcrumbItem = Breadcrumb.Item;

const CustomBreadcrumb = ({routes}) => {

    const location = useLocation();
    const {pathname} = location;

    const {filterPath} = useCommon();

    const pathSnippets = pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

        const breadcrumb = filterPath(routes, url);

        return (<BreadcrumbItem key={url}>
                {breadcrumb.isParent ? <span>{breadcrumb.label}</span> : <Link to={url}>{breadcrumb.label}</Link>}
            </BreadcrumbItem>);
    })

    const breadcrumbItems = [<BreadcrumbItem key='home'>
        <Link to='/dashboard'>首页</Link>
    </BreadcrumbItem>].concat(extraBreadcrumbItems)

    return (<Breadcrumb>{breadcrumbItems}</Breadcrumb>);
}

export default CustomBreadcrumb;