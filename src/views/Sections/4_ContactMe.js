import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/Sections/4_contactMeStyle.js";

const useStyles = makeStyles(styles);

var name = ""
var email = ""
var message = ""
var isMessageSent = false

const handleName = e => {
  name = e.target.value;
}

const handleEmail = e => {
  email = e.target.value;
}

const handleMessage = e => {
  message = e.target.value;
}

export default function ContactMe() {

  const classes = useStyles();

  async function sendMessage() {
    // console.log(message);
    // isMessageSent = true;
    fetch(
      `https://30e6nx8f03.execute-api.ap-southeast-2.amazonaws.com/prod`,
      {
        method: "POST",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        }),
        body: {
          name: name,
          email: email,
          message: message
        }
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error))
  }  

  return (
    <div className={classes.sections} id="contactme">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Contact Me</h2>
        </div>
        <div>
          <GridContainer justify="flex-start">
            <GridItem xs={12} sm={12} md={6}>
              <p>Please feel free to use the email tool to contact me (WIP)</p>
              <p>You can also contact me by:</p>
              <ul>
                <li>Sending an email</li>
                <a href="mailto:andrew.pvh.ha@gmail.com?Subject=Website%20General%20Enquiry" target="_top">andrew.pvh.ha@gmail.com</a>
                <li>Sending me a message on LinkedIn:</li>
                <a href="https://www.linkedin.com/in/andrewpvhha/" target="_blank">Andrew Ha</a>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <GridContainer justify="flex-start">
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Name"
                    id="font-awesome"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (e) => handleName(e),
                      endAdornment: (
                        <InputAdornment position="end">
                          <i className="fas fa-user" />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email Address"
                    id="font-awesome"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      onChange: (e) => handleEmail(e),
                      endAdornment: (
                        <InputAdornment position="end">
                          <i className="fas fa-at" />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email Body"
                    id="font-awesome"
                    formControlProps={{
                      fullWidth: true
                    }}
                    multiline={true}
                    inputProps={{
                      onChange: (e) => handleMessage(e),
                      endAdornment: (
                        <InputAdornment position="end">
                          <i className="fas fa-envelope" />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={11}>
                  <GridContainer justify="flex-end">
                    <GridItem xs={12} sm={12} md={3}>
                      <Button 
                        color="primary"
                        onClick={() => {sendMessage()}}
                      >
                        Send Email
                      </Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}