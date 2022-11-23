import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { httpCall } from '../../api';
import { useAccessToken } from '../../utils/hooks';
import { getAccessToken, getAppUrl } from '../../utils/selectors';

const GetFiles = (props) => {
    useAccessToken();
    const appUrl = useSelector(getAppUrl);
    const accessToken = useSelector(getAccessToken);

    const [result, setResult] = useState();
    const request = async () => {
        const response = await httpCall(
            {
                method: 'get',
                baseUrl: appUrl,
                url: '/ccadmin/v1/files',
                headers: {
                    Authorization: `Beare ${accessToken}`
                }
            });
        setResult(response);
    }

    if (accessToken) request()

    return (<>GetFiles {appUrl && JSON.stringify(result)}</>);
}

export default GetFiles;