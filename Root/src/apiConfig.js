// config for API url
const API_URL = process.env.REACT_APP_API_URL ||
    (process.env.NODE_ENV === 'production'
        ? 'https://vidyamitra-backend-lnvt.onrender.com'
        : '');

export default API_URL;
