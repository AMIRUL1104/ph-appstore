function Stats() {
  // this div background gradient text white

  const stats = [
    {
      id: 1,
      value: "29.6M+",
      label: "Total Downloads",
      thisMonth: "21% More Than Last Month",
    },
    {
      id: 2,
      value: "906K",
      label: "Total Reviews",
      thisMonth: "21% More Than Last Month",
    },
    {
      id: 3,
      value: "132+",
      label: "Active Apps",
      thisMonth: "31 More Will Launch",
    },
  ];
  // bg gradient should to be up to down and text should be white and this month text should be gray-300
  return (
    <div className=" mt-0 w-full  bg-linear-to-t from-[#9F62F2] to-[#632EE3] text-center text-white py-20">
      <h2 className="text-3xl font-bold text-center">
        Trusted by Millions, Built for You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center p-4"
          >
            <span className="text-[14px]">{stat.label}</span>
            <span className="text-4xl font-bold">{stat.value}</span>
            <span className="text-[14px] text-gray-300">{stat.thisMonth}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
