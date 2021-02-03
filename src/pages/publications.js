import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";

const styles = {
  conf: {
    textAlign: "center",
    padding: "2rem 0",
  },
  table: {
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
};

function ConfAndPubs() {
  return (
    <Layout title="Publications">
      <div className={clsx("col col--8")} style={styles.conf}>
        <h1 id="conferences--publications">Conferences / Publications</h1>
        <div className="container">
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Date</th>
                <th style={{ textAlign: "center" }}>Publisher/Event</th>
                <th style={{ textAlign: "center" }}>Title</th>
                <th style={{ textAlign: "center" }}>Content Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2020-03-18</td>
                <td style={{ textAlign: "center" }}>
                  Emerging Centers track for CaRRC
                </td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand Project Summary
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="http://figshare.com/articles/Open_OnDemand_CaRRC_Preso_200317/12006030">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2020-02-13</td>
                <td style={{ textAlign: "center" }}>
                  2020 NSF CSSI PI Meeting
                </td>
                <td style={{ textAlign: "center" }}>
                  Better access to HPC with Open OnDemand
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Better_access_to_HPC_with_Open_OnDemand/11632173">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2020-02-13</td>
                <td style={{ textAlign: "center" }}>
                  2020 NSF CSSI PI Meeting
                </td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand Project Summary
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Project_Summary/11632335">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-12-10</td>
                <td style={{ textAlign: "center" }}>
                  Proceedings of the ISC19 Workshop on Interactive
                  High-Performance Computing
                </td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: HPC for Everyone
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_HPC_for_Everyone/11350130">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-11-13</td>
                <td style={{ textAlign: "center" }}>Nor-Tech</td>
                <td style={{ textAlign: "center" }}>
                  Southwest Research Institute Takes Advantage of Nor-Tech’s
                  Trailblazing Cluster Utility
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://www.nor-tech.com/wp-content/uploads/2019/11/nor-tech-case-study-swri.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-11-20</td>
                <td style={{ textAlign: "center" }}>SC’19</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand User Group BoF
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_SC19_User_Group_BoF_Presentation/10315982">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-09-23</td>
                <td style={{ textAlign: "center" }}>Gateways 19</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: State of the Platform and the Project
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Gateways_2019_Presentation/9892124">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-07-30</td>
                <td style={{ textAlign: "center" }}>PEARC 19</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand User Group BoF
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_User_Group_BoF/9170768">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-07-30</td>
                <td style={{ textAlign: "center" }}>PEARC 19</td>
                <td style={{ textAlign: "center" }}>
                  Scaling R Shiny Apps to Multiple Concurrent Users in a Secured
                  HPC Environment Using Open OnDemand
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Scaling_R_Shiny_Apps_to_Multiple_Concurrent_Users_in_a_Secured_HPC_Environment_Using_Open_OnDemand/9169955">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-07-29</td>
                <td style={{ textAlign: "center" }}>
                  ACM SIGHPC SYSPROS Symposium / PEARC 19
                </td>
                <td style={{ textAlign: "center" }}>
                  Deploying and Managing an OnDemand Instance
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Deploying_and_Managing_an_OnDemand_Instance/9170585">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-06-19</td>
                <td style={{ textAlign: "center" }}>
                  ISC19 Workshop on Interactive High-Performance Computing
                </td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand Pre-conference Paper
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_ISC19_Workshop_on_Interactive_High-Performance_Computing_Pre-conference_Paper/8300639">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-06-19</td>
                <td style={{ textAlign: "center" }}>
                  ISC19 Workshop on Interactive High-Performance Computing
                </td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand Presentation
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_ISC19_Workshop_on_Interactive_High-Performance_Computing_Presentation/8300603">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-06-05</td>
                <td style={{ textAlign: "center" }}>
                  NITRD Middleware And Grid Interagency Coordination (MAGIC)
                  Meeting
                </td>
                <td style={{ textAlign: "center" }}>Open OnDemand Overview</td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Project_Overview/8233421">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-09-26</td>
                <td style={{ textAlign: "center" }}>
                  Gateways 2018 Presentation
                </td>
                <td style={{ textAlign: "center" }}>
                  Accessing Distributed Jupyter/Spark in OnDemand
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Accessing_Distributed_Jupyter_Spark_in_OnDemand/7137995">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-09-10</td>
                <td style={{ textAlign: "center" }}>Gateways 2018 Poster</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: Access Clusters, Gateways and Interactive Apps
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Access_Clusters_Gateways_and_Interactive_Apps/7069691">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-09-10</td>
                <td style={{ textAlign: "center" }}>Gateways 2018 Paper</td>
                <td style={{ textAlign: "center" }}>
                  Accessing Distributed Jupyter / Spark in OnDemand
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Accessing_Distributed_Jupyter_Spark_in_OnDemand/7069679">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-07-25</td>
                <td style={{ textAlign: "center" }}>PEARC 18 Paper</td>
                <td style={{ textAlign: "center" }}>
                  Supporting distributed, interactive Jupyter and RStudio in a
                  scheduled HPC environment with Spark using Open OnDemand
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Supporting_distributed_interactive_Jupyter_and_RStudio_in_a_scheduled_HPC_environment_with_Spark_using_Open_OnDemand/6887693">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-07-24</td>
                <td style={{ textAlign: "center" }}>PEARC 18 BOF</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand – Present and Future Plans
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_PEARC18_BOF_Slides/6856832">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-07-23</td>
                <td style={{ textAlign: "center" }}>PEARC 18 Exhibit</td>
                <td style={{ textAlign: "center" }}>Open OnDemand Overview</td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_On_Demand_Overview/6856847">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-07-20</td>
                <td style={{ textAlign: "center" }}>Flier</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand General Flier
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Overview_Flier/6887546">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-05-17</td>
                <td style={{ textAlign: "center" }}>HPCwire Article</td>
                <td style={{ textAlign: "center" }}>
                  Democratizing HPC: OSC Releases Version 1.3 of OnDemand, Seeks
                  Grant for 2.0
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://www.hpcwire.com/2018/05/16/democratizing-hpc-osc-releases-version-1-3-of-ondemand-seeks-grant-for-2-0/">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-05-15</td>
                <td style={{ textAlign: "center" }}>
                  Journal of Open Source Software (JOSS)
                </td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: A web-based client portal for HPC centers
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="http://joss.theoj.org/papers/10.21105/joss.00622">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-04-30</td>
                <td style={{ textAlign: "center" }}>NSF SI2 PI Workshop</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: Access Clusters, Gateways and Interactive Apps
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Access_Clusters_Gateways_and_Interactive_Apps/6173918/1">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-10-10</td>
                <td style={{ textAlign: "center" }}>CASC Meeting</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand 1.1: Web and Interactive HPC Access
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_1_1_Web_and_Interactive_HPC_Access/6225734">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-10-09</td>
                <td style={{ textAlign: "center" }}>Gateways17</td>
                <td style={{ textAlign: "center" }}>
                  Demo: Developing Apps to Extend Open OnDemand - Paper
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Demo_Developing_Apps_to_Extend_Open_OnDemand/6225746">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-10-09</td>
                <td style={{ textAlign: "center" }}>Gateways17</td>
                <td style={{ textAlign: "center" }}>
                  Demo: Developing Apps to Extend Open OnDemand - Slides
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Gateways/8236367">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-07-12</td>
                <td style={{ textAlign: "center" }}>PEARC17</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: Current Status and Future Plans
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Current_Status_and_Future_Plans/6225749">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-05-02</td>
                <td style={{ textAlign: "center" }}>SIGHPC Education</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: A Web Platform for HPC with applications in the
                  classroom
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_A_Web_Platform_for_HPC_with_applications_in_the_classroom/6225770">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-01-19</td>
                <td style={{ textAlign: "center" }}>NSF SI2 PI Workshop</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: Access Clusters, Gateways and Interactive Apps
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Access_Clusters_Gateways_and_Interactive_Apps/6225758">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2016-10-07</td>
                <td style={{ textAlign: "center" }}>Gateways16</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: A Unified Platform for Science Gateway Apps
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_A_Unified_Platform_for_Science_Gateway_Apps/6225755">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2016-10-07</td>
                <td style={{ textAlign: "center" }}>XSEDE16</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: Transforming Computational Science Through
                  Omnidisciplinary Software Cyberinfrastructure
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Transforming_Computational_Science_Through_Omnidisciplinary_Software_Cyberinfrastructure/6225779">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2013-06-13</td>
                <td style={{ textAlign: "center" }}>XSEDE13</td>
                <td style={{ textAlign: "center" }}>
                  OSC OnDemand: A Web Platform Integrating Access to HPC
                  Systems, Web and VNC Applications
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/OSC_OnDemand_A_Web_Platform_Integrating_Access_to_HPC_Systems_Web_and_VNC_Applications/6225776">
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default ConfAndPubs;
