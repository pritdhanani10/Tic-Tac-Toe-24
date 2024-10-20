const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY, //here key is final but in env file key is your choice
  api_secret: process.env.CLOUD_API_KEY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Healthcare_user_profile",
    allowerdFormats: ["png", "jpg", "jpeg", "img", "pdf","docx","ppt","pptx","doc"],
    access_mode: "public",
  },
});






module.exports = {
  cloudinary,
  storage,
  

};
