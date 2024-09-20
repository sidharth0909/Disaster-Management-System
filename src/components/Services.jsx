import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrResources } from "react-icons/gr";
import { LuSeparatorVertical } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { GiFallingRocks } from "react-icons/gi";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section class="services">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            onClick={() => {
              navigate("/resources_requests");
            }}
          >
            <div class="icon-box icon-box-pink">
              <div class="icon">
                <GrResources size={30} className="mx-auto my-[0.3rem]" />
              </div>
              <h4 class="title">
                <Link href="/resources_requests">Resources Request</Link>
              </h4>
              <p class="description">
                Enables users to request and allocate necessary resources before
                and after a disaster. Facilitates the efficient distribution of
                resources during emergency situations{" "}
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => {
              navigate("/predict");
            }}
          >
            <div class="icon-box icon-box-cyan">
              <div class="icon">
                <LuSeparatorVertical
                  size={30}
                  className="mx-auto my-[0.3rem]"
                />
              </div>
              <h4 class="title">
                <Link href="/predict">Disaster Classfication</Link>
              </h4>
              <p class="description">
                Utilizes image analysis to classify disasters based on visual
                data. Enhances the speed and accuracy of disaster recognition
                for prompt response.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => {
              navigate("/disaster");
            }}
          >
            <div class="icon-box icon-box-green">
              <div class="icon">
                <GiFallingRocks size={30} className="mx-auto my-[0.3rem]" />
              </div>
              <h4 class="title">
                <Link href="/disaster">Disasters</Link>
              </h4>
              <p class="description">
                Stores historical data related to disasters, providing a
                repository for analyzing past events. Aids in research,
                analysis, and improvement of future disaster response
                strategies.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => {
              navigate("/social_media");
            }}
          >
            <div class="icon-box icon-box-blue bg-[#e1eeff]">
              <div class="icon flex items-center justify-center">
                <FaLink size={30} className="mx-auto my-[0.3rem]" />
              </div>
              <h4 class="title">
                <Link href="/social_media">Social Media</Link>
              </h4>
              <p class="description">
                Predicts disasters by analyzing social media for patterns and
                information indicative of potential emergencies. Utilizes
                sentiment analysis and keyword tracking for early detection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
