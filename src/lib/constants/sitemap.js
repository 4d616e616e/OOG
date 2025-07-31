// lib/constants/sitemap.js

// Base Configuration - Applied to all sitemaps
export const BASE_CONFIG = {
  TIMEOUT_MS: 30000, // 30 seconds
  MAX_YEAR: new Date().getFullYear(), // Only current year and past, no future posts
  CACHE_DURATION: 3600,
  LANGUAGE: "hi",
};

// API Endpoints
export const API_ENDPOINTS = {
  POSTS: "/api/live/post/",
  VIDEOS: "/api/live-video/search",
  IMAGES: "/api/live-image/search",
};

// Content-specific configurations
export const SITEMAP_TYPES = {
  // Posts Sitemap Configuration
  POSTS: {
    MAX_POSTS: 50000, // Limit to 50000 posts
    MIN_YEAR: 2020,
    START_DATE: "2024-10-17",
    API_ENDPOINT: API_ENDPOINTS.POSTS,
  },
  IMAGES: {
    MAX_POSTS: 50000, // Limit to 50000 posts
    MIN_YEAR: 2020,
    START_DATE: "2024-10-17",
    API_ENDPOINT: API_ENDPOINTS.POSTS,
  },

  // Videos Sitemap Configuration
  VIDEOS: {
    MAX_POSTS: 50000,
    MIN_YEAR: 2022,
    START_DATE: "2024-06-01",
    API_ENDPOINT: API_ENDPOINTS.VIDEOS,
  },

  WEB_STORIES: {
    MAX_POSTS: 50000,
    MIN_YEAR: 2021,
    START_DATE: "2024-01-01",
    API_ENDPOINT: API_ENDPOINTS.IMAGES,
  },
  PHOTO_GALLERY: {
    MAX_POSTS: 50000,
    MIN_YEAR: 2021,
    START_DATE: "2024-01-01",
    API_ENDPOINT: API_ENDPOINTS.IMAGES,
  },
  RSS_FEED: {
    MAX_POSTS: 100,
    MAX_CATEGORY_ID_LENGTH: 100,
  },
};


export const getSitemapConfig = (type) => {
  const config = SITEMAP_TYPES[type.toUpperCase()];
  if (!config) {
    throw new Error(`Invalid sitemap type: ${type}`);
  }
  return { ...BASE_CONFIG, ...config };
};
