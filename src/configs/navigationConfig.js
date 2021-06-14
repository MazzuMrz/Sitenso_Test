import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Menu",
    type: "item",
    icon: <Icon.Smile size={30} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "page2",
    title: "Editar items",
    type: "item",
    icon: <Icon.Coffee size={30} />,
    permissions: ["admin", "editor"],
    navLink: "/page2"
  },
  

  

]

export default navigationConfig

