
# URL Shortener

## Overview

The URL Shortener is a web application that allows users to convert long URLs into shorter, more manageable links. These short links can be used to redirect to the original long URLs. The project is built using Node.js, Express, MongoDB, and EJS templating engine.

![Screenshot 2024-08-29 180900](https://github.com/user-attachments/assets/e3daf3a9-6754-4e0d-b4d5-fa603c5d705c)


## Features

- Generate short URLs from long URLs.
- Redirect short URLs to their original long URLs.
- Track the number of clicks on each short URL.
- Simple web interface for URL submission.
- RESTful API for programmatic access.

## Prerequisites

To run this project locally, you'll need the following:

- Node.js (v12+)
- npm (Node package manager)
- MongoDB (locally or via a service like MongoDB Atlas)
- Git (optional, for cloning the repository)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anuragPurohit6353/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```


3. **Run the application**:

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:5000/`.

## Usage

### Web Interface

1. Open your web browser and navigate to `http://localhost:5000/`.
2. Enter the long URL you wish to shorten.
3. Click the "Shorten" button.
4. Copy the generated short URL and use it wherever needed.

### API

You can also interact with the URL shortener via its RESTful API.

- **Create a Short URL**:

  ```bash
  POST /api/shorten
  Content-Type: application/json

  {
    "longUrl": "https://example.com"
  }
  ```

- **Redirect using Short URL**:

  Access the short URL in your browser, and it will redirect to the original long URL.

  Returns the number of clicks and other statistics for the given short URL.

