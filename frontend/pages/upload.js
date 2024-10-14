import { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a video file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('video', file);

        try {
            const response = await axios.post('/api/video/generate', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error uploading video: ' + error.response.data.error);
        }
    };

    return (
        <div>
            <h1>Upload a Video</h1>
            <form onSubmit={handleUpload}>
                <input type="file" accept="video/*" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Upload;
