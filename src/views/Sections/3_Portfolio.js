import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Description from "@material-ui/icons/Description";
import MusicNote from "@material-ui/icons/MusicNote";
import Computer from "@material-ui/icons/Computer";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/Sections/3_portfolioStyle.js";

const useStyles = makeStyles(styles);

function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.section} id="portfolio">
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>Portfolio</h2>
          </div>
          <GridContainer justify="flex-start">
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 10, md: 10 }
                }}
                tabs={[
                  {
                    tabButton: "Resume",
                    tabIcon: Description,
                    tabContent: (
                      <span>
                        <h3>Resume Website</h3>
                        <p>Created in 2020</p>
                        <p>Created a resume website, with a serverless backend for the email function</p>
                        <ul>
                          <li>Front-End: React</li>
                          <li>Back-End (Made with <a href="https://github.com/andrew-ha/andrew-ha.github.io/blob/master/andrewha-resumewebsite.yaml" target="_blank">CloudFormation</a>):</li>
                          <ul>
                            <li>Resume PDF: S3</li>
                            <li>Email Tool: Serverless Stack (API Gateway, Lambda (Python 3.7), SNS)</li>
                          </ul>
                          <li>Used GitHub to host website</li>
                        </ul>
                        <h4>Technologies Used:</h4>
                        <Tooltip
                          id="tooltip-top"
                          title="HTML5"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-html5 fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="CSS3"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-css3 fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="Javascript"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-js fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="React"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-react fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="AWS"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-aws fa-2x fa-fw" />
                        </Tooltip>
                        <br></br>
                        <br></br>
                        <Button
                          color="primary"
                          href="https://github.com/andrew-ha/andrew-ha.github.io"
                          target="_blank"
                        >
                          GitHub Repository
                        </Button>
                      </span>
                    )
                  },
                  {
                    tabButton: "Streami",
                    tabIcon: MusicNote,
                    tabContent: (
                      <span>
                        <h3>Streami</h3>
                        <p>Created in 2018</p>
                        <p>Created a music playlist webapp to stream music from multiple sources</p>
                        <ul>
                          <li>Front-End: React</li>
                          <li>Back-End: NodeJS, Spotify and Youtube APIs</li>
                          <li>Used Agile Methodologies</li>
                        </ul>
                        <h4>Technologies Used:</h4>
                        <Tooltip
                          id="tooltip-top"
                          title="Javascript"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-js fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="React"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-react fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="Spotify API"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-spotify fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="Youtube API"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-youtube fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="GitHub"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-github fa-2x fa-fw" />
                        </Tooltip>
                      </span>
                    )
                  },
                  {
                    tabButton: "CI/CD",
                    tabIcon: Computer,
                    tabContent: (
                      <span>
                        <h3>CI/CD Pipeline</h3>
                        <p>Created in 2018</p>
                        <p>Created a CI/CD Pipeline to deploy a webapp.</p>
                        <ul>
                          <li>Pipeline is made using AWS CodePipeline</li>
                          <li>Created a CodeCommit repository, CodeBuild environment and ECS cluster with load balancing</li>
                          <li>Took 3 days to complete it</li>
                        </ul>
                        <h4>Technologies Used:</h4>
                        <Tooltip
                          id="tooltip-top"
                          title="AWS"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-aws fa-2x fa-fw" />
                        </Tooltip>
                        <Tooltip
                          id="tooltip-top"
                          title="Linux"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <i className="fab fa-linux fa-2x fa-fw" />
                        </Tooltip>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;