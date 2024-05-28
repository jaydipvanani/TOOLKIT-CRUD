import { configureStore } from "@reduxjs/toolkit"
import userreducer from "../slices/UserSlice";


const store = configureStore({
    reducer: {
        user:userreducer
    }
})


export default store
