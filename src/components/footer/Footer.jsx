import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-slate-800 h-40 flex items-center justify-center text-white">
      <div className="flex items-center space-x-10">
        <span className="text-xl">
          Copyright &copy; {new Date().getFullYear()} All rights are reserved
        </span>
      </div>
    </div>
  );
}
