// import React, { use } from "react";
// import { useLoaderData } from "react-router";

// import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
import useApps from "../../hooks/useApps";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  const { apps, loading } = useApps();

  // const apps = use(appsPromise);
  // console.log(apps, "apps");

  // const data = useLoaderData();
  // console.log(data, "data from homepage");

  // const [apps, setApps] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/data.json");
  //     const data = await res.json();

  //     setTimeout(() => {
  //       setApps(data);
  //       setLoading(false);
  //     }, 1500);

  //     // setApps(data);
  //     // setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {/* section header */}
      <div className="text-center py-10 space-y-2">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p className="text-gray-700">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mb-8">
          <HashLoader size={"100px"} color="#ad46ff" />
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid sm:grid-cols- md:grid-cols-3 gap-5 mb-10">
          {apps.slice(0, 9).map((app, index) => {
            return <AppCard key={index} app={app} />;
          })}
        </div>
      )}
      <div className="text-center">
        <Link to={"/apps"}>
          <button className="btn bg-purple-500 text-white">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
