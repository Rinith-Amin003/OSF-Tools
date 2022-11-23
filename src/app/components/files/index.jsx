import React, { useState, useReducer } from 'react';
import { httpCall } from '../../api';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Card, Button, Textarea, TextField, Container } from '@mui/joy';
import { apiMapping } from '../../config';
import { validURL } from '../../utils';


const FilesHomePage = (props) => {
    const [result, setResult] = useState();
    const dispatch = useDispatch(); 

    const [credentials, setCredentials] = useReducer((state, action) => {
        let newState = {};
        if (action.name === 'appUrl') {
            newState = { ...state, [action.name]: action.value, validUrl: validURL(action.value) };
        }
        else {
            newState = { ...state, [action.name]: action.value };
        }
        dispatch({ type: 'credentials', payload: newState });
        return newState;

    },
        { appUrl: '', validUrl: false, appKey: '' });


    const addCredentials = event => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setCredentials({ name: fieldName, value: fieldValue })

    }

    const request = async () => {
        const response = await httpCall({ url: 'https://fakestoreapi.com/products' });
        setResult(response);
    }

    return (
        <div className="bg-amber-100 h-screen">
            <Container maxWidth="md" className="pt-10">
                <Card className="text-4xl text-center font-bold text-orange-500">OSF Countries API</Card>
                <TextField fullWidth id="outlined-basic"
                    label="StoreFront URL"
                    placeholder="http://localhost.com" variant="outlined"
                    className="mt-10 mb-10"
                    name="appUrl"
                    onChange={addCredentials}
                />
                <Textarea placeholder="App Key" minRows={6}
                    name="appKey"
                    onChange={addCredentials}
                />
                {credentials.validUrl && credentials.appKey &&
                    <Box className="mt-10 flex gap-4 justify-center">
                        <Link to={`/files/${apiMapping.countries[1]}`}>
                            <Button variant="outlined" className="bg-green-300">Create Folder</Button>
                        </Link>
                        <Link to={`/files/${apiMapping.countries[2]}`}>
                            <Button variant="outlined" className="bg-emerald-300">Upload Files</Button>
                        </Link>
                        <Link to={`/files/${apiMapping.countries[3]}`}>
                            <Button variant="outlined" className="bg-red-300">Delete Files</Button>
                        </Link>
                        <Link to={`/files/${apiMapping.countries[4]}`}>
                            <Button variant="outlined" className="bg-amber-300">Get Files</Button>
                        </Link>
                    </Box>
                }
            </Container>
        </div>

    );
}
export default FilesHomePage;