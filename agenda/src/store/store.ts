import {configureStore} from "@reduxjs/toolkit";
import agendaReducer from "@/store/slices/agendaSlice";

export const store = configureStore({
    reducer: {
        agenda: agendaReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;