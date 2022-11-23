import axios from "axios";
import { defaultConfig } from "../config";

const api = async (url, data, headers, method) => {
    if (!method) method = "get"; if (!headers) headers = [];
    try {
        return await axios.request({ baseURL: defaultConfig.server, url: url, data: data, method: method, headers: headers })
            .then(res => {
                return res.data;
            });
    } catch (error) {
        return error.response?.data || error.message;
    }
};

const httpCall = async (payload) => {
    try {
        return await axios.request(payload)
            .then(res => {
                return res.data;
            });
    } catch (error) {
        return error.response?.data || error.message;
    }
};


export { httpCall, api }