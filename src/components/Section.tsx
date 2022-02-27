import React, { memo } from "react"
import Nav from "./Nav"

export default memo(
  ({
    as: type = "article",
    id,
    prev,
    next,
    children,
    className = "",
  }: {
    id: string
    as?: string
    prev?: string
    next?: string
    className?: string
    children: React.ReactNode
  }) => {
    const CustomComponent = type as keyof JSX.IntrinsicElements

    return (
      <CustomComponent
        id={id}
        className={`${className} relative min-vh-100 w-100 flex flex-column justify-around`}
      >
        <div className="pv5 ph4 ph5-m ph6-l">{children}</div>
        <Nav prev={prev} next={next} />
      </CustomComponent>
    )
  }
)
