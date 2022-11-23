import React, { useState, useReducer } from 'react';
import { httpCall } from '../../api';
import { Link } from 'react-router-dom';
import { Box, Card, Button, Textarea, TextField, Container } from '@mui/joy';
import { apiMapping } from '../../config';


const CountriesHomePage = (props) => {
    const [result, setResult] = useState();

    const validURL = str => {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

        return pattern.test(str);
    }

    const [credentials, setCredentials] = useReducer((state, action) => {
        if (action.name === 'appUrl') {
            return { ...state, [action.name]: action.value, validUrl: validURL(action.value) }
        }
        return { ...state, [action.name]: action.value }

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
                            <Button variant="outlined" className="bg-green-300">Add Countries</Button>
                        </Link>
                        <Link to={`/files/${apiMapping.countries[2]}`}>
                            <Button variant="outlined" className="bg-emerald-300">Update Countries</Button>
                        </Link>
                        <Link to={`/files/${apiMapping.countries[3]}`}>
                            <Button variant="outlined" className="bg-red-300">Delete Countries</Button>
                        </Link>
                        <Link to={`/files/${apiMapping.countries[4]}`}>
                            <Button variant="outlined" className="bg-amber-300">Get Countries</Button>
                        </Link>
                    </Box>
                }
            </Container>
        </div>

    );
}

export default CountriesHomePage;