# Movie Search Application

This repository contains a Movie Search Application built using React. The application allows users to search for movies using the Open Library Search API and displays the results as cards with random dog images. The project is part of an interview selection process to demonstrate proficiency in React and web development.

[Live Demo](https://6699c569f458784f4850f356--lively-marzipan-009b48.netlify.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Movie Search Application allows users to search for movies by entering a search term. The results are fetched from the Open Library Search API and displayed as cards with random dog images fetched from the Dog CEO API.

## Features

- Search for movies using the Open Library Search API.
- Display movie results as cards with movie details.
- Display random dog images on each card.
- Handle loading and error states during data fetching.
- Form validation to ensure a search term is entered before fetching data.

## Getting Started

### Prerequisites

To run this project locally, you will need:

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter a search term in the search input field.
2. Click the search icon to fetch movie results.
3. View the movie details displayed as cards with random dog images.

## Technologies Used

- React
- React Hooks
- Styled Components
- React Icons
- React Loader Spinner
- Open Library Search API
- Dog CEO API

## Project Structure

```
movie-search-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── Home/
│   │   │   ├── index.js
│   │   │   └── styledComponents.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README.md file further based on your specific requirements and preferences. This file provides a comprehensive overview of the project, including its purpose, features, installation instructions, usage, and more.
