import { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  icon: ReactNode;
  change: string;
};

export default function KpiCard({
  title,
  value,
  icon,
  change,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>

          <p className="mt-2 text-sm text-green-600 font-medium">
            {change}
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 p-4 text-blue-600">
          {icon}
        </div>
      </div>



    </div>
  );
}