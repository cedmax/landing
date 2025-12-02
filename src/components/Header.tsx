import React, { memo } from "react"

const videoUrl = "https://dl.dropboxusercontent.com/s/16y8s4xylk52uyh/drone.mp4"
import { Link } from "react-scroll"

export default memo(() => (
  <header id="header" className="vh-100 w-100 bg-dark-gray">
    <video className="fixed w-100 h-100 object-cover" autoPlay muted loop>
      <source src={videoUrl} />
    </video>
    <div className="absolute w-100 h-100 o-20 bg-black-90" />
    <div className="avenir dt absolute w-100 h-100">
      <div className="dtc v-mid tc white ph3 ph4-l">
        <h1
          style={{ fontFamily: "Impacted" }}
          className="mv2 f-subheadline f-headline-ns fw7"
        >
          Landing
        </h1>
        <div className="ph0 mh0 mv0 measure f4 lh-copy center">
          <p className="f3 fw4">a short film about identity and reconnection</p>
        </div>
        <div className="tc pv4">
          <Link
            className="link dim white f6 f5-ns dib mr3 pointer underline-hover"
            to="about"
            smooth
            title="About"
          >
            About
          </Link>
          <Link
            className="link dim white f6 f5-ns dib mr3 pointer underline-hover"
            to="vision"
            smooth
            title="Vision"
          >
            Vision
          </Link>
          <Link
            className="link dim white f6 f5-ns dib mr3 pointer underline-hover"
            to="trailer"
            smooth
            title="Trailer"
          >
            Trailer
          </Link>
          <Link
            className="link dim white f6 f5-ns dib mr3 pointer underline-hover"
            to="credits"
            smooth
            title="Credits"
          >
            Credits
          </Link>
        </div>
      </div>
    </div>
  </header>
))
