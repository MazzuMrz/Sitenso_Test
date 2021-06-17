import React from "react"
import {

  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  
} from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import axios from "axios"
import * as Icon from "react-feather"




class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    suggestions: []
  }

  componentDidMount() {
    axios.get("/api/main-search/data").then(({ data }) => {
      this.setState({ suggestions: data.searchResult })
    })
  }

  handleNavbarSearch = () => {
    this.setState({
      navbarSearch: !this.state.navbarSearch
    })
  }


  render() {
    return (
      <ul className="nav navbar-nav navbar-nav-user d-flex row justify-content-center">

        
        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            <Icon.Bell size={30} />
           
          </DropdownToggle>
          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header bg-danger">
              <div className="dropdown-header  mt-0">
                <h2 className="text-black">Solo para vos</h2>
                <h3 className="text-warning">¡Ofertas!</h3>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false
              }}
            >
             
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.DownloadCloud
                      className="font-medium-5 success"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="danger media-heading" tag="h6">
                     50% en Veggies Burgers
                    </Media>
                    <p className="notification-text">
                      Por tu panza y el ambiente♥
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Hasta las 23.30
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.AlertTriangle
                      className="font-medium-5 danger"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="warning media-heading" tag="h6">
                      2x1 en Burgers picantes
                    </Media>
                    <p className="notification-text">
                      Para pasarla entre amigos;)
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Todo el dia de hoy
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.CheckCircle
                      className="font-medium-5 info"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="danger media-heading" tag="h6">
                      Dia de la cerveza!
                    </Media>
                    <p className="notification-text">
                      Si pedis 3 Burgers te regalamos la 4ta!
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Hasta las 21
                    </time>
                  </small>
                </Media>
              </div>
             
            </PerfectScrollbar>
            <li className="dropdown-menu-footer text-warning">
              <DropdownItem tag="a" className="p-3 bg-warning text-center">
                <span className="align-middle text-warning">Entendido</span>
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-none d-xs-none ">
              <span className="user-name text-bold-1000" href="home">
                {this.props.userName}
              </span>
              <span className="user-status " href="home"> Burger factory</span>
            </div>
            <span data-tour="user">
              <img
                src={this.props.userImg}
                className="round d-none d-sm-none"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
         
        </UncontrolledDropdown>
      </ul>
    )
  }
}
export default NavbarUser
