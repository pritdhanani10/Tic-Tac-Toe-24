if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  } // remove this after you've confirmed it is working
  
  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const cors = require("cors");
  const bodyParser = require("body-parser");
  app.use(cors());
  app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));
  const session = require("express-session");
  // respond with "hello world" when a GET request is made to the homepage
  const passport = require("passport");
  const multer = require("multer");
  const { storage } = require("./CloudConfig.js");
  const upload = multer({ storage });
  const User = require("./models/User.js");
  const { hashSync, compareSync } = require("bcrypt");
  require("./passport.js");
  const jwt = require("jsonwebtoken");
  const Material = require("./models/Material.js");
  
const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
  };

  main()
  .then((res) => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

  require("./passport.js");

  app.use(passport.initialize());

  app.post("/register", upload.single("photo"), async (req, res) => {
    console.log(req.body);
    let { username, email, phonenumber, password } = req.body;
  
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url, filename);
  
    let user1 = new User({
      username: username,
      email: email,
      phonenumber: phonenumber,
      photo: { url, filename },
      password: hashSync(password, 10),
    });
  
    let newuser = await user1.save();
    // // req.login(newuser, (err) => {
    // //   //user for create session
    // //   if (err) {
    // //     return next(err);
    // //   }
  
    // });

    return res.status(200).json({"newuser":newuser});
  });

  app.post("/login", (req, res, next) => {
    console.log(req.body);
    User.findOne({ email: req.body.email }).then((user) => {
      //no user
      if (!user) {
        return next(new ExpressError(401, "Could not find the user"));
      }
  
      //incrrect password
      if (!compareSync(req.body.password, user.password)) {
        return next(new ExpressError(401, "Incorrect password"));
      }
  
      const payload = {
        username: user.username,
        id: user._id,
    
      };
  
      const token = jwt.sign(payload, "secretOrPrivateKey", { expiresIn: "1d" });
  
      return res.status(200).json({
        success: true,
        user: { id: user._id },
        message: "login successfully",
        token: "Bearer " + token,
      });
    });
  });


  //file uplaod
app.post("/upload-book",passport.authenticate('jwt', { session: false }), upload.fields([{ name: 'file' }, { name: 'coverImage' }]), async (req, res) => {
  console.log(req.body);
  const { title, description, category } = req.body;
  console.log("Files in request:", req.files['file'][0].path);
  const bookFile = req.files['file'][0];  // The uploaded book file (PDF)
  const coverImageFile = req.files['coverImage'][0];  // The uploaded cover image

  // Assuming the user is authenticated and we have their user ID (e.g., via JWT)
  const userId = req.user.id;

  try {
    // Create a new Material (book) entry in the database
    const newMaterial = new Material({
      title: title,
      description: description,
      author: userId,  // The ID of the user uploading the book
      category: category,
      fileUrl: bookFile.path,  // Path to the uploaded book file
      coverImage: {
        url: coverImageFile.path,  // Path to the uploaded cover image
        filename: coverImageFile.filename,  // Filename of the cover image
      },
    });

    // Save the new material to the database
    await newMaterial.save();

    return res.status(201).json({
      success: true,
      message: "Book uploaded successfully!",
      material: newMaterial,
    });
  } catch (error) {
    console.error("Error uploading book:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  }
);