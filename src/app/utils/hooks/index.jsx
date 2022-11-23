import { useDispatch, useSelector } from "react-redux";
import { httpCall } from "../../api";
import { getAppKey, getAppUrl } from "../selectors";

export const useAccessToken = () => {
    const dispatch = useDispatch();
    const appUrl = useSelector(getAppUrl);
    const appKey = useSelector(getAppKey);
    console.log(appUrl);

    const request = async () => {
        const response = await httpCall(
            {
                method: 'post',
                baseURL: appUrl,
                url: '/ccadmin/v1/login',
                data: 'grant_type=client_credentials',
                headers: {
                    Authorization: `Beare ${appKey}`,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        dispatch({ type: 'accessToken', payload: response['access_token'] })
    }

   if(appUrl && appKey) request()
}