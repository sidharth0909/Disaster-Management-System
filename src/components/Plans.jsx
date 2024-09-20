import React from "react";
import DisasterCard from "./DisasterCard";
import { redirect, useNavigate } from "react-router-dom";

const Plans = () => {
  const disasterData = [
    {
      title: "Urban Floods",
      image:
        "https://www.preventionweb.net/sites/default/files/styles/landscape_16_9/public/2022-06/Image-Bangladesh-flood.jpg?h=2cf907fb&itok=zZ8txhqm",
      redirect: "/floods-ready",
    },

    {
      title: "Landslides ",
      image:
        "https://cdn.cnn.com/cnnnext/dam/assets/210811223107-03-india-landslide-himchal-pradesh-intl-hnk-full-169.jpg",
      redirect: "/landslides-ready",
    },
    {
      title: "Drought ",
      image:
        "https://images.newscast-pratyaksha.com/english/wp-content/uploads/2016/05/India-Drought-Loss_PTI5_11_2016_000047B.jpg",
      redirect: "/drought-ready",
    },
    {
      title: "Floods",
      image:
        "https://assets.telegraphindia.com/telegraph/2020/Sep/1598988182_2020_8img30_aug_2020_pti30-08-2020_000173b.jpg",
    },
    {
      title: "Cyclone ",
      image:
        "https://th.bing.com/th/id/OIP.HXg-xGWNcRZliabDGF5VdQHaFq?rs=1&pid=ImgDetMain",
    },
    {
      title: "Earthquake ",
      image:
        "https://th.bing.com/th/id/OIP.VN8dr_orOHFYNUmEGlmtXAHaE6?rs=1&pid=ImgDetMain",
    },
    {
      title: "Wildfires",
      image:
        "https://th.bing.com/th/id/OIP.n83OVh-ZjVwuzKzeiNBDrgHaE7?rs=1&pid=ImgDetMain",
    },
    {
      title: "Heatwaves",
      image:
        "https://th.bing.com/th/id/OIP.dak1BJvvQ7ZHXgWkAU0ssgHaD4?rs=1&pid=ImgDetMain",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="mx-8 text-center bg-white border border-gray-300 px-4 py-8 mt-32 rounded-lg drop-shadow-xl">
      <h1 className="mb-6 text-4xl font-bold">Ready to Plan</h1>
      <div className="flex flex-wrap justify-between items-center">
        {disasterData.map((disaster, index) => (
          <div onClick={() => navigate(`${disaster.redirect}`)}>
            <DisasterCard
              key={index}
              title={disaster.title}
              image={disaster.image}
              redirect={disaster.redirect}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
