import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";
import {findSideBarRoutes} from "@/router/module/permission.jsx";
import {Link} from 'react-router-dom';
import {pathJoin} from "@utils/utils.js";
import './index.scss';
import {useState} from "react";

const BreadcrumbItem = Breadcrumb.Item;

// 创建面包屑maps
const createBreadcrumbMaps = () => {
    const breadcrumbMaps = {};
    const routes = findSideBarRoutes();

    const find = (routes, parentPath = null) => {
        for (const route of routes) {
            if (!route.hidden) {
                breadcrumbMaps[pathJoin(route.path, parentPath)] = {
                    label: route.meta?.title,
                };
            }
            if (route.children && route.children.length) {
                breadcrumbMaps[pathJoin(route.path, parentPath)].isParent = true;
                find(route.children, pathJoin(route.path, parentPath));
            }
        }
    }
    find(routes);
    return breadcrumbMaps;
}

const CustomBreadcrumb = () => {

    const location = useLocation();
    const {pathname} = location;

    const [breadcrumbMaps] = useState(createBreadcrumbMaps());

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
            <Link to='/'>首页</Link>
        </BreadcrumbItem>
    ].concat(extraBreadcrumbItems)

    return (
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    );
}

export default CustomBreadcrumb;