import { configureStore } from '@reduxjs/toolkit'
import VisaGlowSlice from './slice/VisaGlowSlice'

const store = configureStore({
  reducer: {
    VoxCode: VisaGlowSlice,
  },
})  

 export default store