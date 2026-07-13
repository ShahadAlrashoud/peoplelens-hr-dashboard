"use client";

import { X } from "lucide-react";

type Employee = {
  id: number;
  name: string;
  department: string;
  position: string;
  performance: number;
  attendance: number;
  status: string;
  experience: number;
  skills: string[];
  trainingCompleted: boolean;
  promotionReady: boolean;
};


type Props = {
  employee: Employee | null;
  onClose: () => void;
};


export default function EmployeeProfile({
  employee,
  onClose,
}: Props) {

  if (!employee) return null;


  return (
    <div className="fixed inset-0 bg-black/30 flex justify-end">

      <div className="h-full w-96 bg-white p-8 shadow-xl">

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            Employee Profile
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>


        <div className="mt-8">

          <h3 className="text-2xl font-bold">
            {employee.name}
          </h3>

          <p className="text-gray-500">
            {employee.position}
          </p>


          <div className="mt-6 space-y-4">


            <div>
              <p className="text-gray-500">
                Department
              </p>

              <p className="font-medium">
                {employee.department}
              </p>
            </div>


            <div>
              <p className="text-gray-500">
                Performance
              </p>

              <p className="text-2xl font-bold">
                {employee.performance}%
              </p>
            </div>


            <div>
              <p className="text-gray-500">
                Attendance
              </p>

              <p className="text-2xl font-bold">
                {employee.attendance}%
              </p>
            </div>


            <div>
              <p className="text-gray-500">
                Experience
              </p>

              <p>
                {employee.experience} years
              </p>
            </div>


            <div>
              <p className="text-gray-500">
                Skills
              </p>

              <div className="flex flex-wrap gap-2 mt-2">

                {employee.skills.map((skill)=>(
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>


            <div className="mt-6 rounded-xl bg-green-50 p-4">

              <p className="font-bold text-green-700">
                Promotion Recommendation
              </p>

              <p className="mt-2">
                {employee.promotionReady
                  ? "⭐ Highly Recommended"
                  : "Needs More Development"}
              </p>

            </div>


          </div>

        </div>

      </div>

    </div>
  );
}