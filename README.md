# Contact List App

A modern *React-based Contact Management Application* with a sleek dark theme.  
It allows users to *add, edit, delete, and search contacts* with smooth animations and a responsive layout.

---

## Features

- View Contacts:* Displays all saved contacts in a centered, responsive layout.  
  Smooth scrolling ensures usability even with many contacts.  
-  Search:* Real-time, case-insensitive search to filter contacts instantly.  
-  Add Contact:* Add a new contact via a pop-up modal form with input validation for name, phone, and email.  
-  Edit Contact:* Edit existing contacts in a pop-up editor, allowing quick updates.  
-  Delete Contact:* Instantly remove contacts with a single click.  
-  Local State Storage:* Contact data is managed in React state (resets on refresh).

---

## Tech Stack

- *React* – Core UI framework.  
- *CSS (Custom)* – Styling for dark theme, pop-ups, and smooth scrollable layout.  
- *JavaScript (ES6+)* – Functional and component-based logic.  
- No backend or external APIs — pure front-end React implementation.

---

## Design Highlights

- Centered contact list with consistent spacing.  
- Smooth scrolling container for large lists.  
- Minimal clutter — only the essential actions (Edit and Delete).  
- Pop-up modals for adding and editing contacts — simple and non-intrusive.  
- Fully responsive design for both desktop and mobile screens.

---
## Setup and Run Locally
1. Clone the repo: git clone https://github.com/bhanuprasanna396/contact-list-app.git
2. Install dependencies: npm install
3. Start the app: npm start
4. Open [localhost:3000](http://localhost:5173/) in your browser.

## Deployment
Deployed on Vercel: [Live Demo](https://contact-list-app.vercel.app) (replace with your actual URL).

## Assumptions
- Contacts are stored in local state (resets on refresh). For persistence, integrate a backend API.
- Basic validation on add form; no advanced error handling.

## Improvements
- Add local storage or backend API for persistent data.
- Include profile pictures for contacts.
- Add sorting/filtering options (by name or recently added).
- Integrate theme switch (dark/light).


