

# IGDTUW Glow Desk

### Your one-stop platform for academic resources, CGPA calculator, scholarships, internships, and career opportunities.

This is a web application designed to provide comprehensive study resources for technical college students. It allows students to access notes, calculate their CGPA, and explore various opportunities like scholarships, internships, and hackathons. The project is built with the MERN stack (MongoDB, Express, React, Node.js) and utilizes Vite for a fast and modern development experience.

## Features

  * **Academic Resources:** Browse and download study materials for different branches, years, and subjects.
  * **CGPA Calculator:** Easily calculate your CGPA with a user-friendly interface.
  * **Opportunities:** Stay updated with the latest scholarships, internships, and hackathons.
  * **Societies:** Explore and learn about various student societies.
  * **Admin Upload:** A dedicated interface for administrators to upload new resources.

## Tech Stack

**Client:** React, React Router, TailwindCSS, Shadcn/ui
**Server:** Node.js, Express.js
**Database:** MongoDB with Mongoose
**Build Tool:** Vite

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (v14 or later)
  * npm or yarn
  * MongoDB (local or remote instance)

### Installation

1.  **Clone the repo**

    ```sh
    git clone https://github.com/anshikagarg0410/college-glow-desk.git
    ```

2.  **Install NPM packages**

    ```sh
    npm install
    ```

3.  **Set up environment variables**

    Create a `.env` file in the root directory and add the following:

    ```
    MONGODB_URI=your_mongodb_connection_string
    ```

4.  **Run the development server**

    ```sh
    npm run dev
    ```

    This will start both the frontend and backend servers concurrently.

## Available Scripts

  * `npm run dev`: Runs the app in development mode.
  * `npm run build`: Builds the app for production.
  * `npm run preview`: Serves the production build locally.
  * `npm run server`: Starts the backend server only.
  * `npm run seed`: Seeds the database with initial data.

## Project Structure

```
/
├── public/          # Static assets
├── server/          # Backend (Express.js)
│   ├── config/      # Database configuration
│   ├── controllers/ # Request handlers
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   └── server.js    # Server entry point
└── src/             # Frontend (React)
    ├── assets/      # Images and other assets
    ├── components/  # Reusable React components
    ├── data/        # Static data
    ├── hooks/       # Custom React hooks
    ├── lib/         # Utility functions
    ├── pages/       # Page components
    ├── App.tsx      # Main app component with routing
    └── main.tsx     # Frontend entry point
```

