import React from "react";
import { Link } from "react-router-dom";

export default function Formcontainer({ children, page }) {
  return (
    <>
      <div className=" bg-[--dark-shade] min-h-screen py py-16 px-2 md:px-4">
        <h1 className="text-[--torq-blue] font-semibold text-3xl md:text-4xl mb-8  text-center">
          Zenpay
        </h1>
        <div className="bg-white mx-auto md:w-[500px] rounded-2xl ">
          {children}
        </div>
        {page === "login" && (
          <div className="text-center text-white py-8 text-sm">
            <h3>
              Don't have an account? <Link to="/register">Register</Link>
            </h3>
            <h3>Forgot Password?</h3>
          </div>
        )}
        {page === "register" && (
          <h3 className="text-center text-white py-8 text-sm">
            Already have an account? <Link to="/login">Log in</Link>
          </h3>
        )}
      </div>
    </>
  );
}
