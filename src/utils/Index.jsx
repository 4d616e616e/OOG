/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { toast } from 'react-toastify';

// Assuming API_URL is defined elsewhere or comes from process.env
// For Next.js, it's typically:
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Environment configuration
const USE_INTERNAL_PROXY = process.env.NEXT_PUBLIC_USE_INTERNAL_PROXY === 'true';
// Assuming API_DELAY is an environment variable, parsed as a number.
// Default to 0 if not set or invalid.
const API_DELAY = parseInt(process.env.NEXT_PUBLIC_API_DELAY || '0', 10);

// Helper function for delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Create axios instance with dynamic baseURL
const instance = axios.create({
   baseURL: USE_INTERNAL_PROXY ? '' : API_URL,
   timeout: 100000,
});

// This is executed before any request is sent
instance.interceptors.request.use(async (config) => {
   // Add delay before each request if API_DELAY is configured
   if (API_DELAY > 0) {
      
      await delay(API_DELAY);
   }

   config.headers['Cache-Control'] = 'no-cache';
   config.headers['Pragma'] = 'no-cache';
   config.headers['Expires'] = '0';
   // 'no-cors' is typically used as a mode for fetch() requests, not directly as a header value.
   // Setting Access-Control-Allow-Origin to 'no-cors' in a request header will not work as intended
   // and might be ignored or cause issues. CORS is handled by the server.
   // If you intended to hint at a CORS mode for the browser, that's done at the fetch() call or by Axios's default behavior.
   // Removing this header as it's not a standard or effective request header for CORS.
   // config.headers['Access-Control-Allow-Origin'] = 'no-cors'; 

   // Token handling - use 'tokenId' for both modes to maintain consistency
   const token = getCookie('tokenId');
   if (token) { // Only set Authorization header if token exists
      config.headers.Authorization = token;
   }

  
   return config;
});

// This is executed before it reaches the calling end
instance.interceptors.response.use(
   (response) => {
    
      return response;
   },
   (error) => {
      console.error(`❌ [API] Request failed:`, error.config?.url, error.message);

      // Handle common error responses globally here
      if (error.response) {
         const status = error.response.status; // Use direct property for clarity and safety
         if (status === 403) {
           
            toast.error('Access forbidden - please check your permissions');
         } else if (status === 429) {
          
            toast.error('Too many requests - please wait a moment');
         } else if (status === 404) {
            toast.error('API URL IS NOT ACCURATE or resource not found.'); // More descriptive message
         } else if (status === 409) {
            toast.error(
               error.response.data?.data?.error || 'Slug is already in use.' // Use optional chaining for safety
            );
         } else if (status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // Ensure window is defined (client-side context) before accessing window.location
            if (typeof window !== 'undefined' && window.location.pathname !== '/admin/login') {
               window.location.href = '/admin/login';
            }
            console.error('Authentication failed. Please log in again.'); // More generic message
         } else if (status === 400) {
            toast.error(
               error.response.data?.data?.error || // Prefer response.data for structured errors
               error.message || // Fallback to error.message if data is not structured
               'Something went wrong.'
            );
         }
      } else if (error.code === 'ECONNABORTED') {
         console.error('Request timed out.');
         toast.error('Request timed out. Please try again.'); // User-facing toast
      } else if (!error.response && error.request) { // error.request exists but no error.response
         console.error('No response from server. Check network connection or server status.');
         toast.error('Network error or server unavailable.'); // User-facing toast
      } else {
         console.error('An unexpected error occurred:', error.message);
         toast.error('An unexpected error occurred.');
      }
      return Promise.reject(error); // Always reject the promise so calling code can handle it
   }
);

// Helper function to construct URL based on mode
const constructUrl = (API) => {
   if (USE_INTERNAL_PROXY) {
      // This is for Next.js API Routes acting as proxies
      return `/api/general?target=${encodeURIComponent(API)}`;
   }
   return API; // Direct external API call
};

// API methods with dynamic routing - matching your exact signatures
const getRequest = (API, body) => {
   const url = constructUrl(API);
   return instance.get(url, body);
};

const postRequest = (API, body, headers = {}) => {
   const url = constructUrl(API);
   return instance.post(url, body, { headers });
};

const putRequest = (API, body) => {
   const url = constructUrl(API);
   return instance.put(url, body);
};

const deleteRequest = (API, body) => {
   const url = constructUrl(API);
   return instance.delete(url, body);
};

// Debug logging (remove in production)
if (process.env.NODE_ENV === 'development') {
   
}

export default {
   getRequest,
   postRequest,
   putRequest,
   deleteRequest,
};
