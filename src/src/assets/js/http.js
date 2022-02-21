import axios from "axios";

// let baseURL = '/api'
let baseURL = ''


// 定义请求头及过期时间
const http = axios.create({
    timeout: 2000 * 500,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
});
axios.defaults.retry = 1;//设置全局请求次数
axios.defaults.retryDelay = 1000;//设置全局请求间隙

http.__proto__ = axios;

/**
 * 请求拦截 配置header请求参数
 */
http.interceptors.request.use(
    config => {
        config.headers.sn = new Date().getTime();
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
    response => {
        if (response.data.code && response.data.code !== 200) {
            let msg = response.data.msg;
            Toast(msg);
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 请求地址处理
 */
http.adornUrl = actionName => {
    return baseURL + actionName;
};

/**
 * 封装ajax请求
 * 1.reqUrl、reqMethod为必填选项
 * 2.type存在时导出数据
 * @param {String}   reqUrl                   请求地址
 * @param {String}   reqMethod                请求方式
 * @param {JSON}     reqData                  请求数据
 * @param {Function} callback                 回调函数
 * @param {Function} dir                      直接返回响应数据
 */

const myAjax = (reqUrl, reqMethod, reqData, callback, dir) => {
    http({
            url: http.adornUrl(reqUrl),
            method: reqMethod,
            data: reqData
        })
        .then(({
            data
        }) => {
            if (dir) {
                callback(data);
            } else if (data && data.code == 200) {
                callback(data.data);
            } else {
                Toast(data.msg);
            }
        })
        .catch(({
            data
        }) => {});
};
export default {
    myAjax,
};