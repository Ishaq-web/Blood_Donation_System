import DashboardStats from "../../context/DashboardStats";

function Cards() {
  return (
    <div className="grid grid-cols-4 gap-x-[16px] gap-y-[24px] w-[968px] h-[300px]">
      {DashboardStats.map((item) => (
        <div
          key={item.id}
          className="w-[224px] h-[142px] rounded-[28px] border-gray-200 bg-white p-5"
        >
          {/* Title */}
          <h4 className="text-sm font-medium text-gray-500">
            {item.totalUsers}
          </h4>

          {/* Value */}
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            {item.userValue}
          </h2>

          {/* Changes + Subtitle */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm font-semibold text-green-600">
              {item.changes}
            </span>

            <span className="text-xs text-gray-500">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
