import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/Sections/1_aboutMeStyle.js";

const useStyles = makeStyles(styles);

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.sections} id="aboutme">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>About Me</h2>
        </div>
        <div>
          <p>I am a self-professed nerd who loves working with cloud computing technologies. It's so exciting to get the chance to directly work with companies such a1_AboutMs Netflix, Snapchat and Disney as an AWS Cloud Engineer. So cool!</p>

          <p>I have 1+ years experience with configuring DevOps related services on AWS. I specialise in Infrastructure as Code technologies (such as Terraform, CloudFormation), Docker container technologies (e.g Kubernetes, ECS) and other deployment services (CI/CD pipelines, Git etc). I have also written articles on solving AWS service issues.</p>

          <p>My goal is to architect and implement cloud environments (AWS, Azure, GCP) to help enterprise customers meet business needs. Please feel free to reach out to me if you have such opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe