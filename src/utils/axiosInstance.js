// // src/api/axiosInstance.js
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://lhw5ipxwwfhgw5uarha7qnrtva0nghay.lambda-url.us-east-1.on.aws/api/v1', // Replace with your API base URL
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Optional: Add interceptors for auth token or error handling
// axiosInstance.interceptors.request.use(
//   async config => {
//     // Add auth token from async storage or redux if needed
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6ImFkbWluIiwibmFtZSI6IkhhcmkgUHJhc2FkIiwicGhvbmVOdW1iZXIiOiI5OTUyMzI5ODQxIn0.LNQihyJN9-YPxciYpvK21fsqcqBrPLPKMQ4Igbnmafs'; // e.g., await AsyncStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     // Handle errors globally
//     console.log('API Error:', error);
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
