"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase.ts";
import { useUser } from "@/providers/UserProvider.tsx";

export default function RegisterPage() {
  const router = useRouter();
  const { setNewUser } = useUser();

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setErrors({
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Validation
    if (!values.name || values.name.length < 2) {
      setErrors((prev) => ({
        ...prev,
        name: "Name should have at least 3 characters",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "",
      }));
    }
    if (!values.surname || values.surname.length < 2) {
      setErrors((prev) => ({
        ...prev,
        surname: "Surname should have at least 3 characters",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        surname: "",
      }));
    }

    if (
      values.email.indexOf("@") === -1 ||
      values.email.lastIndexOf(".") < values.email.lastIndexOf("@")
    ) {
      setErrors((prev) => ({
        ...prev,
        email: "Email invalid",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (!values.password || values.password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password should have at least 6 characters",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }

    if (!values.confirmPassword || values.confirmPassword !== values.password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Password are different",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }

    const auth = getAuth(app);

    const { name, surname, email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setNewUser({ name, surname });
        router.push("/home");
      })
      .catch((error) => {});
  };
  return (
    <div className="registerBox flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mb-6">Sign up</h1>
        <form className="bg-secondary_darkGrey w-[85%] md:w-[390px] m-auto px-16 py-12 text-white rounded-lg">
          <div className="flex flex-col">
            <label className=" mb-2 py-1" htmlFor="name">
              Name
            </label>
            <input
              className={`bg-transparent outline-none py-1 border-b ${
                errors.name ? "border-red" : "border-white"
              } border-solid`}
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col mt-6">
            <label className=" mb-2 py-1" htmlFor="surname">
              Surname
            </label>
            <input
              className={`bg-transparent outline-none py-1 border-b ${
                errors.surname ? "border-red" : "border-white"
              } border-solid`}
              type="text"
              id="surname"
              name="surname"
              value={values.surname}
              onChange={handleChange}
            />
            {errors.surname && (
              <p className="text-red text-xs mt-1">{errors.surname}</p>
            )}
          </div>
          <div className="flex flex-col mt-6">
            <label className=" mb-2 py-1" htmlFor="email">
              Email
            </label>
            <input
              className={`bg-transparent outline-none py-1 border-b ${
                errors.email ? "border-red" : "border-white"
              } border-solid`}
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col mt-6">
            <label className="my-2 py-1" htmlFor="password">
              Password
            </label>
            <input
              className={`bg-transparent outline-none py-1 border-b ${
                errors.password ? "border-red" : "border-white"
              } border-solid`}
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red text-xs  mt-1">{errors.password}</p>
            )}
            {!errors.password && errors.confirmPassword && (
              <p className="text-red- text-xs  mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-6">
            <label className=" my-2 py-1" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className={`bg-transparent outline-none py-1 border-b ${
                errors.confirmPassword ? "border-red" : "borde-rwhite"
              } border-solid`}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red text-xs  mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        </form>
        <nav className="w-[85%] md:w-[505px] m-auto flex items-center justify-between gap-4 text-lg text-white mt-9 font-light">
          <Link href="/login">Sign in</Link>
          <button
            className="border-solid border border-white py-2 px-4 hover:bg-secondary_darkGrey"
            onClick={handleRegister}
          >
            Sign up
          </button>
        </nav>
      </div>
    </div>
  );
}
