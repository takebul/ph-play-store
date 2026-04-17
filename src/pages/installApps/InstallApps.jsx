import React, { useContext } from "react";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  console.log(installedApps, "contextData");

  const handleInstallApp = (app) => {
    console.log(app, "need to Uninstall");

    const restApps = installedApps.filter((iApp) => iApp.id != app.id);
    console.log(restApps, "restApps");

    setInstalledApps(restApps);
    toast.error(`${app.title} is Uninstalled`);
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      {installedApps.length === 0 ? (
        <h2 className="text-4xl font-bold text-center">
          Installed apps is not available in here
        </h2>
      ) : (
        installedApps.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <img className="h-25 w-auto" src={app.image} alt={app.title} />
              <h2 className="font-semibold text-2xl">{app.title}</h2>

              <div>
                <button
                  className="btn bg-secondary"
                  onClick={() => handleInstallApp(app)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallApps;
