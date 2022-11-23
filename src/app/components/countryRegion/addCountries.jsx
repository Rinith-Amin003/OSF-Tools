import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { httpCall } from '../../api';
import { getAppKey, getAppUrl } from '../../utils/selectors';

const AddCountries = (props) => {
    const appUrl = useSelector(getAppUrl);
    const appKey = useSelector(getAppKey);

    const [result, setResult] = useState();
    const request = async () => {
        const response = await httpCall({ url: 'https://fakestoreapi.com/products' });
        setResult(response);
    }
    if (appUrl) request()

    return (<>Add Countries {appUrl && JSON.stringify(result)}</>);
}

export default AddCountries;