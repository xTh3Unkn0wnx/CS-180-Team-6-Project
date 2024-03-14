import React, { FC } from "react"

interface Props {
  title: string;
}

export const Header:FC<Props> = ({title}) => {
  return (
    <>
      <h1 id="header">{title}</h1>
    </>
  )
}

Header.defaultProps = {
  title: "Live Active"
}
