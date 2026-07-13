"use client";

import { useState } from "react";
import { employees } from "@/data/employees";
import EmployeeProfile from "./EmployeeProfile";

export default function EmployeeTable() {

  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

const [search, setSearch] = useState("");

const [department, setDepartment] = useState("All");

const filteredEmployees = employees.filter((employee) => {

  const matchesSearch =
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase());


  const matchesDepartment =
    department === "All" ||
    employee.department === department;


  return matchesSearch && matchesDepartment;

});

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
      <div className="mb-6 flex justify-between items-center">

<h2 className="text-xl font-bold">
  Employees
</h2>


<div className="flex gap-3">

<input
  placeholder="Search employee..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  className="rounded-lg border px-4 py-2"
/>


<select
  value={department}
  onChange={(e)=>setDepartment(e.target.value)}
  className="rounded-lg border px-4 py-2"
>

<option value="All">
  All Departments
</option>

<option value="Marketing">
  Marketing
</option>

<option value="Engineering">
  Engineering
</option>

<option value="HR">
  HR
</option>

<option value="Finance">
  Finance
</option>

</select>


</div>

</div>

      <table className="w-full">
        <thead className="border-b">
          <tr className="text-left text-gray-500">
            <th className="pb-3">Name</th>
            <th>Department</th>
            <th>Performance</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
{filteredEmployees.map((employee) => (
    
    <tr
  key={employee.id}
  onClick={() => setSelectedEmployee(employee)}
  className="border-b hover:bg-gray-50 cursor-pointer"
>
              <td className="py-4 font-medium">
                {employee.name}
              </td>

              <td>{employee.department}</td>

<td>
  <div className="flex items-center gap-3">

    <div className="h-2 w-24 rounded-full bg-gray-200">

      <div
        className="h-2 rounded-full bg-blue-600"
        style={{
          width: `${employee.performance}%`,
        }}
      />

    </div>


    <span className="text-sm font-medium">
      {employee.performance}%
    </span>

  </div>
</td>

<td>
  <div className="flex items-center gap-3">

    <div className="h-2 w-24 rounded-full bg-gray-200">

      <div
        className="h-2 rounded-full bg-green-500"
        style={{
          width: `${employee.attendance}%`,
        }}
      />

    </div>


    <span className="text-sm font-medium">
      {employee.attendance}%
    </span>

  </div>
</td>
              <td>
               <span
  className={`rounded-full px-3 py-1 text-sm font-medium
  ${
    employee.status === "Excellent"
      ? "bg-green-100 text-green-700"
      : employee.status === "Good"
      ? "bg-blue-100 text-blue-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {employee.status}
</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

<EmployeeProfile
  employee={selectedEmployee}
  onClose={() => setSelectedEmployee(null)}
/>


    </div>
  );
}