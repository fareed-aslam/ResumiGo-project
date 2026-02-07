import { API_PATHS } from "./ApiPaths";
import axiosInstance from "./axiosInstance";

// Upload an image for a resume.
// fieldName must be either "thumbnail" or "profileImage" to match backend multer fields.
// resumeId is required to target /api/resume/:id/upload-images
const uploadImage = async (imageFile, fieldName = "profileImage", resumeId) => {
  if (!resumeId) {
    throw new Error("resumeId is required for uploading images");
  }

  const formData = new FormData();
  formData.append(fieldName, imageFile);

  try {
    const response = await axiosInstance.put(
      API_PATHS.RESUME.UPLOAD_IMAGES(resumeId),
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading the image", error);
    throw error;
  }
};

export default uploadImage;
