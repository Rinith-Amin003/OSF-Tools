import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getAppKey, getAppUrl } from '../../utils/selectors';
import { httpCall } from '../../api';

const CreateFolder = (props) => {
    const appUrl = useSelector(getAppUrl);
    const appKey = useSelector(getAppKey);

    const [result, setResult] = useState();
    const request = async () => {
        const response = await httpCall({ url: 'https://fakestoreapi.com/products' });
        setResult(response);
    }

    return (
        <Link to={'welcome'} >CreateFolder</Link>
    );
}

export default CreateFolder;