import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { result_code } = config

const timeout = 5

export default [
  // 分析页统计接口
  {
    url: '/stock/allList',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: result_code,
        data: [
          { code: '245', name: 'asfa' },
          { code: '245', name: 'asfa' },
          { code: '245', name: 'asfa' },
          { code: '245', name: 'asfa' },
          { code: '245', name: 'asfa' }
        ]
      }
    }
  }
] as MockMethod[]
