import Formcontainer from "@/components/Formcontainer";
import SignupForm1 from "@/components/SignupForm1";
import SignupForm2 from "@/components/SignupForm2";
import SignupForm3 from "@/components/SignupForm3";
import { getStep } from "@/utils/registerSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignupPage() {
  const step = useSelector(getStep);
  const dispatch = useDispatch();
  console.log(step)
  return (
    <div>
      <Formcontainer>
        {step === 1 && <SignupForm1 />}
        {step === 2 && <SignupForm2 />}
        {step === 3 && <SignupForm3 /> }
      </Formcontainer>
    </div>
  );
}
