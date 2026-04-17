import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import useApps from "../../hooks/useApps";

const Dashboard = () => {
  const { installedApps } = useContext(InstallAppsContext);
  const { apps, loading } = useApps();
  console.log(apps, loading, "Dashboard");

  const uninstalledAppsLength = apps.length - installedApps.length;
  console.log(uninstalledAppsLength, installedApps.length, "uninstalled");

  const data = [
    { name: "Installed", value: installedApps.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#FF8042" },
  ];

  return (
    <div className="p-10 rounded-md border border-slate-300 container mx-auto my-5">
      <h2 className="font-semibold text-3xl mb-8 text-center">
        Installed and uninstalled apps
      </h2>
      <div className="flex justify-center my-8">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
