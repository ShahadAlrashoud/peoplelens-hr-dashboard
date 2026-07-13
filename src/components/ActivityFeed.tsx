"use client";

import { employees } from "@/data/employees";


const activities = employees.slice(0, 5)
  .map((employee, index) => {

    if (employee.promotionReady) {
      return {
        id: employee.id,
        text: `${employee.name} was recommended for promotion`,
        time: `${index + 1} days ago`,
        type: "Promotion",
      };
    }


    if (employee.trainingCompleted) {
      return {
        id: employee.id,
        text: `${employee.name} completed training`,
        time: `${index + 1} days ago`,
        type: "Training",
      };
    }


    return {
      id: employee.id,
      text: `${employee.name} received a performance review`,
      time: `${index + 1} days ago`,
      type: "Review",
    };

  });



export default function ActivityFeed() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">

      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>


      <div className="space-y-5">

        {activities.map((activity)=>(
          <div
            key={activity.id}
            className="flex gap-4"
          >
<div
  className={`
    mt-2 h-3 w-3 rounded-full

    ${
      activity.type === "Promotion"
        ? "bg-green-500"
        : activity.type === "Leave"
        ? "bg-yellow-500"
        : activity.type === "Training"
        ? "bg-blue-500"
        : "bg-purple-500"
    }
  `}
>
</div>


            <div>

              <p className="font-medium">
                {activity.text}
              </p>

              <p className="text-sm text-gray-500">
                {activity.time}
              </p>

            </div>

          </div>
        ))}

      </div>


    </div>
  );
}