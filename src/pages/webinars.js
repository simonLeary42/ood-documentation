import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";

const styles = {
  webinars: {
    textAlign: "center",
    padding: "2rem 0",
  },
  table: {
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%"
  },
};
function Webinars() {
  return (
    <Layout title="Webinars">
      <div className={clsx("col col--8")} style={styles.webinars}>
        <h1 id="webinars">Webinars</h1>
        <div className="container" >
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Date</th>
                <th style={{ textAlign: "center" }}>Title</th>
                <th style={{ textAlign: "center" }}>Slides</th>
                <th style={{ textAlign: "center" }}>Media</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-03-08</td>
                <td style={{ textAlign: "center" }}>
                  Introducing Open OnDemand
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Open_Source_General_Purpose_HPC_Portal/6225785">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://vimeo.com/album/4960657/video/253847906">
                    Video
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-06-07</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand: Supporting your HPC needs now more than ever
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Supporting_your_HPC_needs_now_more_than_ever/6225788">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://vimeo.com/album/4960657/video/253852832">
                    Video
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2017-09-06</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand – Jupyter, iHPC, and Authentication
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_1_0_Jupyter_App_Development_Authentication/6225791">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://vimeo.com/album/4960657/video/253850063">
                    Video - Missing 1st 9.5 min
                  </a>{" "}
                  <a href="http://www.osc.edu/sites/osc.edu/files/media/2017_0906_OpenOnDemand_Jupyter.m4a">
                    Audio – Complete
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-01-29</td>
                <td style={{ textAlign: "center" }}>
                  Customizing and Extending Open OnDemand
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Customizing_and_Extending_OnDemand/6225803">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://www.youtube.com/watch?v=OxNBSk5_sTw">
                    Video
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2018-10-17</td>
                <td style={{ textAlign: "center" }}>
                  Using Open OnDemand for Training and Education
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Using_Open_OnDemand_for_Training_and_Education/7224779">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://www.youtube.com/watch?v=OXwfER4NVrQ">
                    Video
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-4-17</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand Project Recap and Roadmap
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_Project_Recap_and_Roadmap/8009687">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://www.youtube.com/watch?v=aO679rz1PsE">
                    Video
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2019-8-20</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand and OpenHPC
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_and_OpenHPC/9693260">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://vimeo.com/355385200">Video</a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2020-1-17</td>
                <td style={{ textAlign: "center" }}>Open OnDemand Live Demo</td>
                <td style={{ textAlign: "center" }}>N/A</td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://www.youtube.com/watch?v=4-w-4wjlnPk&amp;list=PLiHVyvLHAIcw2sM_MYNVX9B1vBmJgEmW3">
                    Video
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2020-3-18</td>
                <td style={{ textAlign: "center" }}>
                  Open OnDemand Project Summary
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/Open_OnDemand_CaRRC_Preso_200317/12006030">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://www.youtube.com/watch?v=0jUAUlcUfYg&amp;feature=youtu.be">
                    Video
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2020-7-02</td>
                <td style={{ textAlign: "center" }}>
                  NVIDIA HPC Summit 2020 - Integrating Cloud Tools to HPC
                  Workflows
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/presentation/NVIDIA_HPC_Summit_2020_-_Integrating_Cloud_Tools_to_HPC_Workflows/12597521">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>Video</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", width: 120 }}>2020-7-08</td>
                <td style={{ textAlign: "center" }}>
                  Supercomputing. Seamlessly. Interactive computing via Open
                  OnDemand. Everywhere.
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://figshare.com/articles/presentation/Open_OnDemand_SGCI_Preso_200701/12597512">
                    Download
                  </a>
                </td>
                <td style={{ textAlign: "center" }}>
                  <a href="https://youtu.be/bnDl7Tht1wc">Video</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Webinars;
