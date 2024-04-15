# Blogging Website

Welcome to the Blogging Website project! This project includes both frontend and backend components for creating a full-fledged blogging platform. The backend is built on the Hono library and includes features such as posting blogs and authentication using tokens. The frontend is developed using React.

## Features

### Backend
- **Hono Library**: The backend is built on the Hono library, providing a robust foundation for handling HTTP requests, authentication, and more.
- **Blog Posting**: Users can create, read, update, and delete blog posts.
- **Authentication**: Authentication is implemented using tokens for secure access to the platform's features.
- **Prisma Integration**: Prisma is used for database management and ORM functionalities.

### Frontend
- **React**: The frontend is built using React, a popular JavaScript library for building user interfaces.
- **User Interface**: A modern and responsive user interface allows users to easily navigate and interact with the blogging platform.
- **Components**: Modular components enable code reusability and maintainability.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
2. Navigate to the project directory.
3. Install dependencies for both frontend and backend.


## Database Setup

1. Ensure you have a database set up and running. You can use any supported database, such as PostgreSQL, MySQL, or SQLite.
2. Set up the database connection link in the backend's `.env` file. You can use the `.env.example` file as a template.

## Prisma Setup

1. Generate the Prisma client by running the following command from the backend directory:

## Starting the Server

To start the backend server, run the following command from the `backend` directory:
npm run dev

To start the frontend development server, run the following command from the `frontend` directory:
npm run dev


Visit `http://localhost:3000` in your web browser to view the frontend application.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.

5. Open a pull request on the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
