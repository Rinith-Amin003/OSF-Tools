import React, { useState } from 'react';
import { httpCall } from '../../api';
import { Link } from 'react-router-dom';
import { Box, Button, Textarea, TextField, Container } from '@mui/joy';
import { apiMapping } from '../../config';


const FilesHomePage = (props) => {
    const [result, setResult] = useState();
    const request = async () => {
        const response = await httpCall({ url: 'https://fakestoreapi.com/products' });
        setResult(response);
    }

    return (
        <div className="bg-amber-100 h-full">
            <Container maxWidth="md" className="mt-10">
                <Box className="text-4xl text-center font-bold text-orange-500">OSF Files API</Box>
                <TextField fullWidth id="outlined-basic" label="StoreFront URL" placeholder="http://localhost.com" variant="outlined" className="mt-10 mb-10" />
                <Textarea placeholder="App Key" minRows={6} />
                <Box className="mt-10 flex gap-4 justify-center">
                    <Link to={`/files/${apiMapping.files[1]}`}>
                        <Button variant="outlined" className="bg-green-300">Create Folder</Button>
                    </Link>
                    <Link to={`/files/${apiMapping.files[2]}`}>
                        <Button variant="outlined" className="bg-emerald-300">Upload File</Button>
                    </Link>
                    <Link to={`/files/${apiMapping.files[3]}`}>
                        <Button variant="outlined" className="bg-red-300">Delete File</Button>
                    </Link>
                    <Link to={`/files/${apiMapping.files[4]}`}>
                        <Button variant="outlined" className="bg-amber-300">Get Files</Button>
                    </Link>
                </Box>
            </Container>
        </div>

    );
}

export default FilesHomePage;