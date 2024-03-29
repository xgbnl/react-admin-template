import axiosReq from "@/http/request.js";

class Http {

    get = (url, data = {}) => {
        return axiosReq({
            url,
            data,
            method: 'GET',
            isParams: true,
            bfLoading: true,
            afHLoading: true,
        })
    }

    post = (url, data = {}) => {
        return axiosReq({
            url,
            data,
            method: 'POST',
            isParams: false,
            bfLoading: true,
            afHLoading: true,
        })
    }

    patch = (url, data = {}) => {
        return axiosReq({
            url,
            data,
            method: 'PATCH',
            isParams: false,
            bfLoading: true,
            afHLoading: true,
        })
    }

    destroy = (url, data = {}) => {
        return axiosReq({
            url,
            data,
            method: 'DELETE',
            isParams: false,
            bfLoading: true,
            afHLoading: true,
        })
    }

    upload = (url, data = {}) => {
        return axiosReq({
                url,
                data,
                method: 'POST',
                isParams: false,
                bfLoading: true,
                afHLoading: true,
            }
        )
    }
}

const RESETFul = new Http();
export default RESETFul;