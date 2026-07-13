"use client";
import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import KpiCard from "@/components/KpiCard";
import EmployeeTable from "@/components/EmployeeTable";
import Charts from "@/components/Charts";
import ActivityFeed from "@/components/ActivityFeed";
import { employees } from "@/data/employees";
import ReportGenerator from "@/components/ReportGenerator";
import ReportStats from "@/components/ReportStats";
import SettingsPanel from "@/components/SettingsPanel";
import {
  Users,
  CalendarCheck,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export default function Home() {

  const [activeSection, setActiveSection] = useState("Dashboard");

  const totalEmployees = employees.length;

  const averagePerformance =
    Math.round(
      employees.reduce(
        (sum, employee) => sum + employee.performance,
        0
      ) / employees.length
    );

  const averageAttendance =
    Math.round(
      employees.reduce(
        (sum, employee) => sum + employee.attendance,
        0
      ) / employees.length
    );

  const promotionCandidates =
    employees.filter(
      (employee) => employee.promotionReady
    ).length;

  return (
    
    <main className="flex min-h-screen bg-gray-100">
   
    <Sidebar
  activeSection={activeSection}
  setActiveSection={setActiveSection}
/>






      <div className="flex flex-1 flex-col">
 <Header
  setActiveSection={setActiveSection}
/>
        


{activeSection === "Logout" && (
  <div className="p-8 flex justify-center">

    <div className="bg-white border rounded-2xl shadow-sm p-8 max-w-lg text-center">

      <div className="h-16 w-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
        S
      </div>


      <h2 className="text-2xl font-bold mt-5">
        Thank you for exploring PeopleLens
      </h2>


      <p className="text-gray-500 mt-3">
        This project was designed and developed by Shahad Alrashoud
        as a demonstration of HR analytics, dashboard design,
        and information systems concepts.
      </p>


      <div className="mt-6 space-y-3">

        <a
          href="https://github.com/ShahadAlrashoud"
          className="block hover:text-blue-600"
        >
          GitHub
        </a>


        <a
          href="https://www.linkedin.com/in/shahad-alrashoud-25796b2b0/"
          className="block hover:text-blue-600"
        >
          LinkedIn
        </a>


      </div>


      <button
        onClick={() => setActiveSection("Dashboard")}
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Return to Dashboard
      </button>


    </div>

  </div>
)}

        {activeSection === "Dashboard" && (
  <>
    <div className="grid grid-cols-4 gap-6 p-8">

      <KpiCard
        title="Employees"
        value={totalEmployees.toString()}
        change="+5 this month"
        icon={<Users size={30} />}
      />

      <KpiCard
        title="Attendance"
        value={`${averageAttendance}%`}
        change="+2%"
        icon={<CalendarCheck size={30} />}
      />

      <KpiCard
        title="Performance"
        value={`${averagePerformance}%`}
        change="+4%"
        icon={<TrendingUp size={30} />}
      />

      <KpiCard
        title="Promotion Candidates"
        value={promotionCandidates.toString()}
        change="Ready for review"
        icon={<Briefcase size={30} />}
      />

    </div>


    <div className="px-8 pb-8">
      <EmployeeTable />
    </div>


    <Charts />


    <div className="px-8 pb-8">
      <ActivityFeed />
    </div>

  </>
)}


{activeSection === "Employees" && (
  <div className="p-8">
    <EmployeeTable />
  </div>
)}


{activeSection === "Analytics" && (
  <div className="p-8">
    <Charts />
  </div>
)}

{activeSection === "Reports" && (
  <div className="p-8">

    <h2 className="text-2xl font-bold mb-6">
      HR Reports
    </h2>


    <ReportStats />


    <ReportGenerator />

  </div>
)}

{activeSection === "Settings" && (
  <div className="p-8">

    <h2 className="text-2xl font-bold">
      Settings
    </h2>

    <p className="text-gray-500 mt-2">
      Manage your dashboard preferences and account settings.
    </p>

    <div className="mt-6">
      <SettingsPanel />
    </div>

  </div>
)}


{activeSection === "Profile" && (
  <div className="p-8">

    <h2 className="text-2xl font-bold">
      Profile
    </h2>


    <div className="mt-6 bg-white rounded-xl border p-6">

      <div className="flex items-center gap-4">

        <div className="
          h-16 
          w-16 
          rounded-full 
          bg-blue-600 
          text-white 
          flex 
          items-center 
          justify-center
          text-xl
          font-bold
        ">
          A
        </div>


        <div>
          <h3 className="text-xl font-semibold">
            HR Admin
          </h3>

          <p className="text-gray-500">
            Administrator
          </p>
        </div>

      </div>


      <div className="mt-6 space-y-4">

        <div>
          <p className="text-sm text-gray-500">
            Email
          </p>
          <p>
            admin@peoplelens.com
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Department
          </p>
          <p>
            Human Resources
          </p>
        </div>

      </div>

    </div>

  </div>
)}

{activeSection === "Privacy" && (
  <div className="p-8">

    <h2 className="text-2xl font-bold">
      Privacy Policy
    </h2>

   <div className="mt-6 bg-white rounded-xl border p-6">

  <p className="text-gray-600">
    At PeopleLens, we are committed to protecting employee
    information and maintaining responsible data practices.
  </p>

  <p className="mt-4 text-gray-600">
    PeopleLens uses workforce data to provide HR analytics,
    performance insights, and reporting tools that help
    organizations make informed decisions.
  </p>

  <p className="mt-4 text-gray-600">
    Access to employee information is managed through secure
    authentication and role-based permissions to ensure that
    sensitive data is only available to authorized users.
  </p>

  <p className="mt-4 text-gray-600">
    This demo platform uses simulated employee data for
    demonstration purposes.
  </p>

</div>

  </div>
)}


{activeSection === "Help" && (
  <div className="p-8">

    <h2 className="text-2xl font-bold">
      Help Center
    </h2>

   <div className="mt-6 bg-white rounded-xl border p-6">

  <p className="text-gray-600">
    Welcome to the PeopleLens Help Center. Find answers
    about managing employees, analyzing performance,
    and generating HR reports.
  </p>


  <div className="mt-6 space-y-4">

    <div>
      <h3 className="font-semibold">
        Managing Employees
      </h3>

      <p className="text-gray-500">
        View employee records, track performance metrics,
        and review workforce information.
      </p>
    </div>


    <div>
      <h3 className="font-semibold">
        Analytics Dashboard
      </h3>

      <p className="text-gray-500">
        Explore department performance, attendance trends,
        and employee distribution insights.
      </p>
    </div>


    <div>
      <h3 className="font-semibold">
        Reports
      </h3>

      <p className="text-gray-500">
        Generate HR reports to support workforce planning
        and decision-making.
      </p>
    </div>

  </div>

</div>

  </div>
)}


{activeSection === "Support" && (
  <div className="p-8">

    <h2 className="text-2xl font-bold">
      Support
    </h2>

  <div className="mt-6 bg-white rounded-xl border p-6">

  <p className="text-gray-600">
    Need assistance with PeopleLens? Our support team
    is available to help with account questions,
    dashboard issues, and platform guidance.
  </p>


  <div className="mt-6">

    <p className="text-sm text-gray-500">
      Support Email
    </p>

    <p className="font-medium">
      support@peoplelens.com
    </p>

  </div>


  <div className="mt-4">

    <p className="text-sm text-gray-500">
      Response Time
    </p>

    <p className="font-medium">
      Within 24 business hours
    </p>

  </div>


</div>



  </div>
)}


 <footer className="border-t bg-white px-8 py-6 text-sm text-gray-500 text-center">

  <div className="space-y-2">



    <div className="flex justify-center gap-6 mt-4">

  <button
    onClick={() => setActiveSection("Privacy")}
    className="hover:text-blue-600"
  >
    Privacy Policy
  </button>


  <button
    onClick={() => setActiveSection("Help")}
    className="hover:text-blue-600"
  >
    Help Center
  </button>


  <button
    onClick={() => setActiveSection("Support")}
    className="hover:text-blue-600"
  >
    Support
  </button>

</div>
    <p className="mt-4">
     © 2026 PeopleLens Inc. All rights reserved.
    </p>

  </div>

</footer>



      </div>
    </main>
  );
}