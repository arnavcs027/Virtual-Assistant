# Virtual Assistant 

A full-stack, voice-first virtual assistant that combines a modern React front end with an Express/MongoDB back end and an AI intent engine powered by Gemini.

This conversational web app listens to your voice, understands your intent, and responds with helpful actions—all from your browser. It features secure user authentication, personalization, and a clean, responsive interface.

---

## Key Features

- **Voice-First Interaction**: Use your voice for commands with browser-based speech recognition and synthesis (Web Speech API).
- **AI-Powered Intent**: Leverages the Gemini API to understand user intent and provide intelligent, context-aware responses.
- **Secure Authentication**: Secure, cookie-based JWT sessions for user sign-up, sign-in, and persistent login.
- **Personalization**: Users can name their assistant and choose a preset avatar or upload a custom one via Cloudinary.
- **Actionable Commands**: Executes real-world tasks like:
  - Searching Google and YouTube.
  - Playing YouTube videos.
  - Opening popular applications (e.g., Instagram, Facebook).
  - Answering general knowledge questions.
  - Providing the current time, date, and weather.
- **Conversation History**: Stores a simple log of interactions for each user in MongoDB.

---

## Technology Stack

The project uses a MERN-style stack with additional services for a robust experience.

| Category           | Technology                                                 |
| ------------------ | ---------------------------------------------------------- |
| **Front-End**      | React 18, React Router, Context API, Axios, Web Speech API |
| **Back-End**       | Node.js, Express 5, Mongoose                               |
| **Database**       | MongoDB                                                    |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs, cookie-parser             |
| **AI Engine**      | Gemini API                                                 |
| **File Storage**   | Cloudinary (for custom avatars), Multer                    |
| **Utilities**      | Moment.js, CORS                                            |

---

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- **Node.js**: v16 or newer
- **Git**: To clone the repository
- **MongoDB**: A running instance, either locally or a connection string from MongoDB Atlas
- **Cloudinary Account**: For `CLOUDINARY_CLOUD_NAME`, `API_KEY`, and `API_SECRET`
- **Gemini API Key**: A valid API key from Google AI Studio

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/virtual-assistant.git
    cd virtual-assistant
    ```

2.  **Set up the Back-End:**

    - Navigate to the `backend` directory.
      ```bash
      cd backend
      ```
    - Install the dependencies.
      ```bash
      npm install
      ```
    - Create a `.env` file in the `backend` directory. Copy the contents of `.env.example` (if provided) or use the template below.
    - Start the server.
      ```bash
      npm run dev
      ```
    - The server will be running on the port defined in your `.env` file (defaults to `5000`).

3.  **Set up the Front-End:**

    - In a **new terminal**, navigate to the `frontend` directory.
      ```bash
      cd frontend
      ```
    - Install the dependencies.
      ```bash
      npm install
      ```
    - Start the React development server.
      ```bash
      npm run dev
      ```
    - Open your browser and navigate to the localhost URL provided (e.g., `http://localhost:5173`).

---

## Configuration

The back-end server is configured using environment variables. Create a `.env` file in the `/backend` directory and populate it with the following keys:

```dotenv
# Server Configuration
PORT=5000

# Database
MONGODB_URL=mongodb://localhost:27017/virtual-assistant

# Authentication
JWT_SECRET=your-super-secret-jwt-key-that-is-long

# Gemini AI API
# Example: https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY
GEMINI_API_URL=YOUR_GEMINI_API_ENDPOINT_URL

# Cloudinary for Image Uploads
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

**Note:** For deployment, ensure the CORS origin in `index.js` is updated to your production frontend URL.

---

## API Endpoints

The server exposes the following RESTful API endpoints. All routes expect `withCredentials: true` from the client.

#### Authentication Routes (`/api/auth`)

| Method | Endpoint  | Description                                           |
| :----- | :-------- | :---------------------------------------------------- |
| `POST` | `/signup` | Creates a new user and returns a JWT cookie.          |
| `POST` | `/signin` | Authenticates a user and returns a JWT cookie.        |
| `GET`  | `/logout` | Clears the authentication cookie to log the user out. |

#### User Routes (`/api/user`)

| Method | Endpoint          | Description                                                         |
| :----- | :---------------- | :------------------------------------------------------------------ |
| `GET`  | `/current`        | Retrieves the currently authenticated user's data.                  |
| `POST` | `/update`         | Updates user's assistant name and/or avatar image.                  |
| `POST` | `/asktoassistant` | Sends a command to the AI engine and returns a structured response. |

---

## Contributing

Contributions are welcome\! Please feel free to fork the repository, create a feature branch, and open a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please report any bugs or issues you encounter.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
