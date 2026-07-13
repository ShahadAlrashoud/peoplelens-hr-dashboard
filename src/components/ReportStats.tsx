import { employees } from "@/data/employees";


export default function ReportStats() {

  const totalEmployees = employees.length;


  const averagePerformance =
    Math.round(
      employees.reduce(
        (sum, employee) =>
          sum + employee.performance,
        0
      ) / employees.length
    );


  const promotionCandidates =
    employees.filter(
      (employee) =>
        employee.promotionReady
    ).length;


  const stats = [
    {
      title: "Total Employees",
      value: totalEmployees,
    },
    {
      title: "Average Performance",
      value: `${averagePerformance}%`,
    },
    {
      title: "Promotion Candidates",
      value: promotionCandidates,
    },
  ];


  return (
    <div className="grid grid-cols-3 gap-6 mb-8">

      {stats.map((stat)=>(
        <div
          key={stat.title}
          className="
          rounded-2xl
          bg-white
          border
          p-6
          shadow-sm
          "
        >

          <p className="text-gray-500">
            {stat.title}
          </p>


          <p className="mt-2 text-3xl font-bold">
            {stat.value}
          </p>


        </div>
      ))}

    </div>
  );
}