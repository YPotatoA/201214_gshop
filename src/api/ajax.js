// ajax请求函数
//返回值promise对象,异步返回的是response.data
import axios from 'axios'
export default function ajax(url, data={}, type='GET') {
    return new Promise(function(resolve, reject) {
        //执行异步ajax请求
        let promise 
        if( type === "GET" ) {
            //准备url query参数
            let datastr = ''    //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key +'=' +data[key] + '&'
            })
            if( dataStr !== '') {
                dataStr = dataStr.subString(0, dataStr.lastIndexOf('&'))
                url = url + '?' +dataStr
            } 
            //发送Get请求
            promise = axios.get(url)
        }else {
            //发送post请求
            promise = axios.post(url, data)
        }
        promise.then(response => {
            //成功了调用resolve
            resolve(response.data)
        }).catch(error=>{
            reject(error)
        })
    })
}