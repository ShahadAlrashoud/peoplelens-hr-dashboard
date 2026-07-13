"use client";
import { useState } from "react";

type Props = {
  setActiveSection: (section: string) => void;
};


export default function Header({
  setActiveSection,
}: Props) {

  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-8 py-5 border-b border-gray-200">
      <div>
        <h2 className="text-2xl font-bold">
          Employee Performance Dashboard
        </h2>

        <p className="text-gray-500">
          Overview of workforce performance
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search employees..."
          className="rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
        />

     <div className="relative">

  <button
    onClick={() => setOpenProfile(!openProfile)}
    className="h-10 w-10 rounded-full bg-blue-600 text-white font-semibold"
  >
    A
  </button>


  {openProfile && (
    <div className="absolute right-0 mt-3 w-52 bg-white border rounded-xl shadow-lg p-4 z-50">

      <p className="font-semibold">
        HR Admin
      </p>

      <p className="text-sm text-gray-500">
        Administrator
      </p>


      <hr className="my-3" />


     <button
  onClick={() => {
    setActiveSection("Profile");
    setOpenProfile(false);
  }}
  className="w-full text-left text-sm hover:bg-gray-100 p-2 rounded"
>
  Profile
</button>


   <button
  onClick={() => {
    setActiveSection("Logout");
    setOpenProfile(false);
  }}
  className="w-full text-left text-sm hover:bg-gray-100 p-2 rounded"
>
  Sign out
</button>


    </div>
  )}

</div>

      </div>
    </header>
  );
}