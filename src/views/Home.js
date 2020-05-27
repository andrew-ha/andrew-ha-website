import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import AboutMe from "./Sections/1_AboutMe.js"
import Experience from "./Sections/2_Experience.js"
import Portfolio from "./Sections/3_Portfolio.js"
import ContactMe from "./Sections/4_ContactMe.js"

import styles from "assets/jss/material-kit-react/views/home.js";

const useStyles = makeStyles(styles);

function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Andrew Ha's Resume"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Andrew Ha</h1>
                <h3 className={classes.subtitle}>
                  Site reliability engineer working in AWS offering deep experience in architecting and implementing DevOps solutions, such as Kubernetes and CI/CD
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <AboutMe />
        <Experience />
        <Portfolio />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}


export default Home;