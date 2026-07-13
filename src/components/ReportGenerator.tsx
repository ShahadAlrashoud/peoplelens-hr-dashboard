"use client";

import { employees } from "@/data/employees";


export default function ReportGenerator() {


  const generateReport = () => {

    const headers = [
      "Name",
      "Department",
      "Position",
      "Performance",
      "Attendance",
      "Status",
      "Promotion Ready",
    ];


    const rows = employees.map((employee) => [
      employee.name,
      employee.department,
      employee.position,
      `${employee.performance}%`,
      `${employee.attendance}%`,
      employee.status,
      employee.promotionReady
        ? "Yes"
        : "No",
    ]);


    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) => row.join(","))
      .join("\n");


    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv",
      }
    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href = url;

    link.download = "employee-report.csv";


    link.click();


    URL.revokeObjectURL(url);

  };


  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border">

      <h2 className="text-2xl font-bold">
        HR Reports
      </h2>


      <p className="text-gray-500 mt-2">
        Export employee performance data.
      </p>


      <button
        onClick={generateReport}
        className="
        mt-6
        rounded-lg
        bg-blue-600
        px-5
        py-3
        text-white
        font-medium
        hover:bg-blue-700
        transition
        "
      >
        Generate Employee Report
      </button>


    </div>
  );
}