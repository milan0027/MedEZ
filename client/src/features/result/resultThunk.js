import customFetch from "../../utils/axios";
import authHeader from "../../utils/userAuthHeader";
import axios from "axios";
export const loadResultThunk = async (medicineName, thunkAPI) => {
  try {
    //const user = thunkAPI.getState().user.user
    console.log(medicineName)
    const resp = await customFetch.post("/api/search/single", medicineName, authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const uploadFileThunk = async(file, thunkAPI) => {
    try{
        console.log(file)
        const resp = await axios.post("/api/search/multiple",file,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                authorization: `Bearer ${thunkAPI.getState().user.token}`,
            }
        });
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}


