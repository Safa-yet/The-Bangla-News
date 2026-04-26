import { format } from "date-fns";
import { Monsieur_La_Doulaise } from "next/font/google";
import React from "react";

const monsieur = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monsieur",
});

const Header = () => {
  return (
    <div className="text-center py-8 space-y-3 mt-6">
      <h1 className={`text-6xl ${monsieur.className}`}>
        দ্যা বাংলা ✦ NEWS
      </h1>
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl font-bold">{format(new Date(), "EEEE, MMMM dd yyyy")}</p>
    </div>
  );
};

export default Header;