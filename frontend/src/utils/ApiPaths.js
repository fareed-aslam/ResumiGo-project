export const BASE_URL = "http://localhost:2000";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/user/register",
    LOGIN: "/api/user/login",
    GET_PROFILE: "/api/user/profile",
  },

  RESUME: {
    CREATE: "/api/resume",
    GET_ALL: "/api/resume",
    GET_BY_ID: (id) => `/api/resume/${id}`,
    UPDATE: (id) => `/api/resume/${id}`,
    DELETE: (id) => `/api/resume/${id}`,
    UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
  },
  image: {
    UPLOAD_IMAGE: "/api/user/upload-image",
  },
};
