"use client";
import Link from "next/link";
import React, { FormEvent, ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase.ts";

export default function LoginPage() {
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    // Validation
    if (
      values.email.indexOf("@") === -1 ||
      values.email.lastIndexOf(".") < values.email.lastIndexOf("@")
    ) {
      setErrors((prev) => ({
        ...prev,
        email: "Podany email jest nieprawidłowy",
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
        password: "Podane hasło jest za krótkie",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }

    const auth = getAuth(app);

    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // alert("Zalogowano pomyślnie");
        router.push("/home");

        setValues({
          email: "",
          password: "",
        });
      })
      .catch((error) => {});
  };

  return (
    <div className="loginBox flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mb-6">Zaloguj się</h1>
        <form className="bg-secondary_darkGrey w-[85%] md:w-[390px] m-auto px-16 py-12 text-white rounded-lg">
          <div className="flex flex-col">
            <label className="mb-2 py-1" htmlFor="email">
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
            <label className=" my-2 py-1" htmlFor="password">
              Hasło
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
              <p className="text-red text-xs ld mt-1">{errors.password}</p>
            )}
          </div>
        </form>
        <nav className="w-[85%] md:w-[505px] m-auto flex items-center justify-between gap-4 text-lg text-white mt-9 font-light">
          <Link href="/register">Założ konto</Link>
          <button
            className="border-solid border border-white py-2 px-4 hover:bg-secondary_darkGrey"
            onClick={handleLogin}
          >
            Zaloguj się
          </button>
        </nav>
      </div>
    </div>
  );
}
