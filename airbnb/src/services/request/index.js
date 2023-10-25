import axios from "axios"
import {BASE_URL, TIMEOUT} from "@/services/request/config";

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, error => {
      return error
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config, method: "get"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)