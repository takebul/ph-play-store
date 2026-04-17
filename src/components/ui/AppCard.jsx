import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={app.image} alt={app.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{app.title}</h2>
          <div className="flex justify-between items-center gap-4">
            <span className="bg-green-100 text-green-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
              <FaDownload /> {app.downloads}
            </span>
            <span className="bg-green-100 text-orange-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
              <FaStar /> {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
