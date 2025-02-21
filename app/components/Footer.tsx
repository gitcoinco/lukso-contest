"use client";

import React from "react";
import { MessageCircle, Send, MessagesSquare } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import PoweredByGitcoinSvg from "./media/PoweredByGitcoinSvg";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-12 px-6 text-white ${
        theme === "dark" ? "bg-[#0a090d]" : "bg-brand"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © 2025{" "}
            <a
              href="https://lukso.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              LUKSO
            </a>{" "}
            &{" "}
            <a
              href="https://gitcoin.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Gitcoin
            </a>{" "}
            | All Rights Reserved |{" "}
            <a
              href="https://www.gitcoin.co/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Terms of Service
            </a>
            {/* <a href="/rules" className="hover:opacity-80 transition-opacity">
              {" "}
              | Rules
            </a> */}
          </div>

          <div className="flex gap-6">
            {/* <a href="#" className="hover:opacity-80 transition-opacity">
              <Send className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <MessagesSquare className="w-6 h-6" />
            </a> */}
            <a
              href="https://gitcoin.co"
              className="hover:opacity-80 transition-opacity -mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PoweredByGitcoinSvg style={{ width: "100px", height: "auto" }} />
            </a>
          </div>

          {/* <div className="flex gap-4 text-sm">
            <a href="#" className="hover:opacity-80 transition-opacity">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
