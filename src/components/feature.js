import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

const styles = {
  features: {
    display: "block",
    alignItems: "center",
    padding: "2rem 3.5em",
    fontSize: 14,
    marginLeft: "auto",
    marginRight: "auto",
   
  },
};

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--12")} style={styles.features}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
