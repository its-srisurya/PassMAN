# PassMAN

PassMAN is a simple and secure password manager application built with React. It allows users to save, edit, and delete their passwords for different websites. The application also provides features to copy the saved passwords to the clipboard and toggle the visibility of the password input field.

## Features

- Save passwords with website URL, username, and password.
- Edit and delete saved passwords.
- Copy website URL, username, and password to the clipboard.
- Toggle visibility of the password input field.
- Persist passwords in local storage.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Toastify**: For displaying toast notifications.
- **UUID**: For generating unique IDs for each password entry.
- **Tailwind CSS**: For styling the application.
- **Lordicon**: For animated icons.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/PassMAN.git
    ```
2. Navigate to the project directory:
    ```sh
    cd PassMAN
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
PassMAN/
├── public/
│   ├── icons/
│   │   ├── eye.png
│   │   └── eyecross.png
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Manager.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Components

### Manager

The `Manager` component is the core of the application. It handles the state of the password form, manages the list of saved passwords, and provides functions to save, edit, delete, and copy passwords.

### Navbar

The `Navbar` component displays the navigation bar at the top of the application.

### Footer

The `Footer` component displays the footer at the bottom of the application.

## Local Storage

The application uses the browser's local storage to persist the passwords. When the application loads, it retrieves the saved passwords from local storage and populates the password list.

## Icons

The application uses animated icons from Lordicon for various actions like saving, editing, deleting, and copying passwords.

## Styling

The application is styled using Tailwind CSS, a utility-first CSS framework.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lordicon](https://lordicon.com/)
