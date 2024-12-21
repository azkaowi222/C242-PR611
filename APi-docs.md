# **API Routes Documentation**

### User Routes

#### 1. Get User by Username

- **Route:** `/user/:username`
- **Method:** `GET`
- **Description:** Retrieves a user by their username.
- **Parameters:**
  - `username` (string): The username of the user to retrieve.
- **Response:**
  - `200 OK`: User data (`id`, `email`, `username`) if found.
  - `404 Not Found`: If user is not found.

#### 2. Register User

- **Route:** `/register`
- **Method:** `POST`
- **Description:** Creates a new user account.
- **Request Body:**
  - `email` (string): The user's email address.
  - `username` (string): The user's chosen username.
  - `password` (string): The user's chosen password.
  - `confirmPassword` (string): Confirmation of the user's password.
- **Response:**
  - `201 Created`: User created successfully.
  - `400 Bad Request`: If request body is invalid or passwords do not match.

#### 3. Login User

- **Route:** `/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a token.
- **Request Body:**
  - `email` (string): The user's email address.
  - `password` (string): The user's password.
- **Response:**
  - `200 OK`: Token and user data if authentication is successful.
  - `401 Unauthorized`: If authentication fails.

#### 4. Logout User

- **Route:** `/logout`
- **Method:** `DELETE`
- **Description:** Logs out the current user.
- **Response:**
  - `200 OK`: User logged out successfully.

#### 5. Token Validation

- **Route:** `/token/validation`
- **Method:** `POST`
- **Description:** Validates a user's token.
- **Request Body:**
  - `token` (string): The user's token to validate.
- **Response:**
  - `200 OK`: Token is valid.
  - `401 Unauthorized`: If token is invalid or expired.

#### 6. Change Password

- **Route:** `/change-password`
- **Method:** `PATCH`
- **Description:** Changes the current user's password.
- **Request Body:**
  - `oldPassword` (string): The user's current password.
  - `newPassword` (string): The user's new password.
  - `confirmNewPassword` (string): Confirmation of the user's new password.
- **Response:**
  - `200 OK`: Password changed successfully.
  - `400 Bad Request`: If request body is invalid or passwords do not match.

#### 7. Mail Verification

- **Route:** `/mail/verify`
- **Method:** `PATCH`
- **Description:** Verifies the user's email address.
- **Request Body:**
  - `email` (string): The user's email address.
- **Response:**
  - `200 OK`: Email verified successfully.
  - `400 Bad Request`: If request body is invalid.

#### 8. Resend OTP

- **Route:** `/resend-otp`
- **Method:** `PATCH`
- **Description:** Resends the OTP to the user's email address.
- **Request Body:**
  - `email` (string): The user's email address.
- **Response:**
  - `200 OK`: OTP resent successfully.
  - `400 Bad Request`: If request body is invalid.
