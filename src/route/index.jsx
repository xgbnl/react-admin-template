import {lazyLoad, Appraisal} from "@utils/routeUtil.js";
import {Navigate} from "react-router-dom";
import React from "react";

const routes = [
    {
        path: '/login',
        element: lazyLoad('login'),
    },
    {
        path: '/',
        element: <Appraisal> {lazyLoad('@/layouts',true)}</Appraisal>,
        children:[
            {
                path: "",
                element:<Navigate to="home"/>
            },
        ],
    },
    {
        path: '*',
        element: lazyLoad('not-found'),
    }
];

export default routes;