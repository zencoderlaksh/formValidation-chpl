## "Frontend Form Validation Project"

This project provides a minimal setup for using React with Vite, optimized for fast refresh and smooth development experience. The project includes various libraries to handle user input, validation, notifications, and routing.

Libraries Used >

1. React Hot Toast: For toast notifications (react-hot-toast).
2. Tailwind CSS: For utility-first CSS styling (tailwindcss).
3. React Select: For custom select dropdowns with multi-select functionality (react-select).
4. React Router DOM: For handling routing and navigation (react-router-dom).
5. Zod: For schema validation (zod).
6. React Hook Form: For easy form handling and validation (react-hook-form).
7. Vite: For fast bundling and development environment (vite).

Project Setup >

This project is powered by Vite and uses React for the frontend. Vite provides fast refresh and an optimal development experience.

Features >

1. User Form: Takes user input (First Name, Last Name, Email, Mobile No., Gender, Hobbies, Address, Profile Picture).
2. Form Validation: Validates the form using Zod for schema validation.
3. Toaster Notifications: Displays success or error messages using React Hot Toast.
4. Routing: React Router DOM is used to manage different routes like /home after a successful signup.
5. Multi-select Dropdown: Uses React Select for selecting hobbies.

How to Set Up

Clone the Repository

bash
Copy
Edit
git clone <repo-url>
cd <project-folder>
Install Dependencies

Make sure you have Node.js installed. Then, run the following command to install all the required dependencies:

bash
Copy
Edit
npm install
Start the Development Server

After the installation is complete, run the following command to start the Vite development server:

bash
Copy
Edit
npm run dev
Access the Project

Open your browser and go to http://localhost:3000 to view the application.

Backend API
This project assumes the existence of a backend API that handles the following actions:

POST /signup: Receives the user input and stores it in the database or performs further actions.
Form Validation
Form validation is handled using Zod and React Hook Form. The validation rules are defined using Zod schema, and React Hook Form handles the form state and submission.

Example Validation Schema (Zod):

js
Copy
Edit
import { z } from 'zod';

export const signupSchema = z.object({
firstName: z.string().min(1, "First name is required"),
lastName: z.string().min(1, "Last name is required"),
email: z.string().email("Invalid email address"),
mobileNo: z.string().min(10, "Mobile number should be 10 digits"),
gender: z.string().min(1, "Gender is required"),
hobbies: z.array(z.string()).min(1, "At least one hobby is required"),
address: z.string().min(1, "Address is required"),
});
Example Usage
User fills the form, including fields like name, email, gender, hobbies, and address.
Validation is performed upon form submission. If there are any validation errors, the user is notified with toast messages.
Data Submission: After successful validation, the form data is sent to the backend via an API request.
Development Notes
React Hook Form and Zod handle both validation and form submission seamlessly.
React Router DOM allows easy navigation between different routes of the application.
React Hot Toast is used for user-friendly notifications that provide feedback on form submission or errors.
