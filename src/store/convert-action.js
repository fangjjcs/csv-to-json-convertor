import { convertActions } from "./convert-slice";

export const setJsonData = (data) => {
	return async (dispatch) => {
		dispatch(convertActions.setJsonData(data));
	}
}

export const setColumnName = (type) => {
	return async (dispatch) => {
		dispatch(convertActions.setColumnName(type));
	}
}