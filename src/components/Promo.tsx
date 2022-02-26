import { memo } from "react"
import Section from "./Section"

export default memo(() => (
  <Section id="trailer" className="bg-white">
    <div className="measure-wide f3 center mv5">
      <div className="aspect-ratio aspect-ratio--16x9">
        <iframe
          src="https://player.vimeo.com/video/615311590?h=68e496662a&title=0&byline=0&portrait=0"
          className="absolute w-100 h-100"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <section className="measure-wide mb5 pt5 bt b--light-gray tc center">
      <a
        className="link dim gray dib h2 w2 br-100 mr3 "
        href="https://www.facebook.com/landingshortfilm"
        title="Facebook"
        target="_blank"
        rel="noopener noreferral"
      >
        <svg
          data-icon="facebook"
          viewBox="0 0 32 32"
          style={{ fill: "currentcolor" }}
        >
          <title>facebook icon</title>
          <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
        </svg>
      </a>
      <a
        className="link dim gray dib h2 w2 br-100 mr3 "
        href="https://twitter.com/irenevseconomy"
        title="Twitter"
        target="_blank"
        rel="noopener noreferral"
      >
        <svg
          data-icon="twitter"
          viewBox="0 0 32 32"
          style={{ fill: "currentcolor" }}
        >
          <title>twitter icon</title>
          <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
        </svg>
      </a>
      <a
        className="link dim gray dib br-100 h2 w2 mr3 "
        href="https://ireneros.net"
        title="Director's website"
        target="_blank"
        rel="noopener noreferral"
      >
        <svg
          data-icon="github"
          viewBox="0 0 92 92"
          style={{ fill: "currentcolor" }}
        >
          <title>site icon</title>
          <path d="m46 0c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46zm3.7 83.8c-.2 0-.4 0-.7.1v-21.7c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zm-34.3-37.8c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1s.3 6.2.7 9c-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zm23.3-37.8c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5v-21.7c.2 0 .4.1.6.1zm-6.6-.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1v-20.4c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6s-.3 6.6-.9 9.6c-4.6.3-9.9.5-15.8.6zm21.9-19.2c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zm-48.8-21.8c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"></path>
        </svg>
      </a>
    </section>
  </Section>
))
