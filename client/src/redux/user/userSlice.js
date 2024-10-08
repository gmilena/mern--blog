import { createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice ({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state) => {
            state.loading = true;
            state.error = null;

        },

        signInSucces: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        signInFaliure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },

});


export const {signInFaliure, signInStart, signInSucces} = userSlice.actions;

export default userSlice.reducer;