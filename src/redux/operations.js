import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//axios.defaults.baseURL = "https://647b9dfed2e5b6101db17a76.mockapi.io";
axios.defaults.baseURL = "https://64f8307d824680fd217f3ce6.mockapi.io";
//axios.defaults.baseURL = "https://64f8307d824680fd217f3ce6.mockapi.io";

export const fetchContacts = createAsyncThunk("Advert/fetchContacts", async (_, thunkAPI) =>
{
    try
    {
        const response = await axios.get("/Advert");
  
        return response.data;
    }
    catch (e)
    {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const addContact = createAsyncThunk("Advert/addContact", async (make, model, thunkAPI) =>
{
    try
    {
        const response = await axios.post("/Advert", { make }, { model });
        
        return response.data;
    }
    catch (e)
    {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const deleteContact = createAsyncThunk("Advert/deleteContact", async (contactId, thunkAPI) =>
{
    try
    {
        const response = await axios.delete(`/Advert/${contactId}`);
  
        return response.data;
    }
    catch (e)
    {
        return thunkAPI.rejectWithValue(e.message);
    }
});