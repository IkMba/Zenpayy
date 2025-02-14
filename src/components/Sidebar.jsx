import { useLogout } from "@/utils/functions";
import {
  Banknote,
  House,
  LogOut,
  LogOutIcon,
  Menu,
  Send,
  Target,
  UserRoundCog,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, setIsAuthenticated } from "../utils/registerSlice";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  // const logout = useLogout()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setCurrentUser(""));
    dispatch(setIsAuthenticated(false));
    navigate("/");
  };
  return (
    <div className=" hidden md:block bg-[--blue] w-[25%] lg:w-[20%] min-h-screen text-white px-4 py-4 text-lg">
      <div className="flex items-center my-12 gap-6 text-2xl">
        <Menu />
        <Link to="/">Trustbanky</Link>
      </div>
      <div className="flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md">
        <House />
        <Link to="/dashboard">Home</Link>
      </div>
      <div className="flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md">
        <UserRoundCog />
        <Link to="/dashboard/savings">Savings</Link>
      </div>
      <div className="flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md">
        <Send />
        <Link to="/dashboard/invest">Invest</Link>
      </div>
      <div className="flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md">
        <Banknote />
        <Link to="/dashboard/loans">Loans</Link>
      </div>
      <div
        className="flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md"
        onClick={() => logout()}
      >
        <LogOutIcon />
        <Link>Logout</Link>
      </div>
    </div>
  );
}
