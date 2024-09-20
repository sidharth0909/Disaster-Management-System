import React, { useEffect, useRef } from "react";
import Tweets from "./Tweets";
import { FaExclamationTriangle, FaMapPin } from "react-icons/fa";
import rajasthan from "./Top_disaster_tweets_rajasthan.json";
import maha from "./Top_disaster_tweets_maha.json";
import assam from "./Top_disaster_tweets_assam.json";
import delhi from "./Top_disaster_tweets_delhi.json";
import karnataka from "./Top_disaster_tweets_karnataka.json";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import RegionCard from "./RegionCard";

const Service = () => {
  const data = {
    labels: ["Fire", "Tsunami", "EOC", "Water Logging", "Airport Emergency"],
    datasets: [
      {
        label: "Emergency Counts",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [72, 52, 45, 35, 29],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className=" flex mx-4 gap-4 py-4 mt-24">
      <div>
        {/* Potential Risk Updates on Social Media */}
        <div className=" p-4 rounded mb-4">
          <h2 className="text-4xl font-bold mb-2">
            Potential Risk Updates on Social Media
          </h2>
          <p className="text-xl">Stay informed about potential risks.</p>
        </div>

        {/* Top Threats Section */}
        <div
          className="bg-gray-100 p-4 rounded mb-4 py-8 mx-4"
          style={{ padding: "5rem 1rem !important" }}
        >
          <h2 className="text-2xl font-bold mb-4">Top Threats</h2>

          <div className="flex gap-8 flex-col items-center h-[33rem] overflow-y-scroll scrollbar-hide">
            <RegionCard title="Delhi" data={delhi} />
            <RegionCard title="Assam" data={assam} />
            <RegionCard title="Maharashtra" data={maha} />
            <RegionCard title="Rajasthan" data={rajasthan} />
            <RegionCard title="Karnataka" data={karnataka} />
          </div>
        </div>
      </div>

      {/* Tweets Component */}
      <Tweets />
    </div>
  );
};

export default Service;
