# Survey Vista

Welcome to Survey Vista, a feature-rich survey application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform enables users to create, participate in, and analyze surveys with ease. Pro-users can access advanced functionalities, and the admin dashboard provides comprehensive management tools.

## Features

### Homepage
- **Hero Section**: Overview banner, explore button, and background image.
- **Featured Surveys Section**: Displays the top 6 most voted surveys.
- **Latest Surveys Section**: Displays the 6 most recently created surveys.
- **How It Works Section**: Informative content matching the website theme.
- **FAQ**: Meaningful FAQs about the website and its features.

### Surveys Page (Public)
- Display all surveys with title, short description, and total votes.
- Filters for category and sorting by vote count.

### Survey Details Page (Public)
- Detailed survey information.
- Voting for logged-in users only.
- Submit button for survey completion.
- Commenting for pro-users.
- Visual survey results after voting or survey deadline.
- Option to report inappropriate surveys.

### Pricing Page (Public)
- Integrated payment system for pro-user membership.
- Navigation link for payment page.
- Role change to pro-user upon successful payment.

### User Authentication
- Email/password account creation.
- Social media authentication.

### Role Management
- User roles: user, surveyor, admin, pro-user.
- Default role for new users is user.

### Dashboards
1. **Surveyor Dashboard**
   - Survey creation with questions.
   - Survey update and management.
   - View individual survey responses.
2. **Admin Dashboard**
   - Manage users and roles.
   - Publish/unpublish surveys.
   - View all payments and survey responses.
3. **User Dashboard**
   - Participate in surveys.
   - View reported surveys.
   - Pro-user access to comments section.

### Additional Features
- JWT Authentication.
- Robust user management system.
- Admin dashboard with role management.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Social Media Auth
- **Payment Integration**: Stripe

## Live Site
Check out the live site: [Survey Vista](https://survey-vista.web.app/)

## Getting Started
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Abdullah-Az-Zahur/survey-vista.git
