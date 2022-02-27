import React, { memo } from "react"
import Section from "./Section"

export default memo((props: ISectProps) => (
  <Section {...props}>
    <div className="bg-opaque pv2 pv4-ns ph5-ns pl4 measure-wide f3 center mv5 black-70">
      <h1 className="fw6 f3 avenir">Director's Vision</h1>
      <blockquote className="baskerville ml0 mt0 pl4 black-90 bl bw2 b--blue">
        <p className="lh-copy f4 f3-ns black-70">
          Whereas many find it useful to create different compartments for their
          practice and family life, during the pandemic I felt the urge to
          de-compartamentalise my life and to include my family in my creative
          life.
        </p>
        <p className="lh-copy f4 f3-ns black-70">
          The narrative frame of Landing was born from my younger one's homework
          during homeschooling: the character we created was a boy with a pink
          dog who had inherited a house.
        </p>

        <p className="lh-copy f4 f3-ns black-70">
          In those same weeks, in a Facebook group, two women wrote a post about
          their lost sister who they had not seen since they were little, asking
          for help to locate them. I was really moved by this search for lost
          connections in this time of separation and isolation that forced us
          all to think about our own roots and identity. Informed by these two
          elements, the script slowly emerged by writing down some of the
          conversations I had with my children before bedtime.
        </p>
        <cite className="f6 ttu tracked fs-normal avenir">―Irene Ros</cite>
      </blockquote>
    </div>
  </Section>
))
