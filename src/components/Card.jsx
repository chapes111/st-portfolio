import React from 'react'
import accessIcon from '../images/accessible-icon.svg'
import appIcon from '../images/app-web-icon.svg'
import changeIcon from '../images/change-circle-icon.svg'
import dbIcon from '../images/db-icon.svg'
import designIcon from '../images/design-pencil-icon.svg'
import lightningIcon from '../images/lightning-icon.svg'
import mobileBlob1 from '../images/mobile-blob-1.svg'

export default function Card(props) {
  return (
    <div className="card-container">
      <h3 className={`card-heading ${props.color}`}>
        {props.heading}
      </h3>
      <div className="card-content">
        {props.entries.map((c,i,a) => {
          return (
            <div className="card-entry" key={i}>
              <img src={c.icon} aria-hidden={true} className="card-icon" />
              <h6 className="card--sub-heading">{c.subHeading}</h6>
              <p className="card--content-text">{c.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
