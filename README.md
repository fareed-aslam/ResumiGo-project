# ResumiGo

<img width="1885" height="933" alt="image" src="https://github.com/user-attachments/assets/a6c2e8d0-b74b-43ec-920d-28eba9d974be" />


## 🚀 Craft Professional Resumes Effortlessly

ResumiGo is a modern, full-stack web application that empowers users to create job-winning, ATS-friendly resumes with expertly designed templates. Built with a React frontend and Node.js/Express backend, ResumiGo streamlines the resume-building process for job seekers, students, and professionals.

---

## 🌟 Features

- **Lightning Fast**: Create professional resumes in under 5 minutes with a streamlined process.
- **Pro Templates**: Choose from dozens of recruiter-approved, industry-specific templates.
- **Instant Export**: Download high-quality PDFs instantly with perfect formatting.
- **User Authentication**: Secure login, registration, and profile management.
- **Resume Management**: Create, edit, and manage multiple resumes per user.
- **Live Preview**: Instantly preview your resume as you build it.
- **Image Uploads**: Add profile images and other assets to your resume.
- **Theme Selection**: Personalize your resume with multiple color themes.

---

## 📸 Screenshots

### Landing Page
<img width="1885" height="933" alt="image" src="https://github.com/user-attachments/assets/05f39e5e-2fe3-45b3-a629-de64cb8eff73" />


### Why Choose ResumiGo
<img width="1896" height="924" alt="image" src="https://github.com/user-attachments/assets/d7f622a6-b2f8-4371-adfc-678c9e7bbc0e" />


### Dashboard
<img width="1904" height="878" alt="image" src="https://github.com/user-attachments/assets/3cb5dae9-5516-421c-b393-4a530f424c99" />


### Resume Builder
<img width="1889" height="929" alt="image" src="https://github.com/user-attachments/assets/3f558f3a-399a-421b-a625-c6c06ae9d280" />


---

## 🏗️ Project Structure

```
backend/
  api/           # Express route handlers
  public/        # Uploaded images & temp files
  src/
    controllers/ # Business logic
    data/        # Database connection
    middlewares/ # Express middlewares
    models/      # Mongoose models
    routes/      # API routes
    utils/       # Utility classes/functions
    views/       # (Optional) View templates
frontend/
  public/        # Static assets
  src/
    assets/      # Images, styles
    components/  # React components
    context/     # React context providers
    pages/       # Page components
    utils/       # Helper functions
```

---

## ⚙️ Tech Stack

- **Frontend**: React, Vite, CSS Modules
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT, bcrypt
- **File Uploads**: Multer
- **PDF Generation**: PDFjs

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### 1. Clone the Repository
```bash
git clone https://github.com/fareed-aslam/ResumiGo.git
cd ResumiGo-project
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file (see .env.example)
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Open in Browser
Visit [http://localhost:5173](http://localhost:5173) to use the app.

---

## 🔑 Environment Variables
Create a `.env` file in the `backend/` directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📁 API Endpoints (Backend)

- `POST /api/user/register` — Register a new user
- `POST /api/user/login` — Login
- `GET /api/user/profile` — Get user profile
- `POST /api/resume` — Create a new resume
- `GET /api/resume` — Get all resumes for user
- `PUT /api/resume/:id` — Update a resume
- `DELETE /api/resume/:id` — Delete a resume
- `POST /api/resume/upload-image` — Upload profile image

---

## 🖼️ Customization
- Add or modify resume templates in `frontend/src/components/`
- Update color themes in `frontend/src/utils/colors.js`
- Extend backend models in `backend/src/models/`

---

## 🤝 Contributing

Contributions are welcome! Please open issues and submit pull requests for new features, bug fixes, or improvements.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements
- Crafted with ❤️ by [Fareed Aslam](#)
- Inspired by modern resume builders and UI trends

---

## 📬 Contact
For questions or support, please open an issue or contact the maintainer.

---

