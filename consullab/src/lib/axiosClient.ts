// lib/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export default axiosClient;
