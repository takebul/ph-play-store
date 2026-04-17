import React from "react";

const Stats = () => {
  return (
    <div className="bg-purple-500 pb-10 font-bold text-5xl text-center text-white">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold pt-10 pb-4">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex items-center justify-center">
          <div className="stats stats-vertical lg:stats-horizontal w-[100vh]">
            <div className="stat space-y-4">
              <div className="stat-title text-neutral-100 font-normal">
                Total Downloads
              </div>
              <div className="stat-value text-5xl font-bold">29.6M</div>
              <div className="stat-desc text-neutral-100 font-normal">
                21% more than last month
              </div>
            </div>

            <div className="stat space-y-4">
              <div className="stat-title text-neutral-100 font-normal">
                Total Reviews
              </div>
              <div className="stat-value text-5xl font-bold">906K</div>
              <div className="stat-desc text-neutral-100 font-normal">
                46% more than last month
              </div>
            </div>

            <div className="stat space-y-4">
              <div className="stat-title text-neutral-100 font-normal">
                Active Apps
              </div>
              <div className="stat-value text-5xl font-bold">132+</div>
              <div className="stat-desc text-neutral-100 font-normal">
                31 more will Launch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
