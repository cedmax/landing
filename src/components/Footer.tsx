import React, { memo } from "react"
import Section from "./Section"

export default memo(() => (
  <Section id="credits" as="footer" className="bg-opaque">
    <section className="f4 black-70 avenir center cf">
      <h1 className="tc f5 ttu fw6 tracked mb2 ">Credits</h1>
      <dl className="lh-title pa4 mv0 tc pb0">
        <dt className="f6 b">Director</dt>
        <dd className="ml0 mb3 baskerville">
          <a
            href="https://ireneros.net"
            className="link dim black dib pointer underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irene Ros
          </a>
        </dd>
        <dt className="f6 b mt2">By and with</dt>
        <dd className="ml0 mb3 baskerville">Irene Ros, Mrc & Rtr</dd>
        <dt className="f6 b mt2">Animations</dt>
        <dd className="ml0 mb3 baskerville">
          <a
            href="https://www.rosabeiroa.com/"
            className="link dim black dib pointer underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rosa Beiroa
          </a>{" "}
          and{" "}
          <a
            href="https://www.nicolajanefrancis.com/"
            className="link dim black dib pointer underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nicky Francis
          </a>
        </dd>
        <dt className="f6 b mt2">Original music & sound design</dt>
        <dd className="ml0 mb3 baskerville">
          <a
            href="https://www.lucasfjordan.com/"
            className="link dim black dib pointer underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Jordan
          </a>
        </dd>
        <dt className="f6 b mt2">Colourist</dt>
        <dd className="ml0 mb3 baskerville">
          <a
            href="        https://rebeccagoodeve.co.uk/
            "
            className="link dim black dib pointer underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rebecca Goodeve
          </a>
        </dd>
        <dt className="f6 b mt2">Voices</dt>
        <dd className="ml0 mb3 baskerville">
          Helen Ainsworth & Daniela Bellos Stagg
        </dd>
        <dt className="f6 b mt2">Shooting Location</dt>
        <dd className="ml0 mb3 baskerville">
          The Waterfall House, Pertshire, Scotland
          <br />
          Ochil Hills, Scotland
        </dd>
      </dl>
      <div className="f6 mt5 center tc measure">
        Website by{" "}
        <a
          className="black"
          href="https://cedmax.com"
          target="_blank"
          rel="noreferral noopener"
        >
          cedmax
        </a>
      </div>
    </section>
  </Section>
))
