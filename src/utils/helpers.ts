export const httpService = (cb: (p: any, t: any) => any) => {
  return async (options: any, thunkApi: any) => {
    try {
      const res = await cb(options, thunkApi)
      return res.data
    } catch (error: any) {
      throw (thunkApi as any).rejectWithValue(error)
    }
  }
}
