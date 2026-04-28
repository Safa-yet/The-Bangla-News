import { format } from "date-fns";
import { Monsieur_La_Doulaise } from "next/font/google";
import React from "react";

export const monsieur = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monsieur",
});

const Header = () => {
  return (
    <div className="text-center py-4 lg:py-8 space-y-1 lg:space-y-3 mt-6">
      <h1 className={`lg:text-6xl text-2xl ${monsieur.className}`}>
        দ্যা বাংলা ✦ NEWS
      </h1>
      <p className='text-sm'>Journalism Without Fear or Favour.</p>
      <p className="lg:text-xl font-bold">{format(new Date(), "EEEE, MMMM dd yyyy")}</p>
    </div>
  );
};

export default Header;