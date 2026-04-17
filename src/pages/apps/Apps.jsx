// import React, { useEffect, useState } from "react";
import AppCard from "../../components/ui/AppCard";
import { HashLoader } from "react-spinners";
import useApps from "../../hooks/useApps";

const Apps = () => {
  const { apps, loading } = useApps();

  return (
    <div>
      {/* section header */}
      <div className="text-center py-10 space-y-2">
        <h2 className="text-3xl font-bold">Our All Application</h2>
        <p className="text-gray-700">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mb-8">
          <HashLoader size={"100px"} color="#ad46ff" />
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid sm:grid-cols- md:grid-cols-3 gap-5 mb-10">
          {apps.map((app, index) => {
            return <AppCard key={index} app={app} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Apps;
