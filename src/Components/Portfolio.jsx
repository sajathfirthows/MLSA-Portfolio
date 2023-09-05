/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Rainbow.jpg";

const imageAltText = "rainbow image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Unlocking Seamless Collaboration and Efficiency with Azure DevOps",
    description:
      "Unlock the potential for seamless collaboration and enhanced efficiency in your software development process with Azure DevOps.",
    url: "https://medium.com/@sajathfirthows/unlocking-seamless-collaboration-and-efficiency-with-azure-devops-dfb62236119a",
  },
  {
    title: "GitHub Actions Unleashed: Mastering Automation for Developers",
    description:
      "Dive into the world of GitHub Actions and harness the power of automation to become a masterful developer.",
    url: "https://medium.com/@sajathfirthows/github-actions-unleashed-mastering-automation-for-developers-cee3088a59b5",
  },
  {
    title: "Building Docker Image on Azure VM and Pushing to Docker Hub",
    description:
      "Building Docker Image on Azure VM and Pushing to Docker Hub.",
    url: "https://github.com/sajathfirthows/DevOps_Projects/tree/master/Building%20Docker%20Image%20on%20Azure%20VM%20and%20Pushing%20to%20Docker%20Hub",
  },
  {
    title: "Installing Jenkins on EC2 with custom port",
    description:
      "Installing Jenkins on EC2 with custom port.",
    url: "https://github.com/sajathfirthows/DevOps_Projects/tree/master/Installing%20Jenkins%20on%20EC2%20with%20custom%C2%A0port",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
