import request from '@/config/axios'
import { StockInfo } from '../types'

export const getAllStockInfo = (): Promise<IResponse<StockInfo>> => {
  return request.get({ url: '/stock/allList' })
}
