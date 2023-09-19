import axios from '@/configs/axios'
import { API_V1 } from '@/constants/endpoints/api'

export default class bankPerformanceService {
  async getHomeContent() {
    return await axios.post(API_V1.HOME.CONTENT)
  }
}
