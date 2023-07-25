import axios from 'axios';

// Set the base URL for API endpoints
axios.defaults.baseURL = 'https://amzone-backend.onrender.com';

// Set default headers (e.g., for authorization, content type)
axios.defaults.headers.common['Authorization'] = 'Bearer your_auth_token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Set a default timeout for requests (in milliseconds)
axios.defaults.timeout = 5000;

export default axios;
