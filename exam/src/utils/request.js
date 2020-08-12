import axios from 'axios';//引入axios
import qs from 'qs';//引入qs
// import jsCookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
	baseURL:'',//公共的前缀地址 
	timeout:100000,//响应最长时间
})
// requset 拦截器  对请求数据参数进行处理
service.interceptors.request.use(config=>{
	// config.data.token = jsCookie.get('token')
	// console.log(config.data)
	for(const key in config.data){
		if(config.data[key]==='all'){
			delete config.data[key]
		}
	}
	
	// FormData post 无需 qs转换
	config.data = (config.data instanceof FormData)? config.data:qs.stringify(config.data)
	return config
},error=>{
	return Promist.reject(error)
})

// requset 拦截器  对请求数据参数进行处理
service.interceptors.response.use(response=>{// 拦截 请求成功只返回 data值善
	return response;
},error=>{
	return Promist.reject(error)
})
export default service