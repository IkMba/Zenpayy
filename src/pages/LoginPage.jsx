import Formcontainer from "@/components/Formcontainer";
import LoginForm from "@/components/LoginForm";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <Formcontainer page="login">
        <LoginForm />
      </Formcontainer>
    </div>
  );
}
