# Social Media Dashboard Using React

A responsive social media dashboard built with React that fetches and displays data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). The dashboard features six main navigation buttons that allow users to explore different datasets: Posts, Comments, Albums, Photos, Todos, and Users.

---

## Live Demo

Check out the live version here:  
[https://social-media-dashboard-using-react.netlify.app/](https://social-media-dashboard-using-react.netlify.app/)

---

## Features

- **Intuitive Navigation**: Start with six buttons for Posts, Comments, Albums, Photos, Todos, and Users.
- **Dynamic Data Fetching**: Uses Axios to fetch data from JSONPlaceholder endpoints.
- **Responsive Design**: Fully responsive UI works well on both desktop and mobile devices.
- **Loading States**: Shows a spinner while data is loading.
- **Clean and Modern UI**: Uses CSS Grid and Flexbox for layout with subtle hover effects.
- **Table and Card Views**: Data presented in easy-to-read tables or cards.
- **Mobile Compatibility**: Adjusts font sizes and layout for small screen devices without horizontal scrolling.

---

## Technologies Used

- React (Functional Components & Hooks)
- Axios for HTTP requests
- CSS Grid and Flexbox
- React Router (for page navigation)
- React Spinners for loading animations

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository

```bash
git clone https://github.com/chanchalbohra14/social-media-dashboard-using-react.git
cd social-media-dashboard-using-react

Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
Open your browser and visit

arduino
Copy
Edit
http://localhost:5173


API Endpoints Used
The app fetches data from the following JSONPlaceholder API endpoints:

Page	Endpoint
Posts	https://jsonplaceholder.typicode.com/posts
Comments	https://jsonplaceholder.typicode.com/comments
Albums	https://jsonplaceholder.typicode.com/albums
Photos	https://jsonplaceholder.typicode.com/photos
Todos	https://jsonplaceholder.typicode.com/todos
Users	https://jsonplaceholder.typicode.com/users

Usage
Click any of the six buttons on the dashboard homepage to navigate to the corresponding page.

Each page loads relevant data and displays it in a table or card format.

While data loads, a spinner appears to indicate progress.

Tables are fully responsive and adapt to mobile screens with adjusted font sizes and layout.


