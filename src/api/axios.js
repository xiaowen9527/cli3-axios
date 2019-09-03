import axios from 'axios';
import qs from 'querystring';
import {
    Message,
    Loading
} from 'element-ui'

// 创建axios实例
// 创建请求时可以用的配置选项
var service = axios.create({ timeout: 60000 });
// axios的全局配置
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// service.defaults.headers.common['Authorization'] = localStorage.getItem("token");
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.withCredentials=true //让ajax携带cookie


// 添加请求拦截器(post只能接受字符串类型数据)
service.interceptors.request.use(function (config) {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use(
    // 响应包含以下信息data,status,statusText,headers,config
    (res) => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    (err) => {
        console.log(err)
        const { response } = err;
        // console.log(response)
        if (response) {
            errorHandle(response.status, response.data);
            return Promise.reject(response);
        } else {
            console.log('请求失败')
        }
    }
);

const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log("信息校验失败");
            break;
        case 401:
            console.log("认证失败");
            break;
        case 403:
            console.log("token校验失败");
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;

    }
}


export default service;
