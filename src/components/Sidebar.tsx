"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  Settings,
  ChevronDown,
} from "lucide-react";


type Props = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};


export default function Sidebar({
  activeSection,
  setActiveSection,
}: Props) {

const [profileOpen, setProfileOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Employees",
      icon: Users,
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
    {
      name: "Reports",
      icon: FileText,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];


  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">


    <div className="flex items-center gap-3">

  <Image
    src="public/PeopleLens-logo.png"
    alt="PeopleLens Logo"
    width={40}
    height={40}
  />


  <div>

    <h1 className="text-2xl font-bold text-blue-600">
      PeopleLens
    </h1>

    <p className="text-sm text-gray-500">
      Workforce Insights
    </p>

  </div>

</div>

      <nav className="mt-10 space-y-2 flex-1">

        {menuItems.map((item)=>{

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() =>
                setActiveSection(item.name)
              }
              className={`
                flex items-center gap-3
                w-full rounded-lg px-4 py-3
                font-medium transition

                ${
                  activeSection === item.name
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >

              <Icon size={20}/>

              {item.name}

            </button>
          );

        })}


      </nav>


      <div className="border-t pt-4">

  <button
    className="
      flex items-center gap-3 
      w-full rounded-xl 
      p-3 
      hover:bg-gray-100 
      transition
      text-left
    "
    onClick={() => setActiveSection("Profile")}
  >

    <div className="
      h-10 
      w-10 
      rounded-full 
      bg-blue-600 
      text-white 
      flex 
      items-center 
      justify-center
      font-semibold
    ">
      A
    </div>


    <div>
      <p className="font-medium">
        HR Admin
      </p>

      <p className="text-sm text-gray-500">
        Administrator
      </p>
    </div>


  </button>

</div>


    </aside>
  );
}
