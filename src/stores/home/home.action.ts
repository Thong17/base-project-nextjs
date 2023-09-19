import homeService from '@/services/home.service'
import { httpService } from '@/utils/helpers'
import { createAsyncThunk } from '@reduxjs/toolkit'

const service = new homeService()

export const getHomeContent: any = createAsyncThunk(
  'home/content',
  httpService(service.getHomeContent)
)