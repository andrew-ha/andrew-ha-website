import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/Sections/2_experienceStyle.js";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import WorkIcon from "@material-ui/icons/Work";
import { FaSuitcase } from 'react-icons/fa'
import { FaHandsHelping } from 'react-icons/fa'
import { FaSchool } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const useStyles = makeStyles(styles);

function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.sections} id="experience">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Experience</h2>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaSuitcase />}
          >
            <h3 className="vertical-timeline-element-title">Amazon Web Services</h3>
            <h4 className="vertical-timeline-element-subtitle">Cloud Engineer (DevOps)</h4>
            <h6 className="vertical-timeline-element-subtitle">Feb 2020 - Present</h6>
            <p>On top of previous responsibilities, I:</p>
            <ul>
              <li>Built CloudFormation templates to simulate customer issues, training 1000+ new employees per year in all AWS offices globally</li>
              <li>Written an article and recorded a video detailing troubleshooting steps for a common CloudFormation issue, deflecting 30+ support tickets a month</li>
              <li>Been on-call for DevOps technologies support (CloudFormation, Kubernetes, CodePipeline etc.)</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaSuitcase />}
          >
            <h3 className="vertical-timeline-element-title">Amazon Web Services</h3>
            <h4 className="vertical-timeline-element-subtitle">Cloud Associate (DevOps)</h4>
            <h6 className="vertical-timeline-element-subtitle">Dec 2018 - Feb 2020</h6>
            <ul>
              <li>Provided effective solutions for 200+ complex customer issues for many AWS services; focusing on DevOps related services (e.g. CloudFormation, Kubernetes, CodePipeline etc.)</li>
              <li>Consulted customers on designing AWS environments using best practices for cloud; such as automating infrastructure deployments, architecting microservices-based architectures and implementing CI/CD pipelines for agile teams</li>
              <li>Helped 10+ customers with time sensitive and high severity issues (e.g. production down)</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(	67, 160, 71)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(	67, 160, 71)' }}
            iconStyle={{ background: 'rgb(	67, 160, 71)', color: '#fff' }}
            icon={<FaHandsHelping />}
          >
            <h3 className="vertical-timeline-element-title">CSE Revue</h3>
            <h4 className="vertical-timeline-element-subtitle">Producer</h4>
            <h6 className="vertical-timeline-element-subtitle">Jan 2018 - Dec 2018</h6>
            <ul>
              <li>Managed aspects of activities including sponsorships and event planning</li>
              <li>Managed tight deadlines whilst innovating ways to promote the show</li>
              <li>Built a culture of high energy and teamwork when managing teams</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaSuitcase />}
          >
            <h3 className="vertical-timeline-element-title">Code Camp</h3>
            <h4 className="vertical-timeline-element-subtitle">Head Teacher</h4>
            <h6 className="vertical-timeline-element-subtitle">Jul 2016 - Jul 2018</h6>
            <ul>
              <li>Assisted in teaching 7-12 year old students to understand programming basics using the Scratch language.</li>
              <li>Displayed a strong ability to teach complex coding concepts into a format which younger students can understand.</li>
              <li>Applied my debugging skills to quickly fix a range of problems in students’ code.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaSuitcase />}
          >
            <h3 className="vertical-timeline-element-title">UNSW</h3>
            <h4 className="vertical-timeline-element-subtitle">AWS Developer</h4>
            <h6 className="vertical-timeline-element-subtitle">Jul 2017 - Mar 2018</h6>
            <ul>
              <li>Built 3 prototypes with facial recognition and speech-to-text capabilities to showcase projects to UNSW executives.</li>
              <li>Experience using AWS Rekognition, S3, Lambda and Transcribe API.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(	67, 160, 71)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(	67, 160, 71)' }}
            iconStyle={{ background: 'rgb(	67, 160, 71)', color: '#fff' }}
            icon={<FaHandsHelping />}
          >
            <h3 className="vertical-timeline-element-title">Vietnamese Buddhist Youth Association</h3>
            <h4 className="vertical-timeline-element-subtitle">Youth Group Leader</h4>
            <h6 className="vertical-timeline-element-subtitle">Jan 2013 - Dec 2017</h6>
            <ul>
              <li>Developed and conducted lesson plans for religious classes for students with varying ages and learning styles</li>
              <li>Collaborated with other leaders and organised many events such as camping trips and ‘Amazing Race’ style activities</li>
              <li>Communicated with team members and students in both English and Vietnamese</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(	67, 160, 71)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(	67, 160, 71)' }}
            iconStyle={{ background: 'rgb(	67, 160, 71)', color: '#fff' }}
            icon={<FaHandsHelping />}
          >
            <h3 className="vertical-timeline-element-title">PwC</h3>
            <h4 className="vertical-timeline-element-subtitle">STEM Academy Participant</h4>
            <h6 className="vertical-timeline-element-subtitle">Aug 2016</h6>
            <ul>
              <li>Participated in 2 days of workshops which taught key professional concepts such as personal branding, design thinking process, importance of CSR (Corporate Social Responsibility) and digital disruption</li>
              <li>Understood the importance of STEM-related skills in industries other than the traditional STEM fields</li>
              <li>Networked with senior partners and peers in a professional manner</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">UNSW</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Science (Computer Science)</h4>
            <h6 className="vertical-timeline-element-subtitle">Jan 2015 - Dec 2018</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">UNSW</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Commerce (Information Systems)</h4>
            <h6 className="vertical-timeline-element-subtitle">Jan 2013 - Dec 2018</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(80, 80, 80)', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;