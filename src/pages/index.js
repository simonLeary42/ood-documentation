/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Feature from "../components/feature";

const features = [
  {
    title: "Supercomputing. Seamlessly. Open, Interactive HPC Via the Web",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <div id="overview-contents">
        <p>
          Open OnDemand is an NSF-funded open-source HPC portal based on OSC’s
          original OnDemand portal. The goal of Open OnDemand is to provide an
          easy way for system administrators to provide web access to their HPC
          resources, including, but not limited to:
        </p>
        <ul>
          <li>Plugin-free web experience</li>
          <li>Easy file management</li>
          <li>Command-line shell access</li>
          <li>
            Job management and monitoring across different batch servers and
            resource managers
          </li>
          <li>Graphical desktop environments and desktop applications</li>
        </ul>
        <p>
          See the{" "}
          <a href="https://osc.github.io/ood-documentation/latest/">
            documentation
          </a>{" "}
          for installation directions, app development tutorials, and an
          overview of the components and applications that make up OnDemand. We
          also have a{" "}
          <a href="https://www.youtube.com/watch?v=4-w-4wjlnPk&amp;list=PLiHVyvLHAIcw2sM_MYNVX9B1vBmJgEmW3">
            walkthrough video
          </a>{" "}
          showing the various components of an Open OnDemand instance available.
        </p>
        <p>
          <small>
            Please cite us{" "}
            <a href="https://doi.org/10.21105/joss.00622">
              {" "}
              Hudak et al., (2018). Open OnDemand: A web-based client portal for
              HPC centers. Journal of Open Source Software, 3(25), 622,
              https://doi.org/10.21105/joss.00622{" "}
            </a>
          </small>
        </p>
        <p>
          <small>
            This material is based upon work supported by the{" "}
            <a href="https://www.nsf.gov">National Science Foundation</a> under
            grant numbers{" "}
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1534949">
              1534949
            </a>{" "}
            and{" "}
            <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1835725">
              1835725
            </a>
            . and under active development by a team from the{" "}
            <a href="https://www.osc.edu/">Ohio Supercomputer Center</a>,{" "}
            <a href="http://www.buffalo.edu/ccr.html">U. of Buffalo CCR</a>, and{" "}
            <a href="https://arc.vt.edu/">Virginia Tech</a>
          </small>
        </p>
      </div>
    ),
  },
  {
    title: "Organizations using or exploring OnDemand",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <div id="orgs-using-or-exploring-ood">
        <p>
          Below is a list of organizations that have deployed or are looking at
          deploying Open OnDemand. Please contact us via the{" "}
          <a href="https://lists.osu.edu/mailman/listinfo/ood-users">
            news list
          </a>{" "}
          if your organization is not on this list and should be included!
        </p>
        <p>
          <a href="/testimonials">
            We also have a page with testimonial comments from many of these
            organizations
          </a>
        </p>
        <h2 style={{ textAlign: "center", marginTop: 30 }}>
          Run your live demo
        </h2>
        <p>
          There are 2 ways you can have a demo Open OnDemand instance running in
          minutes:
        </p>
        <ol>
          <li>
            Using <a href="https://www.vagrantup.com/">Vagrant</a>. Just follow
            the steps listed in the{" "}
            <a href="https://github.com/OSC/ood-images-full">ood-images-full</a>{" "}
            README.
          </li>
          <li>
            Using the{" "}
            <a href="https://sciencegateways.org/">Science Gateways</a> hosting
            service. Instructions are listed in the{" "}
            <a href="https://github.com/OSC/sgci-ood-image/blob/master/how_to_setup_ood_on_sgci_with_the_image/index.md">
              sgci-ood-image
            </a>{" "}
            README.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Project Feature and Roadmap",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <div className="project-feature-and-roadmap">
        <h3 id="upcoming-releases">Upcoming Releases</h3>
        <p>
          <a href="/Releases.html">
            Click here for a list of upcoming planned releases
          </a>
        </p>
        <h3 id="open-ondemand-20-project">Open OnDemand 2.0 Project</h3>
        <p>
          <a href="/OOD2Overview.html">
            Click here for details on the Open OnDemand 2.0 project
          </a>
        </p>
        <h3 id="tell-us-what-features-you-want-to-be-added-to-ondemand">
          Tell us what features you want to be added to OnDemand!
        </h3>
        <ul>
          <li>
            Add new feature requests or bug reports on the{" "}
            <a href="https://github.com/OSC/Open-OnDemand/issues">
              project issues page
            </a>{" "}
            (requires free GitHub account)
          </li>
          <li>
            Post a suggestion or review existing suggestions on our{" "}
            <a href="https://discourse.osc.edu/c/open-ondemand">
              Discourse instance
            </a>
          </li>
          <li>
            Send an email to us on the{" "}
            <a href="https://lists.osu.edu/mailman/listinfo/ood-users">
              news list
            </a>
          </li>
        </ul>
        <p>
          <a href="https://github.com/issues?utf8=%E2%9C%93&amp;q=is%3Aopen+is%3Aissue+org%3Aosc+label%3A%22community+request%22">
            See a list and comment on community requested features
          </a>{" "}
          we are already planning on working. Note - you must be logged in to
          GitHub to see this list.
        </p>
        <h3 id="collaborating-with-open-ondemand">
          Collaborating with Open OnDemand
        </h3>
        <p>
          The Open OnDemand team welcomes and encourages opportunities to
          collaborate on proposals with members of our community in response a
          variety of solicitations. Examples of potential collaboration roles
          our team can have include developing and delivering related client
          education and training programs, and providing extended support
          services for software deployment and custom workflow development.
          Please contact us via the news list if you would like to discuss a
          potential collaboration.
        </p>
        <p>
          Please consider contributing to the code repository on Github. Since
          January 2016 there have been over 8,000 commits to the code base, but
          we can always use additional development help!
        </p>
      </div>
    ),
  },
  {
    title: "Project Cyber Security",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <div className="project-cybersecurity">
        <p>
          <a href="https://trustedci.org/">Trusted CI</a> , the NSF
          Cybersecurity Center of Excellence conducted an in-depth vulnerability
          assessment of Open OnDemand, completing it in December 2018. This
          assessment included a careful review of the code, increasing our
          confidence in its security. The Ohio Supercomputing Center addressed
          the implementation issues (bugs) that were found during this review,
          producing a more robust revision of Open OnDemand.
        </p>
        <h3 id="branding">Branding</h3>
        <p>
          Open OnDemand branding assets are available in the{" "}
          <a href="https://github.com/OSC/Open-OnDemand/tree/gh-pages/assets/images/2017_1108%20Open%20OnDemand%20logo">
            GitHub repository
          </a>
          . Organizations are encouraged to utilize them in their own
          presentations and installations.
        </p>
        <h3 id="software-licensing">Software Licensing</h3>
        <p>
          Open OnDemand code is released under the{" "}
          <a href="https://opensource.org/licenses/MIT">MIT License</a>.
          Documentation and most publications are released under the{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0 License
          </a>
        </p>
        <h3 id="maintained-by-osc">Maintained by OSC</h3>
        <p>
          This project is maintained by the{" "}
          <a href="https://www.osc.edu">Ohio Supercomputer Center (OSC)</a>, a
          member of the{" "}
          <a href="https://www.oh-tech.org/">Ohio Technology Consortium</a>, the
          technology and information division of the{" "}
          <a href="https://education.ohio.gov/">
            Ohio Department of Higher Education
          </a>
          .
        </p>
        <p>
          Don't hesistate to reach out to the developers via our{" "}
          <a href="https://discourse.osc.edu/c/open-ondemand">
            Discourse instance
          </a>{" "}
          if you would like more information or need help installing or
          configuring Open OnDemand.
        </p>
      </div>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Welcome | ${siteConfig.title}`}>
      <div
        className="container"
        style={{
          float: "left",
          marginTop: 40,
          marginLeft: 0,
          width: "50%",
          padding: "auto",
          // border: '1px solid black'
        }}
      >
        <div style={{ textAlign: "center", display: "block" }}>
          <img
            src="img/oodlogo.png"
            alt="Open OnDemand Logo"
            style={{ width: "50%" }}
          />
        </div>
        <div className="feature-container">
          {features && features.length > 0 && (
            <div
              className="row"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {features.map(({ title, imageUrl, description }) => (
                <Feature
                  key={title}
                  title={title}
                  imageUrl={imageUrl}
                  description={description}
                  styles={styles}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="images"
        style={{
          // margin: "50px 20px 20px 0",
          textAlign: "center",
          float: "right",
          position: "sticky",
          marginRight: 40,
          marginTop: 40,
          // border: '1px solid black'
        }}
      >
        <img
          src="/img/jobEfficiency.png"
          id="jobEfficiency"
          style={{
            display: "flex",
            height: 250,
            margin: "50px auto auto auto",
            textAlign:'center'
          }}
        />
        <img
          src="/img/fileAndTensor.png"
          id="fileAndTensor"
          style={{
            display: "flex",
            height: 250,
            margin: "50px auto auto auto",
          }}
        />
        <img
          src="/img/activeJobs.png"
          id="activeJobs"
          style={{
            display: "flex",
            height: 250,
            margin: "50px auto auto auto",
          }}
        />
      </div>

    </Layout>
  );
}

export default Home;
