import axios from './axios';
const api = {
    getChengpin(params) {
        return axios.post('/user/login',params)
        // return axios.get('/wechat_qrcode')
    },
    getCode() {
        // return axios.post('/user/login',params)
        return axios.get('/wechat_qrcode')
    },
}
export default api;
