import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type City = {
    value: string,
    label: string,
}

const initialState: City = {
    value: 'city-1',
    label: 'Paris',
}

export const currentCitySlice = createSlice({
    name: 'currentCity',
    initialState,
    reducers:{
        getCurrentCity(
            state: any,
            action: PayloadAction<City>
        ){
            state.value = action.payload.value;
            state.label = action.payload.label;
        },
    }
})

export default currentCitySlice.reducer