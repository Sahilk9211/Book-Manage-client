# Book-Manager-client

# Personal Book Manager — Frontend

A modern and responsive frontend for the **Personal Book Manager** application, developed as part of the **Thumbstack MERN Stack Developer Assignment**.

The application allows users to securely manage their personal book collection with a clean, intuitive interface. Users can register, log in, add books, edit and delete books, filter and search their collection, and view reading statistics through an interactive dashboard.

## Tech Stack

- Next.js 15 (App Router)
- React
- JavaScript
- Tailwind CSS
- shadcn/ui
- Axios
- React Hook Form
- Zod
- next-themes
- Sonner
- Lucide React

## Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Persistent User Session
- Logout

### Dashboard

- Reading Statistics
- Total Books
- Reading Books
- Completed Books
- Want To Read Books

### Book Management

- Add Book
- Edit Book
- Delete Book
- Reading Status Management
- Search Books
- Filter by Reading Status
- Filter by Tags
- Responsive Book Table
- Mobile Card View

### UI & UX

- Responsive Design
- Dark / Light Theme
- Skeleton Loading
- Empty States
- Confirmation Dialogs
- Toast Notifications
- Form Validation
- Modern Dashboard Layout

## Project Structure

```text
frontend
│
├── public
│
├── src
│   │
│   ├── app
│   │
│   ├── components
│   │   ├── auth
│   │   ├── books
│   │   ├── dashboard
│   │   ├── layout
│   │   └── ui
│   │
│   ├── constants
│   │
│   ├── context
│   │
│   ├── hooks
│   │
│   ├── lib
│   │   └── validations
│   │
│   ├── services
│   │
│   ├── utils
│   │
│   └── middleware
│
├── .env.example
├── package.json
└── README.md
```

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Sahilk9211/Book-Manager-client
cd client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

### 6. Run Production Build

```bash
npm start
```

## Application Pages

### Authentication

- Login Page
- Signup Page

### Dashboard

- Dashboard Overview
- Book Statistics
- Book Collection

### Book Management

- Add Book Dialog
- Edit Book Dialog
- Delete Confirmation Dialog

## Form Validation

Client-side validation is implemented using **React Hook Form** and **Zod**.

Validated fields include:

- Book Title
- Author Name
- Reading Status
- Tags

Authentication forms are also validated before submission.

## API Integration

The frontend communicates with the Express.js backend using **Axios**.

### Authentication

- Register User
- Login User
- Logout User
- Get Current User

### Books

- Get Books
- Create Book
- Update Book
- Delete Book
- Update Reading Status

### Dashboard

- Fetch Dashboard Statistics

## Theme Support

The application supports both:

- Light Mode
- Dark Mode

Theme switching is implemented using **next-themes**.

## UI Components

The project uses **shadcn/ui** components including:

- Button
- Card
- Dialog
- Alert Dialog
- Dropdown Menu
- Input
- Select
- Badge
- Table
- Skeleton
- Sonner Toast

## Responsive Design

The application is fully responsive across:

- Desktop
- Tablet
- Mobile

Desktop users view books in a table layout, while mobile users are presented with an optimized card layout.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API Base URL |

## Deployment

The frontend can be deployed using:

- Vercel

The backend API should be deployed separately (e.g., Render) and connected via the `NEXT_PUBLIC_API_URL` environment variable.

## Future Improvements

- Pagination Controls
- Advanced Sorting
- Debounced Search
- User Profile
- Reading Goals
- Book Cover Upload
- Reading Analytics
- Favorites
- Archive Books

## Screenshots

### Login Page

_Add Screenshot_

### Signup Page

_Add Screenshot_

### Dashboard

_Add Screenshot_

### Add Book Dialog

_Add Screenshot_

### Dark Mode

_Add Screenshot_

### Mobile View

_Add Screenshot_

## Author

**Sahil Khan**

Developed as part of the **Thumbstack MERN Stack Developer Assignment**.