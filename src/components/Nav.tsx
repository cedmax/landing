import React, { memo } from "react"
import { Link } from "react-scroll"

export default memo(({ next, prev }: { prev: string; next?: string }) => (
  <div className="bg-white-30 di ml-auto pr2 br3 flex items-center br--left justify-center sticky bottom-1 mb3">
    <Link
      to={next || ""}
      disabled={!next}
      smooth
      className={`no-underline near-white bg-animate ${
        !next ? "dn" : `inline-flex pointer bg-near-black hover-bg-gray`
      }  items-center ma2 tc br2 pa2`}
    >
      <svg
        height="48"
        viewBox="0 0 48 48"
        className="dib h15 w15"
        fill="none"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Go to the next section</title>
        <path d="m0 0h48v48h-48z" fillOpacity=".01" />
        <path
          d="m37 18-12 12-12-12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
    </Link>
    <Link
      to={prev}
      smooth
      className="pointer no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
    >
      <svg
        height="48"
        viewBox="0 0 48 48"
        className="dib h15 w15"
        fill="none"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Go to previous section</title>
        <path d="m0 0h48v48h-48z" fill="#fff" fillOpacity=".01" />
        <path
          d="m13 30 12-12 12 12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
    </Link>

    <Link
      to="header"
      smooth
      className="pointer no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
    >
      <svg
        height="48"
        viewBox="0 0 48 48"
        className="dib h15 w15"
        fill="none"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m0 0h48v48h-48z" fill="#fff" fillOpacity=".01" />
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        >
          <path d="m12 33 12-12 12 12" />
          <path d="m12 13h24" />
        </g>
      </svg>
    </Link>
  </div>
))
