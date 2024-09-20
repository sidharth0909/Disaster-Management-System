import React from "react";
import EarthQuake from "../assets/EarthQuake.png";
import Floods from "../assets/Floods.png";
import Drought from "../assets/drought.png";
import Volcano from "../assets/volcano.png";
import {
  FaInfo,
  FaInfoCircle,
  FaLocationArrow,
  FaMapPin,
} from "react-icons/fa";

const data = [
  {
    name: "earthquakes",
    image: EarthQuake,
    content: {
      location: [
        "Pacific Ring of Fire (Japan, Indonesia, Chile)",
        "Himalayan Region (Nepal, India, Bhutan)",
        "San Andreas Fault (United States)",
        "Hellenic Arc (Greece)",
        "East African Rift (Ethiopia, Kenya, Tanzania)",
      ],
      pm: [
        "Seismic Building Codes and Regulations",
        "Early Warning Systems",
        "Retrofitting of Infrastructure",
        "Land Use Planning and Zoning",
        "Emergency Preparedness and Evacuation Plans",
        "Public Education and Awareness",
        "Geological Surveys and Monitoring",
        "International Cooperation",
        "Disaster Response and Recovery Planning",
        "Community Resilience Programs",
      ],
    },
  },
  {
    name: "floods",
    image: Floods,
    content: {
      location: [
        "Ganges-Brahmaputra Delta (Bangladesh, India)",
        "Yangtze River Basin (China)",
        "Nile River Basin (Egypt, Sudan)",
        "Mississippi River Basin (United States)",
        "Amazon River Basin (Brazil, Peru)",
        "Preventive Measures",
      ],
      pm: [
        "Floodplain Zoning and Land Use Planning",
        "Early Warning Systems",
        "Construction of Flood Barriers and Levees",
        "Sustainable Watershed Management",
        "Emergency Preparedness and Evacuation Plans",
        "Public Education and Awareness",
        "River Channel Maintenance and Restoration",
        "International Cooperation",
        "Floodplain Mapping and Risk Assessment",
        "Community Flood Resilience Programs",
      ],
    },
  },
  {
    name: "drought",
    image: Drought,
    content: {
      location: [
        "Sub-Saharan Africa (East Africa, Somalia)",
        "Southwestern United States (California, Arizona, and Nevada)",
        "Australia",
        "Middle East (Iran, Iraq and Saudi Arabia)",
        "Central Asia (Uzbekistan, Turkmenistan and Kazakhstan",
      ],
      pm: [
        "Water Conservation and Efficiency",
        "Diversification of Water Sources",
        "Drought-resistant Crops and Agricultural Practices",
        "Early Warning Systems",
        "Water Use Planning and Regulation",
        "Forest and Ecosystem Management",
        "Community Engagement and Education",
        "Infrastructure Resilience",
        "Government Policies and Planning",
        "International Cooperation",
      ],
    },
  },
  {
    name: "volcano",
    image: Volcano,
    content: {
      location: [
        "Pacific Ring of Fire (Indonesia, Philippines, Japan, Chile)",
        "Yellowstone National Park (United States)",
        "Mount Vesuvius (Italy)",
        "Popocatepetl (Mexico)",
        "Mount St. Helens (United States)",
        "Preventive Measures",
      ],
      pm: [
        "Hazard Mapping and Zoning",
        "Early Warning Systems",
        "Emergency Preparedness and Evacuation Plans",
        "Infrastructure Resilience",
        "Community Education and Awareness",
        "Land Use Planning and Regulation",
        "Monitoring and Research",
        "International Cooperation",
        "Sustainable Development Practices",
        "Geological Surveys and Risk Assessments ",
      ],
    },
  },
];

const DisasterPage = () => {
  return (
    <div className="mx-8  px-4 py-8 mt-32 ">
      <h1 className="mb-6 text-4xl font-bold">
        Major Disasters across the world
      </h1>
      <div className="flex flex-col gap-4 items-center"></div>
      {data.map((elem, index) => (
        <div className="px-4 py-8 my-8 bg-white border border-gray-300 rounded-lg drop-shadow-xl">
          <div className="text-2xl font-bold first-letter:capitalize ">
            {elem.name}
          </div>
          <p className="mt-6">
            <img
              src={elem.image}
              alt="eq"
              className="w-[45rem] h-[29rem] float-right py-4 pl-8 mr-4"
            />

            <div className="ml-8">
              <div className="text-lg font-bold">Vulnerable Locations</div>
              {elem.content.location.map((loc) => (
                <div className="flex items-center ml-2">
                  <FaMapPin className="mr-2" /> {loc}
                </div>
              ))}
            </div>
            <div className="ml-8">
              <div className="text-lg font-bold mt-4">Preventive Measures</div>
              {elem.content.pm.map((loc) => (
                <div className="flex items-center ml-2">
                  <FaInfoCircle className="mr-2" /> {loc}
                </div>
              ))}
            </div>
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisasterPage;
