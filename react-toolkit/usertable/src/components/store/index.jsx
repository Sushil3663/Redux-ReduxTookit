import { configureStore } from '@reduxjs/toolkit';

import UserSlice from './slice/UserSlice';

const store = configureStore({
    reducer: {
        users : UserSlice.reducer,
    }
});

export default store;