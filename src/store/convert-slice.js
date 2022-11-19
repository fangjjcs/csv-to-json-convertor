import { createSlice } from "@reduxjs/toolkit";
import { generateColumns } from './utils/ConvertUtils';

const convertSlice = createSlice({
    name: "convert",
    initialState: {
        jsonData: {},
        originData: {},
        camelCaseData: {},
        columnMap: []
    },
    reducers: {
        setJsonData(state, action) {
            state.originData = action.payload;
            state.jsonData = action.payload;
            [state.columnMap, state.camelCaseData] = generateColumns(state.originData)

        },
        setColumnName(state, action) {
            const type = action.payload;
            switch(type) {
                case 'origin':
                    state.jsonData = state.originData
                    break
                case 'camelCase':
                    state.jsonData = state.camelCaseData
                    break
            }
        }
    },
});

export const convertActions = convertSlice.actions;

export default convertSlice;
