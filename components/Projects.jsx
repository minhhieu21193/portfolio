import Image from "next/image";
import Link from "next/link";
import React from "react";
import appleImg from "../public/assets/projects/appleclone.PNG";
import tiktokImg from "../public/assets/projects/TiktokClone.PNG";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import chatAppImg from "../public/assets/projects/chatapp.PNG";
import yodyClientImg from "../public/assets/projects/yody-client.PNG";
import yodyDashBoardImg from "../public/assets/projects/yody-dashboard.PNG";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Apple App"
            backgroundImg={appleImg}
            projectUrl="/apple"
            tech="Next JS + TypeScript"
          />
          <ProjectItem
            title="TikTok App"
            backgroundImg={tiktokImg}
            projectUrl="/tiktok"
            tech="Next JS + TypeScript"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="Next JS + TypeScript"
          />
          <ProjectItem
            title="Chat UI"
            backgroundImg={chatAppImg}
            projectUrl="/chatApp"
            tech="React JS + Socket.io + Node JS"
          />
          <ProjectItem
            title="Yody Client"
            backgroundImg={yodyClientImg}
            projectUrl="/yodyClient"
            tech="React JS + Node JS"
          />
          <ProjectItem
            title="Yody Dashboard"
            backgroundImg={yodyDashBoardImg}
            projectUrl="/yodyDashboard"
            tech="React JS + Node JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
