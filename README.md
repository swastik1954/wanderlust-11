# WanderLust

A full-stack travel listing platform where users can explore, create, edit, and review property listings.

## Features

* User registration and login
* Create, edit, and delete listings
* Upload listing images
* Cloudinary image storage
* MongoDB database
* Reviews and ratings
* Session-based authentication
* Flash messages
* Tax display toggle
* Category-based listing filters
* Responsive UI

## Tech Stack

* **Frontend:** HTML, CSS, Bootstrap, EJS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** Passport.js
* **Image Storage:** Cloudinary
* **Templating:** EJS, EJS-Mate
* **Session Storage:** Express Session, Connect-Mongo

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd major_pro
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

Start the application:

```bash
node app.js
```

For development with Nodemon:

```bash
nodemon app.js
```

Open:

```text
http://localhost:8080
```

## Project Structure

```text
major_pro/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── app.js
├── package.json
└── .env
```

## Security

Environment variables and sensitive credentials are stored in `.env` and should not be committed to GitHub.

Make sure `.gitignore` contains:

```text
node_modules/
.env
```

## Author

**Swastik Pandey**

---

If you find this project useful, consider giving it a ⭐ on GitHub.

