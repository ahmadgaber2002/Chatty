# Chatty

Chatty is a simple real-time chat application that allows users to send and receive messages. The application is built using Node.js, Express, and MongoDB for the backend, and utilizes a basic HTML/CSS/JavaScript front-end.

## Project Structure

The project is structured as follows:

## 📊 Project Structure

The project is organized as follows:

```
Chatty/
├── public_html/
│ ├── index.html
│ ├── index.css
│ ├── index.js
├── .gitattributes
├── README.md
└── server.js
```


## Features

- **Real-Time Messaging:** Users can send and receive messages in real-time.
- **Persistent Storage:** Messages are stored in a MongoDB database, ensuring they persist across sessions.
- **Simple UI:** The web interface allows users to enter a username and message, which are then broadcast to all connected users.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```
    cd Chatty
    ```
3. Install the necessary dependencies:
    ```
    npm install
    ```
4. Ensure MongoDB is installed and running on your local machine.

## Usage

1. Start the server:
    ```
    node server.js
    ```
2. Open your web browser and navigate to:
    ```
    http://localhost:3000/
    ```
3. Enter an alias and start chatting with other connected users.

## Project Files

### `public_html/index.html`

This is the main HTML file that structures the chat application's web interface.

### `public_html/index.css`

This CSS file contains the styles for the chat interface, including the message display and input areas.

### `public_html/index.js`

Handles the client-side logic for sending and receiving messages via AJAX requests.

### `server.js`

The main server script that uses Node.js, Express, and MongoDB to handle message storage and retrieval. It manages both the chat messages and the serving of static files.
