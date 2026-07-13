"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

import { employees } from "@/data/employees";


const departmentPerformance = employees.reduce(
  (acc: any, employee) => {

    if (!acc[employee.department]) {
      acc[employee.department] = {
        total: 0,
        count: 0,
      };
    }

    acc[employee.department].total += employee.performance;
    acc[employee.department].count += 1;

    return acc;

  },
  {}
);


const performanceData = Object.keys(departmentPerformance).map(
  (department) => ({
    department,
    score: Math.round(
      departmentPerformance[department].total /
      departmentPerformance[department].count
    ),
  })
);


const employeeDistribution = employees.reduce(
  (acc: any, employee) => {

    if (!acc[employee.department]) {
      acc[employee.department] = 0;
    }

    acc[employee.department]++;

    return acc;

  },
  {}
);

const attendanceData = [
  {
    month: "Jan",
    attendance: 94,
  },
  {
    month: "Feb",
    attendance: 96,
  },
  {
    month: "Mar",
    attendance: 95,
  },
  {
    month: "Apr",
    attendance: 98,
  },
  {
    month: "May",
    attendance: 97,
  },
];


const employeeData = Object.keys(employeeDistribution).map(
  (department) => ({
    name: department,
    value: employeeDistribution[department],
  })
);

export default function Charts() {
  return (
    <div className="grid grid-cols-2 gap-6 px-8 pb-8">

      {/* Performance Chart */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border">
        <h2 className="mb-6 text-lg font-bold">
          Performance by Department
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />

  <Bar
  dataKey="score"
  radius={[8,8,0,0]}
>
  {performanceData.map((entry, index) => (
    <Cell
      key={index}
 fill={
    [
      "#2563eb",
      "#16a34a",
      "#f59e0b",
      "#9333ea",
      "#ec4899",
      "#ff4ff6",
      "#f97316",
      "#00c3ff",
    ][index % 8]
  }
    />
  ))}
</Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>


      {/* Attendance Chart */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border">
        <h2 className="mb-6 text-lg font-bold">
          Attendance Trend
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <XAxis dataKey="month" />
            <YAxis />

            <Tooltip />

           <Line
  type="monotone"
  dataKey="attendance"
  stroke="#16a34a"
  strokeWidth={3}
/>

          </LineChart>
        </ResponsiveContainer>
      </div>


      {/* Employee Distribution */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border">

        <h2 className="mb-6 text-lg font-bold">
          Employee Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={employeeData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >

              {employeeData.map((entry,index)=>(
 <Cell
  key={index}
  fill={
    [
      "#2563eb",
      "#16a34a",
      "#f59e0b",
      "#9333ea",
      "#ec4899",
      "#ff4ff6",
      "#f97316",
      "#00c3ff",
    ][index % 8]
  }
/>

              ))}

            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>


    </div>
  );
}