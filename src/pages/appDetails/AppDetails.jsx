import React, { useContext } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { HashLoader } from "react-spinners";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const expectedApp = apps.find((app) => String(app.id) === id);

  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <HashLoader size={"100px"} color="#ad46ff" />
      </div>
    );
  }

  const handleInstallApp = () => {
    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} App is installed`);
  };

  console.log(installedApps, "installApps");

  return (
    <div className="w-11/12 mx-auto">
      <div className="shadow p-6 space-y-3 text-center">
        <img
          className="mx-auto"
          src={expectedApp.image}
          alt={expectedApp.title}
        />
        <h2 className="font-semibold text-3xl">{expectedApp.title}</h2>
        <p>
          Developed by:{" "}
          <span className="font-semibold text-3xl text-purple-500">
            {expectedApp.companyName}
          </span>{" "}
        </p>
        <button
          onClick={handleInstallApp}
          className="btn bg-purple-500 text-white"
        >
          Install Now
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
