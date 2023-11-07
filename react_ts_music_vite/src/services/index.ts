import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: 'http://codercba.com:9002',
  timeout: 10000,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
  },
})

export default hyRequest
