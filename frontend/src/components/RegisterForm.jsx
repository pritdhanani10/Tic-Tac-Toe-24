

import { Form, Link, redirect } from "react-router-dom";
export default function RegisterForm() {
  return (
    <>
      <Form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <div className="relative">
            <input
              type="text"
              className="inputs"
              name="username"
              placeholder="Enter Username"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="text"
              className="inputs"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phonenumber" className="sr-only">
            Phone Number
          </label>

          <div className="relative">
            <input
              type="text"
              className="inputs"
              name="phonenumber"
              placeholder="Enter Phone Number"
              required
              max={10}
              min={10}
            />
          </div>
        </div>

        <div>
          <label htmlFor="photo" className="sr-only ">
            Photo
          </label>

          <div className="relative">
            <input
              type="file"
              className="inputs bg-white"
              name="photo"
              placeholder="Choose photo"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="pasword"
              className="inputs"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-white">
            account?
            <Link className="underline" to="/login">
              login
            </Link>
          </p>

          <button type="submit" className="btn">
            Sign in
          </button>
        </div>
      </Form>
    </>
  );
}

export async function registeraction(data) {
  const formData = await data.request.formData();
  console.log(formData);
  fetch("http://localhost:3000/register", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/login");
}
