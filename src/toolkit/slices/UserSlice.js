import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

let initialState = {
    user: [],
    isloading: false,
    isError: null,
    searchData:[]
}

let base_url = "https://66502a4aec9b4a4a6030f39e.mockapi.io/user/users/";

// get data
export const fetchdata = createAsyncThunk("userget",
    async () => {
        try {
            const response = await axios.get(base_url);
            // console.log(response);
            return response.data
        } catch (error) {
            return error.response.data
        }
    }
)

// post data

export const postdata = createAsyncThunk("userpost",
    async (data, { rejectWithValue }) => {
        let { payload } = data
        try {
            let response = await axios.post(base_url, payload)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

//delete data
export const deletedata = createAsyncThunk("userdelete",
    async (id, { rejectWithValue }) => {
        try {
            let response = await axios.delete(base_url + id);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

//updatedata
export const updatedata = createAsyncThunk("userupdate",
    async (data, { rejectWithValue }) => {
        let { id, payload } = data
        try {
            let response = await axios.put(base_url + id, payload)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)

        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
   
    extraReducers: (builder) => {
        builder
            // get
            .addCase(fetchdata.pending, (state) => {
                state.isloading = true;
                state.isError = null;
            })
            .addCase(fetchdata.fulfilled, (state, action) => {
                console.log(action,"dfUWYWTETWTRUEWTRUEWT");
                state.isloading = false;
                state.user = action.payload;

            })
            .addCase(fetchdata.rejected, (state, action) => {
                state.isError = action.payload;
                state.isloading = false;
            })
            // post
            .addCase(postdata.pending, (state) => {
                state.isloading = true;
            })
            .addCase(postdata.fulfilled, (state, action) => {
                state.user = state.user.concat(action.payload);
                state.isloading = false
            })
            .addCase(postdata.rejected, (state, action) => {
                state.isError = action.payload;
                state.isloading = false
            })
            // delete
            .addCase(deletedata.pending, (state) => {
                state.isloading = true;
            })
            .addCase(deletedata.fulfilled, (state, action) => {
                state.user = state.user.filter((item) => item.id !== action.payload.id);
                state.isloading = false
            })
            .addCase(deletedata.rejected, (state, action) => {
                state.isError = action.payload;
                state.isloading = false;
            })
            // update
            .addCase(updatedata.pending, (state) => {
                state.isloading = true;
            })
            .addCase(updatedata.fulfilled, (state, action) => {
                state.user = state.user.map((item) => item.id === action.payload.id ? action.payload : item);
                state.isloading = false
            })
            .addCase(updatedata.rejected,(state,action)=>{
                state.isError=action.payload;
                state.isloading=false;
            })


    }
})

export default userSlice.reducer;
