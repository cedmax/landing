import { memo } from "react"
import Section from "./Section"
export default memo(() => (
  <Section id="about" className="bg-white">
    <div className="p2 pv5-ns ph4-ns ph5-m ph6-l">
      <div className="pb5 f4 f2-ns measure center">
        <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
          Landing is a short film about identity and reconnection. Two foster
          children inherit a house in Scotland. The younger boy starts to
          explore the surroundings with his pink dog as soon as he arrives at
          the house, while the elder boy is on his own quest to find the
          connection between the two of them.
        </p>
      </div>
      <div className="cf mw9 center">
        <div className="fl w-100 w-50-l pr2-l">
          <div
            className="pv7 cover bg-center"
            style={{
              background: "url(/images/vision.webp)",
            }}
          ></div>
        </div>
        <div className="fl w-100 w-50-l pt2 pt0-l pl2-l">
          <div
            className="pv7 cover bg-center"
            style={{
              backgroundImage: "url(/images/nighttime.webp)",
            }}
          ></div>
        </div>
      </div>
    </div>
  </Section>
))
