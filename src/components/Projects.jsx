import React from 'react'
import Navbar from './Navbar'
import projectsIcon from '../images/projects-icon.svg'
import Card from './Card'
import sdkIcon from '../images/sdk-api-icon.svg'
import uiIcon from '../images/ui-icon.svg'
import dataTableIcon from '../images/datatable-icon.svg'
import interactiveIcon from '../images/interactive-icon.svg'
import commentsIcon from '../images/comments-icon.svg'
import filterIcon from '../images/filter-icon.svg'
import dbContextIcon from '../images/dbcontext-icon.svg'
import rolesIcon from '../images/roles-icon.svg'
import loggingIcon from '../images/logging-icon.svg'
import proxyIcon from '../images/proxy-icon.svg'
import buildIcon from '../images/build-icon.svg'
import pocIcon from '../images/poc-icon.svg'
import smartContractIcon from '../images/smart-contracts-icon.svg'
import frontEndIcon from '../images/front-end-icon.svg'
import responsiveIcon from '../images/responsive-icon.svg'
import accessibleIcon from '../images/accessible-icon.svg'
import customDesignIcon from '../images/custom-design-icon.svg'
import seoIcon from '../images/seo-icon.svg'
import blobp1 from '../images/blob-projects-1.svg'
import blobp2 from '../images/blob-projects-2.svg'

export default function Projects() {
  return (
    <div className="projects-container">
      <Navbar />
      <img src={blobp1} aria-hidden={true} className="projects-blob-1" />
      <div className="projects">
        <h1 className="projects-heading">Projects</h1>
        <img src={projectsIcon} aria-hidden={true} className="projects-icon" />
      </div>
      <div className="cards-container">
        <Card
          color={'yellow'}
          heading={'S3 Portal'}
          entries={
            [
              {
                icon: sdkIcon,
                subHeading: 'API',
                content: 'Implement an sdk for accessing a web api',
              },
              {
                icon: uiIcon,
                subHeading: 'UI',
                content: 'Developed multiple forms for health insurance enrollemnt',
              },
            ]
          }
        />

        <Card
          color={'purple'}
          heading={'Job Log Viewer'}
          entries={
            [
              {
                icon: dataTableIcon,
                subHeading: 'Data Table',
                content: 'JQuery Datatable to display log entries. Search inputs to filter the table. Option to send a more advanced query to the database',
              },
              {
                icon: interactiveIcon,
                subHeading: 'Interactive',
                content: 'Users can be assigned to a log entry in order to investigate the issue',
              },
              {
                icon: commentsIcon,
                subHeading: 'Comments',
                content: 'Users can comment and add attachments to the log entry'
              },
            ]
          }
        />

        <Card
          color={'orange'}
          heading={'Crosswalk App'}
          entries={
            [
              {
                icon: filterIcon,
                subHeading: 'Filter',
                content: 'JQuery Datatable to display entries. Inputs to filter by column',
              },
              {
                icon: dbContextIcon,
                subHeading: 'DB Context',
                content: 'Dropdown to connect to a different customer (change current DB context)',
              },
              {
                icon: rolesIcon,
                subHeading: 'Roles',
                content: 'Different form based on role of current user'
              },
              {
                icon: loggingIcon,
                subHeading: 'Logging',
                content: 'Logging of all changes'
              },
            ]
          }
        />

        <Card
          color={'green'}
          heading={'Eligibility Service'}
          entries={
            [
              {
                icon: proxyIcon,
                subHeading: 'Proxy',
                content: 'Reverse proxy from DMZ to internal api',
              },
              {
                icon: buildIcon,
                subHeading: 'Build',
                content: 'Defined and managed build and release procedures',
              },
            ]
          }
        />
      </div>
      <img src={blobp2} aria-hidden={true} className="projects-blob-2" />
      <div className="pocs">
        <h1 className="pocs-heading">POC's</h1>
        <img src={pocIcon} aria-hidden={true} className="pocs-icon" />
      </div>
      <div className="cards-container">
        <Card
          color={'purple'}
          heading={'Web 3.0'}
          entries={
            [
              {
                icon: smartContractIcon,
                subHeading: 'Smart Contracts',
                content: 'Wrote smart contracts for a simple banking app',
              },
              {
                icon: frontEndIcon,
                subHeading: 'Front End',
                content: 'React front-end to interact with smart contracts',
              },
            ]
          }
        />

        <Card
          color={'orange'}
          heading={'CSS POC\'s'}
          entries={
            [
              {
                icon: responsiveIcon,
                subHeading: 'Responsive',
                content: 'Designed for mobile and desktop',
              },
              {
                icon: accessibleIcon,
                subHeading: 'Accessible',
                content: 'Accessibility provided with html and css best practices',
              },
            ]
          }
        />

        <Card
          color={'yellow'}
          heading={'websites for small businesses'}
          entries={
            [
              {
                icon: customDesignIcon,
                subHeading: 'Custom Design',
                content: 'Designed for your specific business and brand',
              },
              {
                icon: seoIcon,
                subHeading: 'SEO',
                content: 'Optimized for search engines by using best practices',
              },
            ]
          }
        />

      </div>
    </div>
  )
}
