
# SkillShare

Learn and Master Skills Online




## Appendix

Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, Skillshare provides a seamless learning experience with its user-friendly interface and robust functionality. With our intuitive course catalog and powerful search feature, you can easily find the courses that align with your interests and goals.


## Features


- Admin Dashboard where Admin can create, delete or update course and add lectures to the course.
- Login functionality implemented using jsonwebtoken, in which cookies cannot be accessed on the client side.
- Payment integration using Stripe.
- Responive and beautiful UI built using TailwindCSS.
- Access to the course only to registered and paid members.
- Protected Routes so that only login user can access some routes and Admin routes can be accessed only by Admin.
- Profile update feature along with password reset.
- Play video in site with easy navigation between lectures.
- State management using Redux Toolkit


## Run Locally

Clone the project

```bash
  git clone https://github.com/vaarunn/SkillShare
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Go to the root directory

```bash
  cd ..
```

Go to the server directory
```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the client's server

```bash
  npm run dev
```

Start the server's server

```bash
  npm run start
```


## Demo

Insert gif or link to demo


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

`PORT=4000`

`MONGO_URL`

`JWT_SECRET`

`FRONTEND_URL` 

`SMTP_HOST`

`SMTP_PORT`

`SMTP_USERS`

`SMTP_PASS`

`CLOUDINARY_CLIENT_NAME`

`CLOUDINARY_CLIENT_API`

`CLOUDINARY_CLIENT_SECRET`

`PLAN_ID`

`RAZORPAY_API_KEY`

`RAZORPAY_API_SECRET`

`MY_MAIL`

`REFUND_DAYS`
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MongoDB

