import React from "react";
import RoadMap03 from "../components/roadmap/RoadMap03";
import PageTitle from "../components/pagetitle/PageTitle";
import Footer from "../components/footer";

import dataRoadmap2 from "../assets/fake-data/data-roadmap-2";

function RoadMap01(props) {
  return (
    <div className="page-roadmap">
      <PageTitle title="Alessandro Danescu's Offical Released Songs" />
      <RoadMap03 data={dataRoadmap2} />
      <Footer />
    </div>
  );
}

export default RoadMap01;
