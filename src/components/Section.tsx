import React, { memo } from "react"

export default memo(
  ({
    as: type = "article",
    id,
    children,
    className = "",
  }: {
    id: string
    as?: string
    className?: string
    children: React.ReactNode
  }) => {
    const CustomComponent = type as keyof JSX.IntrinsicElements

    return (
      <CustomComponent
        id={id}
        className={`${className} min-vh-100 w-100 flex flex-column justify-around`}
      >
        <div className="pv5 ph4 ph5-m ph6-l">{children}</div>
      </CustomComponent>
    )
  }
)
