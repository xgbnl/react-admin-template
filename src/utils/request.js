import axios from 'axios'
import {setToken, authorization} from './auth';
import useAntDesign from "@/common/useAntDesign.js";

let reqConfig
let loadingE

/**
 *
 * @type {axios.AxiosInstance}
 */
const service = axios.create()

const {antdMessage} = useAntDesign();

// 请求拦截
service.interceptors.request.use(
    (request) => {
        // token setting
        request.headers['Authorization'] = authorization();
        /* download file*/
        if (request.isDownLoadFile) {
            request.responseType = 'blob'
        }
        /* upload file*/
        if (request.isUploadFile) {
            request.headers['Content-Type'] = 'multipart/form-data'
        }
        reqConfig = request
        if (request.bfLoading) {
            loadingE = ElLoading.service({
                lock: true,
                text: '数据载入中',
                // spinner: 'el-icon-ElLoading',
                background: 'rgba(0, 0, 0, 0.1)'
            })
        }
        /*
         *params会拼接到url上
         * */
        if (request.isParams) {
            request.params = request.data
            request.data = {}
        }
        return request
    },
    (err) => {
        Promise.reject(err)
    }
)
// 响应拦截
service.interceptors.response.use(
    (res) => {
        if (reqConfig.afHLoading && loadingE) {
            loadingE.close()
        }
        // 如果是下载文件直接返回
        if (reqConfig.isDownLoadFile) {
            return res
        }
        const {flag, msg, isNeedUpdateToken, updateToken, code} = res.data
        //更新token保持登录状态
        if (isNeedUpdateToken) {
            setToken(updateToken)
        }
        const successCode = '200,201,204,302'
        if (successCode.includes(code)) {
            return res.data
        } else {
            // if (code === 403) {
            //   ElMessageBox.confirm('请重新登录', {
            //     confirmButtonText: '重新登录',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //   }).then(() => {
            //     const userStore = useUserStore()
            //     userStore.resetState().then(() => {
            //       router.push({path: '/login'})
            //     })
            //   })
            // }
            if (reqConfig.isAlertErrorMsg) {
                antdMessage(msg);
            }
            //返回错误信息
            //如果未catch 走unhandledrejection进行收集
            //注：如果没有return 则，会放回到请求方法中.then ,返回的res为 undefined
            return Promise.reject(res.data)
        }
    },
    (err) => {
        /*http错误处理，处理跨域，not-found，401，500*/
        if (loadingE) loadingE.close()
        antdMessage(err);
        //如果是跨域
        const errObj = {
            msg: err.toString(),
            reqUrl: reqConfig.baseURL + reqConfig.url,
            params: reqConfig.isParams ? reqConfig.params : reqConfig.data
        }
        return Promise.reject(JSON.stringify(errObj))
    }
)

export function axiosReq({
                             url,
                             data,
                             method,
                             isParams,
                             bfLoading,
                             afHLoading,
                             isUploadFile,
                             isDownLoadFile,
                             baseURL,
                             timeout,
                             isAlertErrorMsg = true
                         }) {
    return service({
        url: url,
        method: method ?? 'get',
        data: data ?? {},
        isParams: isParams ?? false,
        bfLoading: bfLoading ?? false,
        afHLoading: afHLoading ?? true,
        isUploadFile: isUploadFile ?? false,
        isDownLoadFile: isDownLoadFile ?? false,
        isAlertErrorMsg: isAlertErrorMsg,
        baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
        timeout: timeout ?? 15000
    })
}

export default axiosReq
