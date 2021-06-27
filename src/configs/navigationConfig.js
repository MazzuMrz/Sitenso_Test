import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Menu",
    type: "item",
    icon: <Icon.ShoppingCart size={30} />,
    permissions: ["admin", "editor"],
    navLink: "/Sitenso_Test"
  },

  {
    id: "login",
    title: "Login",
    type: "item",
    icon: <Icon.LogIn size={30} />,
    permissions: ["admin", "editor"],
    navLink: "/admin"
  }
  

]

export default navigationConfig

